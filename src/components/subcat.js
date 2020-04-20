import React from 'react';
import Layout from './layout';
import Seo from './seo';
import {Link, graphql} from 'gatsby';
import topicConfig from "../data/topicConfig";

const NoSubCat = ({ pageContext }) => {
    let currentTopic;
    const topics = topicConfig.topicLinks;
    for (let i = 0; i < topics.length; i++) {
      const topic = topics[i].link.substring(10);
      if (topic === pageContext.topic) {
        currentTopic = topics[i];
      }
    }
    return(
        <Layout>
            <Seo title = {pageContext.topic}/>
            <h1>{pageContext.topic}</h1>
            <div className = "topic-container">  
            {currentTopic.subCats.map((cat, index) => {
              return <Link key={index} to={`${currentTopic.link}/${cat.replace(/\s+/g, '-').toLowerCase()}`} activeClassName="active">
                {cat}
              </Link>
              })}
            </div>
        </Layout>
    )
};

export default NoSubCat;

export const pageQuery = graphql`
query BlogPostsByTopicSubCat($topic: String!){
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {topic: {eq: $topic}}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            topic
            subCat
          }
        }
      }
    }
  }
  
`
