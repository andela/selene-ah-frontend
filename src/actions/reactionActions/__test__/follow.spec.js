import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionTypes from '../actionTypes';
import * as followActions from '../follow';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('### follow Actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should return an action if followUserStart is triggered', () => {
    expect(followActions.followUserStart()).toEqual({
      type: actionTypes.FOLLOW_USER_START,
    });
  });

  it('should return an action if followUserSuccess is triggered', () => {
    expect(followActions.followUserSuccess('response')).toEqual({
      type: actionTypes.FOLLOW_USER_SUCCESS,
      payload: 'response',
    });
  });

  it('should return an action if followUserFailure is triggered', () => {
    const response = {
      data: {
        message: 'response',
      },
    };
    expect(followActions.followUserFailure(response)).toEqual({
      type: actionTypes.FOLLOW_USER_FAILURE,
      payload: 'response',
    });
  });

  it('should return an action if unfollowUserStart is triggered', () => {
    expect(followActions.unFollowUserStart()).toEqual({
      type: actionTypes.UNFOLLOW_USER_START,
    });
  });

  it('should return an action if unfollowUserSuccess is triggered', () => {
    expect(followActions.unFollowUserSuccess('response')).toEqual({
      type: actionTypes.UNFOLLOW_USER_SUCCESS,
      payload: 'response',
    });
  });

  it('should return an action if unFollowUserFailure is triggered', () => {
    expect(followActions.unFollowUserFailure('response')).toEqual({
      type: actionTypes.UNFOLLOW_USER_FAILURE,
      payload: 'response',
    });
  });

  it('should call dispatch success when follow user is called', async () => {
    moxios.stubRequest(`${process.env.SERVER_API}/follow`, {
      status: 200,
      response: {
        data: {
          message: 'oops',
        },
      },
    });
    const expectedActions = [
      { type: actionTypes.FOLLOW_USER_START },
      { type: actionTypes.FOLLOW_USER_SUCCESS, payload: undefined },
    ];
    const store = mockStore({});
    await store.dispatch(followActions.followUser({}, 'follow'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call dispatch failure when followUser fails', async () => {
    moxios.stubRequest(`${process.env.SERVER_API}/follow`, {
      status: 400,
      response: {
        data: {
          message: 'oops',
        },
      },
    });
    const expectedActions = [
      { type: actionTypes.FOLLOW_USER_START },
      {
        type: actionTypes.FOLLOW_USER_FAILURE,
        status: 400,
        payload: undefined,
      },
    ];
    const store = mockStore({});
    await store.dispatch(followActions.followUser({}, 'follow'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call dispatch success when unfollow user is called', async () => {
    const id = 1;
    moxios.stubRequest(`${process.env.SERVER_API}/unfollow/${id}`, {
      status: 200,
      response: {
        data: {
          message: 'oops',
        },
      },
    });
    const expectedActions = [
      { type: actionTypes.UNFOLLOW_USER_START },
      { type: actionTypes.UNFOLLOW_USER_SUCCESS, payload: undefined },
    ];
    const store = mockStore({});
    await store.dispatch(followActions.unFollowUser('unfollow', 1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call dispatch failure when unfollow user fails', async () => {
    moxios.stubRequest(`${process.env.SERVER_API}/unfollow/1`, {
      status: 400,
      response: {
        data: {
          message: 'oops',
        },
      },
    });
    const expectedActions = [
      { type: actionTypes.UNFOLLOW_USER_START },
      { type: actionTypes.UNFOLLOW_USER_FAILURE, payload: undefined },
    ];
    const store = mockStore({});
    await store.dispatch(followActions.unFollowUser('unfollow', 1));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
