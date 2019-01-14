import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actionTypes from '../actionTypes';
import * as signupActions from '../signup';

const middlewares = [thunk];
const createStore = configureMockStore(middlewares);

const url = process.env.SERVER_API;
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

  it('should return an action if signUpUser is triggered', async () => {
    const mockResponse = {
      response: {
        data: {
          message: 'Ops',
        },
      },
    };

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
  });
});
