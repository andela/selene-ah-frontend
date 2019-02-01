/* eslint-disable max-len */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actionTypes from '../actionTypes';
import * as socialAuthActions from '../socialAuth';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('### SocialAuth Actions', () => {
  const error = {
    message: 'error occured',
  };
  const url = 'http://localhost:3000/api/v1/auth/google/callback';
  const socialToken = '?eytoskl39i0j443322323klklvdslfnkdfklnsllmd';

  const newUser = true;
  beforeAll(() => {
    moxios.install();
  });
  afterAll(() => {
    moxios.uninstall();
  });

  it('should return an action if authSucces is triggered for Google new user',
    () => {
      expect(socialAuthActions.authSuccess('google', newUser)).toEqual({
        type: actionTypes.GOOGLE_AUTH_SUCCESS,
        newUser,
      });
    });
  it('should return an action if authSucces is triggered for facebook new User',
    () => {
      expect(socialAuthActions.authSuccess('facebook', newUser))
        .toEqual({
          type: actionTypes.FACEBOOK_AUTH_SUCCESS,
          newUser,
        });
    });

  it('should return null if authSucces is triggered for fake type',
    () => {
      expect(socialAuthActions.authSuccess('fake', newUser))
        .toEqual(null);
    });

  it('should return an action if authfail is triggered for google', () => {
    expect(socialAuthActions.authFail(error, 'google')).toEqual({
      type: actionTypes.GOOGLE_AUTH_FAIL,
      payload: error,
    });
  });

  it('should return an action if authfail is triggered for facebook',
    () => {
      expect(socialAuthActions.authFail(error, 'facebook')).toEqual({
        type: actionTypes.FACEBOOK_AUTH_FAIL,
        payload: error,
      });
    });

  it('should return an action if auth type is google for status 200',
    async () => {
      const authType = 'google';
      const mockResponse = {
        data: {
          message: 'login successful',
          token: 'eytoskl39i0jklnsllmd',
        },
      };
      const mergedURL = url + socialToken;
      moxios.stubRequest(mergedURL, {
        status: 200,
        response: mockResponse,
      });
      const expectedActions = [{
        newUser: false,
        type: 'GOOGLE_AUTH_SUCCESS',
      }];
      const store = mockStore({});
      await store
        .dispatch(socialAuthActions.socialAuth(url, socialToken, authType));
      expect(store.getActions()).toEqual(expectedActions);
    });

  it('should return an action if auth type is facebook for status 200',
    async () => {
      const authType = 'facebook';
      const mockResponse = {
        data: {
          message: 'login successful',
          token: 'eytoskl39i0jklnsllmd',
        },
      };
      const mergedURL = url + socialToken;
      moxios.stubRequest(mergedURL, {
        status: 200,
        response: mockResponse,
      });
      const expectedActions = [{
        newUser: false,
        type: 'FACEBOOK_AUTH_SUCCESS',
      }];
      const store = mockStore({});
      await store
        .dispatch(socialAuthActions.socialAuth(url, socialToken, authType));
      expect(store.getActions()).toEqual(expectedActions);
    });

  it('should return an action if auth type is twitter for status 200',
    async () => {
      const authType = 'twitter';
      const mockResponse = {
        data: {
          message: 'login successful',
          token: 'eytoskl39i0jklnsllmd',
        },
      };
      const mergedURL = url + socialToken;
      moxios.stubRequest(mergedURL, {
        status: 200,
        response: mockResponse,
      });
      const expectedActions = [{
        newUser: false,
        type: 'TWITTER_AUTH_SUCCESS',
      }];
      const store = mockStore({});
      await store
        .dispatch(socialAuthActions.socialAuth(url, socialToken, authType));
      expect(store.getActions()).toEqual(expectedActions);
    });

  it('should return an action if auth type is twitter for status 201',
    async () => {
      const newUserUrl = 'http://localhost:3000/api/v1/auth/twitter/callback';
      const newST = '?eytoskl39i0j443322323klklvdslfnkdh89fklnsllmd';
      const authType = 'twitter';
      const mockResponse = {
        data: {
          message: 'registration successful',
          token: 'eytoskl39i0jklnsllmd',
        },
      };
      const mergedURL = newUserUrl + newST;
      moxios.stubRequest(mergedURL, {
        status: 201,
        response: mockResponse,
      });
      const expectedActions = [{
        newUser: true,
        type: 'TWITTER_AUTH_SUCCESS',
      }];
      const store = mockStore({});
      await store
        .dispatch(socialAuthActions.socialAuth(newUserUrl, newST, authType));
      expect(store.getActions()).toEqual(expectedActions);
    });

  it('should return an action if auth type is facebook for status 201',
    async () => {
      const newUserUrl = 'http://localhost:3000/api/v1/auth/facebook/callback';
      const newST = '?eytoskl39i0j443322323klklvdslfnkd90fklnsllmd';
      const authType = 'facebook';
      const mockResponse = {
        data: {
          message: 'login successful',
          token: 'eytoskl39i0jklnsllmd',
        },
      };
      const mergedURL = newUserUrl + newST;
      moxios.stubRequest(mergedURL, {
        status: 201,
        response: mockResponse,
      });
      const expectedActions = [{
        newUser: true,
        type: 'FACEBOOK_AUTH_SUCCESS',
      }];
      const store = mockStore({});
      await store
        .dispatch(socialAuthActions.socialAuth(newUserUrl, newST, authType));
      expect(store.getActions()).toEqual(expectedActions);
    });

  it('should return an action if auth type is google for status 201',
    async () => {
      const newUserUrl = 'http://localhost:3000/api/v1/auth/twitter/callback';
      const newST = '?eytoskl39i0j443322323klklvdslfnkdfklnsllm89d';
      const authType = 'google';
      const mockResponse = {
        data: {
          message: 'login successful',
          token: 'eytoskl39i0jklnsllmd',
        },
      };
      const mergedURL = newUserUrl + newST;
      moxios.stubRequest(mergedURL, {
        status: 201,
        response: mockResponse,
      });
      const expectedActions = [{
        newUser: true,
        type: 'GOOGLE_AUTH_SUCCESS',
      }];
      const store = mockStore({});
      await store
        .dispatch(socialAuthActions.socialAuth(newUserUrl, newST, authType));
      expect(store.getActions()).toEqual(expectedActions);
    });

  it('should return 400 if auth type is twitter for invalid url',
    async () => {
      const invalidUrl = 'http://localhost:3000/api/v1/auth/twitter';
      const authType = 'twitter';
      const mockResponse = {
        data: {
          message: 'registration successful',
        },
      };
      const mergedURL = invalidUrl + socialToken;
      moxios.stubRequest(mergedURL, {
        status: 400,
        response: mockResponse,
      });
      const expectedActions = [{
        type: 'TWITTER_AUTH_FAIL',
        payload: new Error('Request failed with status code 400'),
      }];
      const store = mockStore({});
      await store
        .dispatch(socialAuthActions
          .socialAuth(invalidUrl, socialToken, authType));
      expect(store.getActions()).toEqual(expectedActions);
    });

  it('should return null for invalid type',
    async () => {
      const invalidUrl = 'http://localhost:3000/api/v1/auth/twitter';
      const authType = 'fake';
      const dispatchFn = jest.fn();
      const mockResponse = {
        data: {
          message: 'registration successful',
        },
      };
      const mergedURL = invalidUrl + socialToken;
      moxios.stubRequest(mergedURL, {
        status: 202,
        response: mockResponse,
      });
      socialAuthActions.socialAuth(invalidUrl, socialToken, authType)(dispatchFn);
      expect(dispatchFn).not.toBeCalled;
    });

  it('should return 400 if auth type is github',
    async () => {
      const invalidUrl = 'http://localhost:3000/api/v1/auth/github/callback';
      const invalidAuthType = 'github';
      const mockResponse = {
        data: {
          message: 'registration successful',
        },
      };
      const mergedURL = invalidUrl + socialToken;
      moxios.stubRequest(mergedURL, {
        status: 400,
        response: mockResponse,
      });
      const expectedActions = [{
        type: null,
        payload: new Error('Request failed with status code 400'),
      }];
      const store = mockStore({});
      await store
        .dispatch(socialAuthActions
          .socialAuth(invalidUrl, socialToken, invalidAuthType));
      expect(store.getActions()).toEqual(expectedActions);
    });
});
