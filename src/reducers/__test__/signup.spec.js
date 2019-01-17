import reducers from '../authReducers/signup';
import * as actionTypes from '../../actions/authAction/actionTypes';

describe('### Signup Reducers', () => {
  it('should return initial state if action is undefined', () => {
    expect(reducers({
      isLoading: false,
      response: null,
      error: null,
      success: null,
    }, {})).toEqual({
      isLoading: false,
      response: null,
      error: null,
      success: null,
    });
  });

  it('should return an updated state if signup start is called', () => {
    expect(reducers({
      isLoading: false,
      response: null,
      error: null,
      success: null,
    }, { type: actionTypes.SIGN_UP_START })).toEqual({
      isLoading: true,
      response: null,
      error: false,
      success: null,
    });
  });

  it('should return an updated state if signup failure is called', () => {
    const response = {
      response: {
        data: {
          message: 'me',
        },
      },
    };
    expect(reducers({
      isLoading: false,
      response: null,
      error: null,
      success: null,
    }, { type: actionTypes.SIGN_UP_FAILURE, payload: response })).toEqual({
      isLoading: false,
      response: 'me',
      error: true,
      success: null,
    });
  });

  it('should return an updated state if signup success is called', () => {
    expect(reducers({
      isLoading: false,
      response: null,
      error: null,
      success: null,
    }, { type: actionTypes.SIGN_UP_SUCCESS, payload: 'success' })).toEqual({
      isLoading: false,
      response: 'success',
      error: null,
      success: true,
    });
  });
});
