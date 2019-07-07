import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, graphql, withPrefix } from "gatsby";
import Fade from "react-reveal/Fade";

import Layout from "../components/Layout";
import Features from "../components/Features";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import professor from "../img/professor.svg";
import ThemeContext from "../context/theme-context";

export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  button,
  mainpitch,
  description,
  intro,
  demoCallout
}) => {
  const theme = useContext(ThemeContext);
  
  useEffect(() => {
    theme.setColor('yellow');
  }, [])
  
  return (
  <div>
    <div className="mt-0 angle-clip-bottom bg-yellow-500 text-white-100 px-4 md:px-0">
      <div className="container py-12 md:py-24 m-auto flex flex-wrap">
        <div className="mx-auto w-full md:w-1/2 md:mx-0">
          <h1>
            <span className="inline-block text-xl font-light pb-4">
              {title}
            </span>
            <br />
            <span className="inline-block text-4xl">{subheading}</span>
          </h1>
          <p className="py-8">
            {button.map(({ buttonText, buttonLink }) => {
              return (
                <Link
                  className="inline-block mr-3 py-4 px-6 shadow-md rounded bg-white-100 hover:bg-sea-500 text-sea-600 font-semibold hover:text-sea-100"
                  to={withPrefix(buttonLink)}
                  key={buttonText}
                >
                  {buttonText}
                </Link>
              );
            })}
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Fade bottom>
            <img
              src={professor}
              alt="Business Governance"
              className="relative z-10"
            />
          </Fade>
        </div>
      </div>
    </div>
    <div className="container m-auto py-12 pb-32 flex">
      <div className="md:w-2/3 content p-4">
        <div>
          <h2 className="after-border-grey">{mainpitch.title}</h2>
        </div>
        <div>
          <h3>{mainpitch.description}</h3>
        </div>
      </div>
      <div className="md:w-1/3 content p-4">
        <Fade bottom>
          <PreviewCompatibleImage imageInfo={mainpitch} />
        </Fade>
      </div>
    </div>
    <div className="bg-sea-500 text-white-100 py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl p-4 pb-24">
          <h3 className="font-semibold text-2xl mb-4 text-white-500 after-border-white">
            {heading}
          </h3>
          <p>{description}</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <Features gridItems={intro.blurbs} />
        </div>
      </div>
    </div>
    <div className="container mx-auto pt-24 pb-12 px-4 md:px-0">
      <div className="text-center">
        <h3 className="text-2xl uppercase after-border-grey mb-4 inline-block">
          {demoCallout.title}
        </h3>
        <p className="my-2">{demoCallout.text}</p>
        <p className="mt-12">
          <Link
            className="block md:inline-block mt-6 py-4 px-6 shadow-md rounded bg-yellow-500 hover:bg-yellow-600 text-yellow-100 font-semibold uppercase"
            to="/contact/"
          >
            {demoCallout.buttonText}
          </Link>
        </p>
      </div>
    </div>
  </div>
)};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  button: PropTypes.array,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  demoCallout: PropTypes.object
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        button={frontmatter.button}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        demoCallout={frontmatter.demoCallout}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        button {
          buttonText
          buttonLink
        }
        mainpitch {
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
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
            title
            text
          }
          heading
          description
        }
        demoCallout {
          title
          text
          buttonText
        }
      }
    }
  }
`;
