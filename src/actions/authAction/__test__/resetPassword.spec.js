
import faker from 'faker';
import moxios from 'moxios';
import resetPasswordActions from '../resetPassword';
import * as actionTypes from '../actionTypes';

const dispatchFunction = jest.fn();
const url = `${process.env.SERVER_API}/auth/resetpassword`;

describe('Reset Password Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFunction.mockRestore();
    moxios.uninstall();
  });

  it('should return an action if reset password start is fired', () => {
    expect(resetPasswordActions.resetPasswordStart()).toEqual({
      type: actionTypes.RESET_PASSWORD_START,
    });
  });

  it('should return an action if reset password failed is fired', () => {
    expect(resetPasswordActions.resetPasswordFailed()).toEqual({
      type: actionTypes.RESET_PASSWORD_FAILED,
    });
  });

  it('should return an action if reset password success is fired', () => {
    expect(resetPasswordActions.resetPasswordSuccess()).toEqual({
      type: actionTypes.RESET_PASSWORD_SUCCESS,
    });
  });


  it('should call the reset password start dispatch function', async () => {
    const fakeEmail = {
      email: faker.internet.email(),
    };
    const mockResponse = {
      message: 'start reset process',
    };

    const headers = {
      resetPasswordToken: '',
    };

    moxios.stubRequest(url, {
      status: 200,
      response: mockResponse,
    });
    await resetPasswordActions
      .sendResetLink(fakeEmail, headers)(dispatchFunction);
    expect(dispatchFunction).toBeCalled();
    expect(dispatchFunction)
      .toBeCalledWith({ type: actionTypes.RESET_PASSWORD_START });
  });

  it('should call the reset password success dispatch function', async () => {
    const fakeEmail = {
      email: faker.internet.email(),
    };

    const mockResponse = {
      message: 'Email Successfully sent',
    };

    moxios.stubRequest(url, { status: 200, response: mockResponse });
    await resetPasswordActions
      .sendResetLink(fakeEmail, { push() {} })(dispatchFunction);
    expect(dispatchFunction).toBeCalledTimes(2);
  });

  it('should call the reset password failed dispatch function', async () => {
    const fakeEmail = {
      email: faker.internet.email(),
    };

    const mockResponse = {
      message: 'Invalid Email',
    };

    moxios.stubRequest(url, { status: 400, response: mockResponse });
    await resetPasswordActions
      .sendResetLink(fakeEmail, { push() {} })(dispatchFunction);
    expect(dispatchFunction).toBeCalledTimes(2);
  });
});
