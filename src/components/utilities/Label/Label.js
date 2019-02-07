import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * @description - Label Component
 * @param {object} props
 * @returns {JSX} - Label JSX template
 */
const Label = props => (
  <Fragment>
    <label
      htmlFor = {props.for}
    >
      {props.children}
    </label>
  </Fragment>
);

Label.propTypes = {
  for: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};


export default Label;
