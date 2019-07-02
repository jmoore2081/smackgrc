import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import RequestAQuote from "../components/RequestAQuote";

export const SolutionsPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
}) => (
  <div className="content">
    <div
      className="w-full h-64 flex flex-wrap items-center"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`
      }}
    >
      <div className="container m-auto">
        <h1 className="font-bold text-xl">{title}</h1>
      </div>
    </div>
    <section className="section pt-12 section--gradient">
      <div className="container m-auto">
        <div className="section">
          <div>
            <h3 className="font-semibold">{heading}</h3>
            <p>{description}</p>
          </div>
          <div>
            <Features gridItems={intro.blurbs} />
            <div className="pt-12">
              <h3 className="font-semibold">{main.heading}</h3>
              <p>{main.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <RequestAQuote />
  </div>
);

SolutionsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
};

const SolutionsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SolutionsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
      />
    </Layout>
  );
};

SolutionsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default SolutionsPage;

export const SolutionsPageQuery = graphql`
  query SolutionsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            title
          }
          heading
          description
        }
        main {
          heading
          description
        }
      }
    }
  }
`;
