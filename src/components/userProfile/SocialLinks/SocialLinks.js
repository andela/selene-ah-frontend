import React from 'react';
import PropTypes from 'prop-types';
import './social-links.scss';

/**
 * @description - Social links Component
 * @param {object} props
 * @returns {JSX} - Social links JSX template
 */
const SocialLinks = props => (
  <li id="social-link">
    <img src={props.icon} className="social-image" />
    <span className="li-span">{props.children}</span>
  </li>
);

SocialLinks.propTypes = {
  icon: PropTypes.any.isRequired,
  children: PropTypes.any,
};
export default SocialLinks;
