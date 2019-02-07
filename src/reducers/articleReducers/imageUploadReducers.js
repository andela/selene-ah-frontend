import updateStateUtility from '../../helpers/store/utility';
import {
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_IMAGE_SUCCESS,
} from '../../actions/articles/actionTypes';

export const initialState = {
  isUploadingImage: false,
  imageUploadedResponse: null,
  imageUploadError: false,
  imageUploadSuccess: false,
};

/**
 * @description - Dispatches when upload image starts
 * @param {object} state
 * @returns {object} - An updated state
 */
const uploadImage = state => updateStateUtility(
  state,
  { isUploadingImage: true, imageUploadError: false },
);

/**
 * @description - Dispatches when image is uploaded successfully
 * @param {object} state
 * @param {object} payload
 * @returns {object} - An updated state
 */
const uploadImageSuccess = (state, payload) => updateStateUtility(
  state,
  {
    isUploadingImage: false,
    imageUploadError: false,
    imageUploadSuccess: true,
    imageUploadedResponse: payload.secure_url,
  },
);

/**
 * @description - Dispatches when image upload fails
 * @param {object} state
 * @param {object} payload
 * @returns {object} - An updated state
 */
const uploadImageFailure = (state, payload) => updateStateUtility(
  state,
  {
    isUploadingImage: false,
    imageUploadError: true,
    imageUploadedResponse: payload,
  },
);

const imageUploadReducer = (state = initialState, action) => {
  switch (action.type) {
  case UPLOAD_IMAGE:
    return uploadImage(state);
  case UPLOAD_IMAGE_SUCCESS:
    return uploadImageSuccess(state, action.payload);
  case UPLOAD_IMAGE_FAILURE:
    return uploadImageFailure(state, action.payload);
  default:
    return state;
  }
};

export default imageUploadReducer;
