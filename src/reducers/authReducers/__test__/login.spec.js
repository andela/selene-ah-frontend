/* eslint-disable max-len */
import * as type from '../../../actions/authAction/actionTypes';
import loginReducer, { initialState as defaultState } from '../login';
import updateObject from '../../../helpers/store/utility';

describe('Login Reducer', () => {
  it(`should update state when ${type.LOGIN_START} is triggered`, () => {
    expect(loginReducer(defaultState, { type: type.LOGIN_START })).toEqual(
      updateObject(defaultState, {
        isLoading: true,
      }),
    );
  });

  it(`should update state when ${type.LOGIN_FAILED} is triggered`, () => {
    const payload = {
      response: {
        data: {
          message: 'jdjajjdakdja',
        },
      },
    };
    expect(loginReducer(defaultState, { type: type.LOGIN_FAILED, payload })).toEqual(
      updateObject(defaultState, {
        isLoading: false,
        error: true,
        errorMessage: payload.response.data.message,
        response: payload,
      }),
    );
  });

  it(`should update state when ${type.LOGIN_SUCCESS} is triggered`, () => {
    expect(loginReducer(defaultState, { type: type.LOGIN_SUCCESS, payload: 'passed' })).toEqual(
      updateObject(defaultState, {
        isLoading: false,
        success: true,
        response: 'passed',
      }),
    );
  });

  it('should default state when nothing is triggered', () => {
    expect(loginReducer(defaultState, { type: 'nothing' })).toEqual(
      defaultState,
    );
  });

  it('should default state when no state is passed', () => {
    expect(loginReducer(undefined, { type: 'null' })).toEqual(
      defaultState,
    );
  });
});
