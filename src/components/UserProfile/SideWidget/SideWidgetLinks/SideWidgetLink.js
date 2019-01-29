import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SideWidgetLink = props => (
  <Fragment>
    <Link to={props.path} className={props.class}
    >{props.title}</Link>
  </Fragment>
);
SideWidgetLink.propTypes = {
  class: PropTypes.string,
  title: PropTypes.string,
  path: PropTypes.string,
};

export default SideWidgetLink;
