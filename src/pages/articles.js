import React from "react";
import Layout from '../components/layout';
import SEO from "../components/seo";
import topicConfig from "../../data/topicConfig";
import { Link } from "gatsby";

export default ({ data }) => {
    console.log(data);
    const { topicLinks } = topicConfig;
    return (
        <Layout>
            <SEO title="articles"/>
            <div className = "topic-container">
            {topicLinks.map(link => (
                <Link key={link.name} to={link.link} activeClassName="active">
                  {link.name}
                </Link>
              ))}
            </div>
        </Layout>
    )
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
          }
        }
      }
    }
  }
`
