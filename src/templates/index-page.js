import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import professor from "../img/professor.svg";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  button,
  mainpitch,
  description,
  intro,
  demoCallout
}) => (
  <div>
    <div className="mt-0 angle-clip-bottom bg-sea-400 text-white-100">
      <div className="container py-12 m-auto flex flex-wrap">
        <div className="mx-auto w-full md:w-1/2 md:mx-0">
          <h1>
            <span className="inline-block text-xl font-light pb-4">{title}</span><br />
            <span className="inline-block text-4xl">{subheading}</span>
          </h1>
          <p className="py-8">
            {button.map(({ buttonText, buttonLink }) => {
              return (
                <Link
                  className="block md:inline-block mr-3 py-4 px-6 shadow-md rounded bg-white-100 hover:bg-sea-100 text-sea-700 font-semibold hover:text-sea-900"
                  to={`${buttonLink}`}
                  key={buttonText}
                >
                  {buttonText}
                </Link>
              );
            })}
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={professor}
            alt="Business Governance"
            className="relative z-10"
          />
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
        <PreviewCompatibleImage imageInfo={mainpitch} />
      </div>
    </div>
    <div className="bg-white-500 text-grey-600 py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl p-4 pb-24">
          <h3 className="font-semibold text-2xl mb-4 text-yellow-500 after-border-yellow">
            {heading}
          </h3>
          <p>{description}</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <Features gridItems={intro.blurbs} />
        </div>
      </div>
    </div>
    <div className="container mx-auto pt-24 pb-12">
      <div className="text-center">
        <h3 className="text-2xl uppercase after-border-grey mb-4 inline-block">
          {demoCallout.title}
        </h3>
        <p className="my-2">{demoCallout.text}</p>
        <p className="mt-12">
          <Link
            className="py-2 px-4 text-xl border-grey-400 border uppercase"
            to="/contact"
          >
            {demoCallout.buttonText}
          </Link>
        </p>
      </div>
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
        image={frontmatter.image}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
