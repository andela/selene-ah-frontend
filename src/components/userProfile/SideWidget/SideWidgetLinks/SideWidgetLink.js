import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import '../side-widget.scss';

const SideWidgetLink = props => (
  <Fragment>
    <p className={props.class + (props.flag ? ' active' : ' inactive') }
      onClick={() => props.handleNavClick(props.title)}
    ><props.icon className="icon"/><span
      className="side-nav-text">{props.title}</span></p>
  </Fragment>
);

SideWidgetLink.propTypes = {
  class: PropTypes.string,
  title: PropTypes.string,
  handleNavClick: PropTypes.func,
  isActive: PropTypes.bool,
  icon: PropTypes.any,
  flag: PropTypes.bool,
};

export default SideWidgetLink;
