import React from 'react';
import PropTypes from 'prop-types';
import './user-Info.scss';
import twitter from '../../../assets/images/socials/twitter.svg';
import email from '../../../assets/images/socials/mail.svg';
import facebook from '../../../assets/images/socials/facebook.svg';
import edit from '../../../assets/images/edit.svg';
import SocialLinks from '../SocialLinks/SocialLinks';
import ProfileImage from '../ProfileImage/ProfileImage';
import userIcon from '../../../assets/images/user.svg';

/**
 * @description - UserInfo page
 * @param {object} props
 * @returns {JSX} - UserInfo template
 */
const UserInfo = props => (
  <div className="user-profile-top">
    <div className="row">
      <div className="user-top">
        <ProfileImage classname="image-size" imageUrl={props.imageUrl} />
        <div className="profile-details">
          <h6>
            <strong>{props.name}</strong>
          </h6>
          <p>
            {props.bio}
          </p>
          <ul>
            <SocialLinks icon={userIcon}>
              {props.SocialLinks.userName}
            </SocialLinks>
            <SocialLinks icon={twitter}>
              {props.SocialLinks.twitter}
            </SocialLinks>
            <SocialLinks icon={facebook}>
              {props.SocialLinks.facebook}
            </SocialLinks>
            <SocialLinks icon={email}>{props.SocialLinks.email}</SocialLinks>
          </ul>
        </div>
        <button className="edit-button" onClick={() => props.openModal()}>
          <img src={edit} /> Edit
        </button>
      </div>
    </div>
  </div>
);

UserInfo.propTypes = {
  SocialLinks: PropTypes.object,
  imageUrl: PropTypes.string,
  bio: PropTypes.string,
  openModal: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
export default UserInfo;
