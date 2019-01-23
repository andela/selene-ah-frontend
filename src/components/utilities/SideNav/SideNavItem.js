import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SideNavItem = props => (
  <Fragment>
    <li>
      <Link to={props.location}>{props.children}</Link>
    </li>
  </Fragment>
);

SideNavItem.propTypes = {
  location: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default SideNavItem;
