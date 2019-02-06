import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * @description - Button Component
 * @param {object} props
 * @returns {JSX} - Button JSX template
 */
const Button = props => (
  <Fragment>
    <button
      type={props.type}
      id={props.buttonId}
      className={`button
      ${props.classes}`}
      onClick={props.onClick}
    >{props.children}</button>
  </Fragment>
);

Button.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.any,
  type: PropTypes.string,
  buttonId: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
