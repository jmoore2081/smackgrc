import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const FeatureListPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="container mx-auto">
      <h1 className="text-3xl">{title}</h1>
      <PageContent className="content" content={content} />
    </section>
  );
};

FeatureListPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const FeatureList = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <FeatureListPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

FeatureList.propTypes = {
  data: PropTypes.object.isRequired
};

export default FeatureList;

export const FeatureListQuery = graphql`
  query FeatureList($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
