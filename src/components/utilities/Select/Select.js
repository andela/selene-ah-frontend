import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props - array or object or options
 * @returns {JSX} jsx for rendering select elements
 */
const Select = props => (
  <Fragment>
    <select
      className={props.classes} name={props.name} onChange={props.onChange}>
      {props.children}
    </select>
  </Fragment>
);

Select.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.any,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default Select;
