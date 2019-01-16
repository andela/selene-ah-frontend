import resetPasswordReducers from '../resetPassword';
import * as actionTypes from '../../../actions/authAction/actionTypes';

describe('Reset Password Reducers', () => {
  const goodState = {
    isLoading: false,
    response: 'Good',
    error: null,
    success: true,
  };

  it('should update state when reset password success is called', () => {
    expect(resetPasswordReducers({
      ...goodState,
    }, { type: actionTypes.RESET_PASSWORD_SUCCESS, payload: 'Good' })).toEqual({
      ...goodState,
    });
  });

  it('should updated state when reset password start is called', () => {
    expect(resetPasswordReducers({
      ...goodState,
    }, { type: actionTypes.RESET_PASSWORD_START })).toEqual({
      isLoading: true,
      response: null,
      error: null,
      success: null,
    });
  });

  it('should updated state when reset password failure is called', () => {
    expect(resetPasswordReducers({
      isLoading: false,
      response: null,
      error: null,
      success: null,
    }, { type: actionTypes.RESET_PASSWORD_FAILED, payload: 'fail' })).toEqual({
      isLoading: false,
      response: 'fail',
      error: true,
      success: null,
    });
  });
});
