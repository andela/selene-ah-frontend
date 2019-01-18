import updatePasswordreducers from '../updatePassword';
import * as actionTypes from '../../../actions/authAction/actionTypes';

describe('Update Password Reducers', () => {
  const goodState = {
    isLoading: false,
    response: 'Good',
    error: null,
    success: true,
    passwordChanged: true,
  };
  it('should update state when update password success is called', () => {
    expect(updatePasswordreducers({
      ...goodState,
    }, { type: actionTypes.UPDATE_PASSWORD_SUCCESS, payload: 'Go' })).toEqual({
      isLoading: false,
      response: 'Go',
      error: null,
      success: true,
      passwordChanged: true,
    });
  });

  it('should updated state when update password start is called', () => {
    expect(updatePasswordreducers({
      ...goodState,
    }, { type: actionTypes.UPDATE_PASSWORD_START })).toEqual({
      isLoading: true,
      response: null,
      error: null,
      success: null,
      passwordChanged: false,
    });
  });

  it('should updated state when update password failure is called', () => {
    expect(updatePasswordreducers({
      isLoading: false,
      response: null,
      error: null,
      success: null,
      passwordChanged: false,
    }, { type: actionTypes.UPDATE_PASSWORD_FAILED, payload: 'fail' })).toEqual({
      isLoading: false,
      response: 'fail',
      error: true,
      success: null,
      passwordChanged: false,
    });
  });
});
