import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import RequestAQuote from "../components/RequestAQuote";

export const RequirementsPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  fullImage
}) => (
  <div className="content">
    <div
      className="w-full flex flex-wrap items-center bg-sea-500"
    >
      <div className="container m-auto flex flex-wrap">
        <h1 className="w-1/2 font-bold text-xl">{title}</h1>
        <Img className="w-1/2" fluid={image.childImageSharp.fluid} alt="GRC Requirements" />
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
            <div
              className="full-width-image-container"
              style={{
                backgroundImage: `url(${
                  fullImage.childImageSharp
                    ? fullImage.childImageSharp.fluid.src
                    : fullImage
                })`
              }}
            />
          </div>
        </div>
      </div>
    </section>
    <RequestAQuote />
  </div>
);

RequirementsPageTemplate.propTypes = {
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
  }),
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

const RequirementsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <RequirementsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        fullImage={frontmatter.full_image}
      />
    </Layout>
  );
};

RequirementsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default RequirementsPage;

export const RequirementsPageQuery = graphql`
  query RequirementsPage($id: String!) {
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
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
