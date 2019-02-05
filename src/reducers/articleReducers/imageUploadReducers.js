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

const updateUploadImage = state => updateStateUtility(
  state,
  { isUploadingImage: true, imageUploadError: false },
);

const updateImageUploadSuccess = (state, payload) => updateStateUtility(
  state,
  {
    isUploadingImage: false,
    imageUploadError: false,
    imageUploadSuccess: true,
    imageUploadedResponse: payload.secure_url,
  },
);

const updateImageUploadFailure = (state, payload) => updateStateUtility(
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
      return updateUploadImage(state);
    case UPLOAD_IMAGE_SUCCESS:
      return updateImageUploadSuccess(state, action.payload);
    case UPLOAD_IMAGE_FAILURE:
      return updateImageUploadFailure(state, action.payload);
    default:
      return state;
  }
};

export default imageUploadReducer;
