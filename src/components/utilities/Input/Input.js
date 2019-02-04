import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Input = props => (
  <Fragment>
    <input
      type={props.type}
      placeholder={props.placeholder}
      required={props.required}
      className={`input ${props.classes}`}
      id={props.id}
      minLength={props.minLength}
      maxLength={props.maxLength}
      onChange={props.onChange}
      value={props.inputValue}
    />
  </Fragment>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  minLength: PropTypes.string,
  required: PropTypes.bool.isRequired,
  classes: PropTypes.string,
  inputValue: PropTypes.any,
  onChange: PropTypes.func,
  value: PropTypes.string,
};


export default Input;
