import * as type from '../../../actions/userAction/actionTypes';
import updateProfileReducer, { initialState as defaultState } from '../profile';
import updateObject from '../../../helpers/store/utility';

describe('Update Profile Reducer', () => {
  it('should update state when update profile start is triggered', () => {
    expect(updateProfileReducer(defaultState,
      { type: type.UPDATE_PROFILE_START })).toEqual(
      updateObject(defaultState, {
        isLoading: true,
        error: false,
      }),
    );
  });

  it('should update state when update profile failed is triggered', () => {
    const payload = {
      response: {
        data: {
          message: 'jdjajjdakdja',
        },
      },
    };
    expect(updateProfileReducer(defaultState,
      { type: type.UPDATE_PROFILE_FAIL, payload })).toEqual(
      updateObject(defaultState, {
        isLoading: false,
        error: true,
        response: payload.response.data.message,
      }),
    );
  });

  it('should update state when upodate profile test is triggered', () => {
    const profileData = 'user data';
    expect(updateProfileReducer(defaultState,
      {
        type: type.UPDATE_PROFILE_SUCCESS,
        payload: 'true',
        profileData,
      })).toEqual(
      updateObject(defaultState, {
        isLoading: false,
        success: true,
        response: 'true',
        isProfileUpdate: true,
        userData: profileData,
      }),
    );
  });

  it('should default state when nothing is triggered', () => {
    expect(updateProfileReducer(defaultState, { type: 'nothing' })).toEqual(
      defaultState,
    );
  });

  it('should default state when no state is passed', () => {
    expect(updateProfileReducer(undefined, { type: 'null' })).toEqual(
      defaultState,
    );
  });
});
