import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * @description - Tag Parent Component
 * @param {object} props
 * @returns {JSX} - Tag Parent JSX template
 */
const TagParent = props => (
  <Fragment>
    <div className="tags tags__horizontal hide-on-med-and-down pt-3">
      <div className="wrapper">
        {props.children}
      </div>
    </div>
  </Fragment>
);

TagParent.propTypes = {
  children: PropTypes.any.isRequired,
};

export default TagParent;
