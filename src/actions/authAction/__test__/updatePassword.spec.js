import faker from 'faker';
import moxios from 'moxios';
import updatePasswordAction from '../updatePassword';
import * as actionTypes from '../actionTypes';

const dispatchFunction = jest.fn();
const requestUrl = `${process.env.SERVER_API}/auth/updatepassword`;

describe('Update Password Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFunction.mockRestore();
    moxios.uninstall();
  });

  it('should return an action if update password start is fired', () => {
    expect(updatePasswordAction.updatePasswordStart()).toEqual({
      type: actionTypes.UPDATE_PASSWORD_START,
    });
  });

  it('should return an action if update password failed is fired', () => {
    const payload = {
      data: {
        message: 'bdajda',
      },
    };
    expect(updatePasswordAction.updatePasswordFailed(payload)).toEqual({
      type: actionTypes.UPDATE_PASSWORD_FAILED,
      payload: payload.data.message,
    });
  });

  it('should return an action if update password success is fired', () => {
    const payload = {
      data: {
        message: 'bdajda',
      },
    };
    expect(updatePasswordAction.updatePasswordSuccess(payload)).toEqual({
      type: actionTypes.UPDATE_PASSWORD_SUCCESS,
      payload: payload.data.message,
    });
  });


  it('should call the update password start dispatch function', async () => {
    const fakeEmail = {
      email: faker.internet.email(),
    };
    const mockResponse = {
      message: 'start update process',
    };

    moxios.stubRequest(requestUrl, {
      status: 200,
      response: mockResponse,
    });

    await updatePasswordAction.updatePassword(fakeEmail)(dispatchFunction);
    expect(dispatchFunction).toBeCalled();
    expect(dispatchFunction)
      .toBeCalledWith({ type: actionTypes.UPDATE_PASSWORD_START });
  });

  it('should call the update password success dispatch function', async () => {
    const fakeEmail = {
      email: faker.internet.email(),
    };

    const mockResponse = {
      data: 'works',
      message: 'Email Successfully sent',
    };

    moxios.stubRequest(requestUrl, {
      status: 200,
      response: mockResponse,
    });

    await updatePasswordAction
      .updatePassword(fakeEmail, { push() {} })(dispatchFunction);
    expect(dispatchFunction).toBeCalledTimes(2);
  });

  it('should call the update password failed dispatch function', async () => {
    const fakeEmail = {
      email: faker.internet.email(),
    };

    const mockResponse = {
      message: 'Invalid Email',
    };

    moxios.stubRequest(requestUrl, { status: 400, response: mockResponse });
    await updatePasswordAction
      .updatePassword(fakeEmail, { push() {} })(dispatchFunction);
    expect(dispatchFunction).toBeCalledTimes(2);
  });
});
