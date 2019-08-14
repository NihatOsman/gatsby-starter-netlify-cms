import React from 'react';
import PropTypes from 'prop-types'
import { ListPageTemplate } from '../../templates/list-page'
const ListPagePreview = ({ entry, widgetFor }) => (
  <ListPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)


ListPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ListPagePreview
