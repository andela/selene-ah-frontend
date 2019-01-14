<<<<<<< HEAD
=======
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
>>>>>>> feat(signup): implement signup page
import moxios from 'moxios';
import * as actionTypes from '../actionTypes';
import * as signupActions from '../signup';

<<<<<<< HEAD
const url = `${process.env.SERVER_API}/auth/signup`;
const dispatchFn = jest.fn();
=======
const middlewares = [thunk];
const createStore = configureMockStore(middlewares);

const url = process.env.SERVER_API;
>>>>>>> feat(signup): implement signup page
describe('### SignupActions', () => {
  beforeAll(() => {
    moxios.install();
  });
  afterAll(() => {
    moxios.uninstall();
  });

  it('should return an action if signUpStart is triggered', () => {
    expect(signupActions.signUpStart()).toEqual({
      type: actionTypes.SIGN_UP_START,
    });
  });

  it('should return an action if signupSuccess is triggered', () => {
    expect(signupActions.signUpSuccess('response')).toEqual({
      type: actionTypes.SIGN_UP_SUCCESS,
      payload: 'response',
    });
  });

  it('should return an action if signUpFailure is triggered', () => {
    expect(signupActions.signUpFailure('response')).toEqual({
      type: actionTypes.SIGN_UP_FAILURE,
      payload: 'response',
    });
  });

<<<<<<< HEAD
  it('should call the login start dispatch function', async () => {
    const fakeUser = {
      email: 'jdjjd',
      password: 'jdjdjd',
    };
    const mockResponse = {
      response: {
        data: {
          message: 'Ops',
        },
      },
    };

    moxios.stubRequest(url, mockResponse);
    await signupActions.signUpUser(fakeUser)(dispatchFn);
    expect(dispatchFn).toBeCalled();
    expect(dispatchFn).toBeCalledWith({ type: actionTypes.SIGN_UP_START });
  });

  it('should call the login success dispatch function', async () => {
    const fakeUser = {
      email: 'jdjjd',
      password: 'jdjdjd',
    };
=======
  it('should return an action if signUpUser is triggered', async () => {
>>>>>>> feat(signup): implement signup page
    const mockResponse = {
      response: {
        data: {
          message: 'Ops',
        },
      },
    };

<<<<<<< HEAD
    moxios.stubRequest(url, { status: 200, response: mockResponse });
    await signupActions.signUpUser(fakeUser, { push() {} })(dispatchFn);
    expect(dispatchFn).toBeCalledWith(
      { type: actionTypes.SIGN_UP_SUCCESS, payload: mockResponse.response },
    );
  });

  it('should call the login failed dispatch function', async () => {
    const fakeUser = {
      email: 'jdjjd',
      password: 'jdjdjd',
    };

    moxios.stubRequest(url, { status: 400 });
    await signupActions.signUpUser(fakeUser, { push() {} })(dispatchFn);
    expect(dispatchFn).toBeCalled();
=======
    const history = {
      push: jest.fn(),
    };

    moxios.stubRequest(`${url}/auth/signup`, {
      status: 200,
      response: mockResponse,
    });
    const user = {};
    const store = createStore({});
    const expectedActions = [
      { type: actionTypes.SIGN_UP_START },
      { type: actionTypes.SIGN_UP_SUCCESS, payload: mockResponse },
    ];
    await store.dispatch(signupActions.signUpUser(user, history));
    expect(store.getActions()).toEqual(expectedActions);
>>>>>>> feat(signup): implement signup page
  });
});
