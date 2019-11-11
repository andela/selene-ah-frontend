/* eslint-disable max-len */
import faker from 'faker';
import moxios from 'moxios';
import loginActions from '../login';
import * as type from '../actionTypes';

const dispatchFn = jest.fn();
const url = `${process.env.SERVER_API}/auth/signin`;

describe('Login Act{ions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFn.mockRestore();
    moxios.uninstall();
  });

  it('should return an action object once LOGIN_START is fired', () => {
    expect(loginActions.loginStart()).toEqual({
      type: type.LOGIN_START,
    });
  });

  it('should return an action object once LOGIN_FAILED is fired', () => {
    expect(loginActions.loginFailed()).toEqual({
      type: type.LOGIN_FAILED,
    });
  });

  it('should return an action object once LOGIN_SUCCESS is fired', () => {
    expect(loginActions.loginSuccess()).toEqual({
      type: type.LOGIN_SUCCESS,
    });
  });

  it('should call the login start dispatch function', async () => {
    const fakeUser = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const mockResponse = {
      message: 'Successfully logged in',
    };

    moxios.stubRequest(url, mockResponse);
    await loginActions.loginDispatcher(fakeUser)(dispatchFn);
    expect(dispatchFn).toBeCalled();
    expect(dispatchFn).toBeCalledWith({ type: type.LOGIN_START });
  });

  it('should call the login success dispatch function', async () => {
    const fakeUser = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const mockResponse = {
      data: 'works',
      message: 'Successfully logged in',
    };

    moxios.stubRequest(url, { status: 200, response: mockResponse });
    await loginActions.loginDispatcher(fakeUser)(dispatchFn);
    expect(dispatchFn).toBeCalledTimes(2);
    expect(dispatchFn).toBeCalledWith({ type: type.LOGIN_SUCCESS, payload: mockResponse });
  });

  it('should call the login failed dispatch function', async () => {
    const fakeUser = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    moxios.stubRequest(url, { status: 400 });
    await loginActions.loginDispatcher(fakeUser)(dispatchFn);
    expect(dispatchFn).toBeCalledTimes(2);
  });
});
