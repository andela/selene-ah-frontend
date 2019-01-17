import axios from 'axios';

import {
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_IMAGE_SUCCESS,
} from './imageUploadActionTypes';

export const uploadImage = () => ({
  type: UPLOAD_IMAGE,
});

export const uploadImageFailure = payload => ({
  type: UPLOAD_IMAGE_FAILURE,
  payload,
});

export const uploadImageSuccess = payload => ({
  type: UPLOAD_IMAGE_SUCCESS,
  payload,
});

const uploadImageAction = image => async (dispatch) => {
  dispatch(uploadImage());
  try {
    const response = await axios.post(`${process.env.CLOUDINARY_API_BASE_URL}`,
      image, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    return dispatch(uploadImageSuccess(response.data));
  } catch (error) {
    return dispatch(uploadImageFailure(error));
  }
};

export default uploadImageAction;
