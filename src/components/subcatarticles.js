import React from 'react';
import Layout from './layout';
import Seo from './seo';
import {Link, graphql} from 'gatsby';
import { rhythm } from "../utils/typography"


const SubCatArticles = ({ data, pageContext }) => {
    const posts = data.allMarkdownRemark.edges
    return(
        <Layout>
            <Seo title = {pageContext.topic}/>
            <h1>{pageContext.topic}</h1>
            {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                <article key={node.fields.slug}>
                    <header>
                      <h3
                        style={{
                          marginBottom: rhythm(1 / 4),
                        }}
                      >
                        <Link to={`articles/${node.frontmatter.topic}/${node.frontmatter.subCat}${node.fields.slug}`}>
                          {title}
                        </Link>
                      </h3>
                      <small>{node.frontmatter.date}</small>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </section>
                </article>
        )
      })}
        </Layout>
    )
};

export default SubCatArticles;

export const pageQuery = graphql`
query BlogPostsByTopicByCats($topic: String!, $subCat: String!){
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {topic: {eq: $topic},subCat: {eq: $subCat}}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            topic
            subCat
          }
        }
      }
    }
  }
  
`
