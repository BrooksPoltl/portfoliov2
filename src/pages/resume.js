import React from "react";
import Layout from '../components/layout';
import SEO from "../components/seo";
import resume from "../../content/assets/brooks_poltl_resume_dev.pdf";
export default ({ data }) => {
    return (
        <Layout>
            <SEO title="articles"/>
            <div className = "topic-container">
            <embed src={resume} width="100%" height="1000px" />
            </div>
        </Layout>
    )
};

