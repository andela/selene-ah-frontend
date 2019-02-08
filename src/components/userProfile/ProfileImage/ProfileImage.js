import React, { Fragment } from 'react';
import './profile-image.scss';
import PropTypes from 'prop-types';

/**
 * @description - Profile image Component
 * @param {object} props
 * @returns {JSX} - Profile Image JSX template
 */
const ProfileImage = props => (
  <Fragment>
    <div className='avatar-upload'>
      <div className='avatar-preview'>
        <div id='imagePreview'
          style={{ backgroundImage: `url('${props.imageUrl}')` }} >
        </div>
      </div>
    </div>
  </Fragment>
);
ProfileImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
export default ProfileImage;
