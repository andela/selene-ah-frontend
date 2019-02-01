import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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
