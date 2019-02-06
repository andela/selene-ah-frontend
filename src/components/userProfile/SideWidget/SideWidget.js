import React from 'react';
import PropTypes from 'prop-types';
import SideWidgetLink from './SideWidgetLinks/SideWidgetLink';
import ProfileLinks from './ProfileLinks';
import './side-widget.scss';

/**
 * @description - Sidewidget Component
 * @param {object} props
 * @returns {JSX} - SideWidget JSX template
 */
const SideWidget = (props) => {
  const profileLinks = ProfileLinks(props);
  return (
    <div className="side-card m2 l2">
      { profileLinks.map(profileLink => (
        <SideWidgetLink key={profileLink.id} class={profileLink.class}
        title={profileLink.title} icon={profileLink.icon}
        flag={profileLink.flag}
        handleNavClick={props.handleNavClick}
        />
      )) }
   </div>
  );
};

SideWidget.propTypes = {
  handleNavClick: PropTypes.func,
  activeStat: PropTypes.bool,
  activeArticle: PropTypes.bool,

};

export default SideWidget;
