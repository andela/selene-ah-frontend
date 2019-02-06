/* eslint-disable max-len */
import * as type from '../../../actions/userAction/actionTypes';
import profileReducer, { initialState as defaultState } from '../Profile';
import updateObject from '../../../helpers/store/utility';

describe('profile Reducer', () => {
  it(`should update state when ${type.GET_PROFILE_START} is triggered`, () => {
    expect(profileReducer(defaultState, { type: type.GET_PROFILE_START })).toEqual(
      updateObject(defaultState, {
        isLoading: true,
        error: false,
      }),
    );
  });

  it(`should update state when ${type.GET_PROFILE_FAIL} is triggered`, () => {
    const payload = {
      response: {
        data: {
          message: 'jdjajjdakdja',
        },
      },
    };
    expect(profileReducer(defaultState, { type: type.GET_PROFILE_FAIL, payload })).toEqual(
      updateObject(defaultState, {
        isLoading: false,
        error: true,
        response: payload.response.data.message,
      }),
    );
  });

  it(`should update state when ${type.GET_PROFILE_SUCCESS} is triggered`, () => {
    const payload = {
      userProfile: 'user data',
    };
    expect(profileReducer(defaultState, { type: type.GET_PROFILE_SUCCESS, payload })).toEqual(
      updateObject(defaultState, {
        isLoading: false,
        success: true,
        response: payload,
        userData: payload.userProfile,
      }),
    );
  });
  it('should default state when nothing is triggered', () => {
    expect(profileReducer(defaultState, { type: 'nothing' })).toEqual(
      defaultState,
    );
  });

  it('should default state when no state is passed', () => {
    expect(profileReducer(undefined, { type: 'null' })).toEqual(
      defaultState,
    );
  });
});
