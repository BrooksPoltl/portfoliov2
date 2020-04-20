const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const noSubCatPage = path.resolve(`./src/components/nosubcat.js`)
  const subCatPage = path.resolve(`./src/components/subcat.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                topic
                subCat
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }
  const topicBuilder = {};
  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    const topic = post.node.frontmatter.topic;
    const subCat = post.node.frontmatter.subCat;
    if (subCat) {
      createPage({
        path: `articles/${topic}/${subCat}${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    } else {
      createPage({
        path: `articles/${topic}${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    }
    
    if (!topicBuilder[topic]) {
      if(subCat) {
        createPage({
          path: `articles/${topic}`,
          component: subCatPage,
          context: {
            topic,
            subCat
          },
        })
      } else {
        createPage({
          path: `articles/${topic}`,
          component: noSubCatPage,
          context: {
            topic,
          },
        })
      }
      topicBuilder[topic] = true;
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
