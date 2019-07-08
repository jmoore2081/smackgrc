import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Fade from "react-reveal/Fade";
import Layout from "../components/Layout";
import Features from "../components/Features";
import RequestAQuote from "../components/RequestAQuote";
import ThemeContext from "../context/theme-context";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const SolutionsPageTemplate = ({
  image,
  title,
  mainDescription,
  heading,
  description,
  intro,
  main
}) => {
  const theme = useContext(ThemeContext);
  const themeColor = 'pink';

  useEffect(() => {
    theme.setColor(themeColor);
  }, []);

  return (
    <div>
      <div
        className={`w-full flex flex-wrap items-center bg-${themeColor}-500 py-12 angle-clip-bottom px-4 md:px-0`}
      >
        <div className="container m-auto flex flex-wrap content">
          <div className="w-full md:w-1/2 pt-8 pr-0 md:pr-16 text-white-100">
            <h1 className="font-bold text-xl">{title}</h1>
            <p>{mainDescription}</p>
          </div>
          <div className="w-full md:w-1/2 py-6 md:py-0">
            <Fade bottom>
              <PreviewCompatibleImage imageInfo={{image}} alt="GRC Solutions" />
            </Fade>
          </div>
        </div>
      </div>
      <section className="mb-12 pt-12 px-4 md:px-0">
        <div className="container m-auto">
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
      </section>
      <RequestAQuote />
    </div>
  );
};

SolutionsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  mainDescription: PropTypes.string,
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
  })
};

const SolutionsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SolutionsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        mainDescription={frontmatter.mainDescription}
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
        mainDescription
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
                fluid(maxWidth: 1200, quality: 64) {
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
