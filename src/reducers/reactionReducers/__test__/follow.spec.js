import reducers from '../follow';
import * as actionTypes from '../../../actions/reactionActions/actionTypes';

describe('### Follow Reducers', () => {
  it('should return initial state if action is undefined', () => {
    expect(reducers({
      loading: false,
      response: null,
      error: null,
      success: null,
    }, {})).toEqual({
      loading: false,
      response: null,
      error: null,
      success: null,
    });
  });

  it('should return an updated state if followuserstart is called', () => {
    expect(reducers({
      loading: false,
      response: null,
      error: null,
      success: null,
    }, { type: actionTypes.FOLLOW_USER_START })).toEqual({
      loading: true,
      response: null,
      error: false,
      success: false,
    });
  });

  it('should return an updated state if followUserFailure is called', () => {
    expect(reducers({
      loading: false,
      response: null,
      error: null,
      success: null,
    }, { type: actionTypes.FOLLOW_USER_FAILURE, payload: 'hi' })).toEqual({
      loading: false,
      response: 'hi',
      error: true,
      success: null,
    });
  });

  it('should return an updated state if followUserSuccess is called', () => {
    expect(reducers({
      loading: false,
      response: null,
      error: null,
      success: null,
    }, {
      type: actionTypes.FOLLOW_USER_SUCCESS,
      payload: 'success',
    })).toEqual({
      loading: false,
      response: 'success',
      error: null,
      success: true,
    });
  });

  it('should return an updated state if unfollowuserstart is called', () => {
    expect(reducers({
      unloading: false,
      response: null,
      unfollowError: null,
      unfollowSuccess: null,
    }, { type: actionTypes.UNFOLLOW_USER_START })).toEqual({
      unloading: true,
      response: null,
      unfollowError: false,
      unfollowSuccess: false,
    });
  });

  it('should return an updated state if unfollowUserFailure is called', () => {
    const response = 'hi';
    expect(reducers({
      unloading: false,
      response: null,
      unfollowError: null,
      unfollowSuccess: null,
    }, {
      type: actionTypes.UNFOLLOW_USER_FAILURE,
      payload: response,
    })).toEqual({
      unloading: false,
      response: 'hi',
      unfollowError: true,
      unfollowSuccess: null,
    });
  });

  it('should return an updated state if unfollowUserSuccess is called', () => {
    expect(reducers({
      unloading: false,
      response: null,
      unfollowError: null,
      unfollowSuccess: null,
    }, {
      type: actionTypes.UNFOLLOW_USER_SUCCESS,
      payload: 'success',
    })).toEqual({
      unloading: false,
      response: 'success',
      unfollowError: null,
      unfollowSuccess: true,
    });
  });
});
