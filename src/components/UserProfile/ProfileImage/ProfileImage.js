import React, { Fragment } from 'react';
import './_profileImage.scss';
import PropTypes from 'prop-types';

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
