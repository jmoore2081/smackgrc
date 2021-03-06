import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Fade from "react-reveal/Fade";
import Layout from "../components/Layout";
import { MakeHTMLContent } from "../components/Content";
import ThemeContext from "../context/theme-context";
import RequestAQuote from "../components/RequestAQuote";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const SectionsTemplate = ({
  title,
  mainDescription,
  sections,
  image,
  image_description,
  // content,
  // contentComponent
}) => {
  // const PageContent = contentComponent || Content;

  const theme = useContext(ThemeContext);
  const themeColor = "blue";

  useEffect(() => {
    theme.setColor(themeColor);
  }, []);

  return (
    <div>
      <div
        className={`w-full flex flex-wrap items-center bg-${themeColor}-500 py-12 angle-clip-bottom px-4 md:mb-12 md:px-0`}
      >
        <div className="container m-auto flex flex-wrap content">
          <div className="w-full md:w-1/2 pt-8 pr-0 md:pr-16 text-white-100">
            <h1 className="font-bold text-xl">{title}</h1>
            <MakeHTMLContent content={mainDescription} />
          </div>
          <div className="w-full md:w-1/2 py-6 md:py-0">
            <Fade bottom>
              <PreviewCompatibleImage imageInfo={{image}} alt={image_description} />
            </Fade>
          </div>
        </div>
      </div>
      {sections.map(section => {
        return (
          <div key={section.title}>
            <div
              className={`bg-${section.background_color}-500 text-${section.text_color}-500 py-24`}
            >
              <div
                className={`container m-auto flex px-4 md:px-0 flex-wrap ${
                  section.left_or_right === "left" ? "flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2 md:px-8 mb-4 md:mb-0">
                  <Fade bottom>
                    <PreviewCompatibleImage
                      imageInfo={{ image: section.image }}
                      alt={section.title}
                    />
                  </Fade>
                </div>
                <div className="w-full md:w-1/2 md:px-8 md:pt-4">
                  <h3 className="text-3xl">{section.title}</h3>
                  <MakeHTMLContent className="content" content={section.text} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* <section className="container mx-auto py-12 px-4 md:px-0">
        <PageContent className="content" content={content} />
      </section> */}
      <RequestAQuote />
    </div>
  );
};

SectionsTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  mainDescription: PropTypes.string,
  sections: PropTypes.array,
  content: PropTypes.string,
  image_description: PropTypes.string,
  // contentComponent: PropTypes.func
};

const Sections = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SectionsTemplate
        // contentComponent={HTMLContent}
        title={post.frontmatter.title}
        mainDescription={post.frontmatter.mainDescription}
        sections={post.frontmatter.sections}
        image={post.frontmatter.image}
        image_description={post.frontmatter.image_description}
        content={post.html}
      />
    </Layout>
  );
};

Sections.propTypes = {
  data: PropTypes.object.isRequired
};

export default Sections;

export const SectionsQuery = graphql`
  query Sections($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
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
        image_description
        sections {
          image {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
          title
          left_or_right
          background_color
          text_color
        }
      }
    }
  }
`;
