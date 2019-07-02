import React from "react";
import PropTypes from "prop-types";
import marked from "marked";
import Fade from "react-reveal/Fade";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { HTMLContent } from "../components/Content";

const FeatureGrid = ({ gridItems }) => (
  <div className="flex flex-wrap container mx-auto items-stretch">
    {gridItems.map(item => {
      return (
        <Fade key={item.text} bottom>
          <div className="p-4 w-full md:w-1/2">
            <div className="px-8 py-12 h-full rounded bg-white-100 text-grey-700 shadow-lg overflow-hidden border border-white-300">
              <div
                style={{
                  width: "240px"
                }}
                className="text-center mx-auto py-4"
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
              <h3 className="text-xl mb-2">{item.title}</h3>
              <HTMLContent content={marked(item.text)} />
            </div>
          </div>
        </Fade>
      );
    })}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
