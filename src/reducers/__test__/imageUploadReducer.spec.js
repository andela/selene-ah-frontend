/* eslint-disable max-len */
import * as imageUploadActionTypes from '../../actions/articles/imageUploadActionTypes';
import imageUploadReducer, { initialState as defaultState } from '../articleReducers/imageUploadReducers';
import stateUpdateUtility from '../../helpers/store/utility';

describe('Image Upload Reducer', () => {
  it(`should update state when ${imageUploadActionTypes.UPLOAD_IMAGE} is triggered`, () => {
    expect(imageUploadReducer(defaultState, { type: imageUploadActionTypes.UPLOAD_IMAGE })).toEqual(
      stateUpdateUtility(defaultState, {
        isUploadingImage: true,
      }),
    );
  });

  it(`should update state when ${imageUploadActionTypes.UPLOAD_IMAGE_FAILURE} is triggered`, () => {
    const payload = {
      response: {
        data: {
          message: 'Sorry, could not get categories',
        },
      },
    };
    expect(imageUploadReducer(defaultState, { type: imageUploadActionTypes.UPLOAD_IMAGE_FAILURE, payload })).toEqual(
      stateUpdateUtility(defaultState, {
        isUploadingImage: false,
        imageUploadError: true,
        imageUploadedResponse: payload,
        imageUploadSuccess: false,
      }),
    );
  });

  it(`should update state when ${imageUploadActionTypes.UPLOAD_IMAGE_SUCCESS} is triggered`, () => {
    const payload = {
      secure_url: 'jdajjdjak',
    };
    expect(imageUploadReducer(defaultState, { type: imageUploadActionTypes.UPLOAD_IMAGE_SUCCESS, payload })).toEqual(
      stateUpdateUtility(defaultState, {
        isUploadingImage: false,
        imageUploadError: false,
        imageUploadedResponse: payload.secure_url,
        imageUploadSuccess: true,
      }),
    );
  });

  it('should default state when nothing is triggered', () => {
    expect(imageUploadReducer(defaultState, { type: 'nothing' })).toEqual(
      defaultState,
    );
  });

  it('should default state when no state is passed', () => {
    expect(imageUploadReducer(undefined, { type: 'null' })).toEqual(
      defaultState,
    );
  });
});
