import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * @description - SocialButtons Component
 * @param {object} props
 * @returns {JSX} - Social Button JSX template
 */
const SocialButton = props => (
  <Fragment>
    <div
      className={`${props.classes}`}>{props.children}</div>
  </Fragment>
);

SocialButton.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.string,
};

export default SocialButton;
