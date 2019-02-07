import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './tag.scss';

/**
 * @description - Tag Component
 * @param {object} props
 * @returns {JSX} - Tag JSX template
 */
const Tag = props => (
  <Fragment>
    <div className="tag--button">
      <a href="#" className={`tag ${props.isActive ? 'tag__primary' : ''}`}>
        <props.icon />
        {props.children}
      </a>
    </div>
  </Fragment>
);

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.any,
  isActive: PropTypes.bool,
};

export default Tag;
