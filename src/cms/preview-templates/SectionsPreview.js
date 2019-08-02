import React from 'react'
import PropTypes from 'prop-types'
import { SectionsTemplate } from '../../templates/sections'

const SectionsPreview = ({ entry, widgetFor }) => (
  <SectionsTemplate
    title={entry.getIn(['data', 'title'])}
    mainDescription={entry.getIn(['data', 'mainDescription'])}
    sections={entry.getIn(['data', 'sections'])}
    image={entry.getIn(['data', 'image'])}
    content={widgetFor('body')}
  />
)

SectionsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SectionsPreview
