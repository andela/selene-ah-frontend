import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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
