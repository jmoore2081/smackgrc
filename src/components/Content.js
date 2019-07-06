import React from 'react'
import PropTypes from 'prop-types'
import marked from "marked"

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

export const MakeHTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: marked(content) }} />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
