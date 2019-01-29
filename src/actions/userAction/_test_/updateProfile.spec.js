import faker from 'faker';
import moxios from 'moxios';
import updateProfileAction from '../updateProfile';
import * as actionTypes from '../actionTypes';

const dispatchFunction = jest.fn();
const requestUrl = `${process.env.SERVER_API}/user/profile`;

describe('Update Password Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFunction.mockRestore();
    moxios.uninstall();
  });

  it('should return an action if update profile start is fired', () => {
    expect(updateProfileAction.updateProfileStart()).toEqual({
      type: actionTypes.UPDATE_PROFILE_START,
    });
  });

  it('should return an action if update profile failed is fired', () => {
    const payload = 'fail to get profile';
    expect(updateProfileAction.updateProfileFail(payload)).toEqual({
      type: actionTypes.UPDATE_PROFILE_FAIL,
      payload,
    });
  });

  it('should return an action if update profile success is fired', () => {
    const payload = 'data';
    const profileData = 'profileData';
    expect(updateProfileAction
      .updateProfileSuccess(payload, profileData)).toEqual({
      type: actionTypes.UPDATE_PROFILE_SUCCESS,
      payload,
      profileData,
    });
  });


  it('should call the update profile start dispatch function', async () => {
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

    await updateProfileAction
      .updateProfileDispatcher(fakeEmail)(dispatchFunction);
    expect(dispatchFunction).toBeCalled();
    expect(dispatchFunction)
      .toBeCalledWith({ type: actionTypes.UPDATE_PROFILE_START });
  });

  it('should call the get profile success dispatch function', async () => {
    const fakeEmail = {
      email: faker.internet.email(),
    };

    const mockResponse = {
      data: 'works',
      message: 'profile updated',
    };

    moxios.stubRequest(requestUrl, {
      status: 200,
      response: mockResponse,
    });

    await updateProfileAction
      .updateProfileDispatcher(fakeEmail, { push() {} })(dispatchFunction);
    expect(dispatchFunction).toBeCalledTimes(2);
  });

  it('should call the update profile dispatch function', async () => {
    const fakeEmail = {
      email: faker.internet.email(),
    };

    const mockResponse = {
      message: 'Invalid Email',
    };

    moxios.stubRequest(requestUrl, { status: 400, response: mockResponse });
    await updateProfileAction
      .updateProfileDispatcher(fakeEmail, { push() {} })(dispatchFunction);
    expect(dispatchFunction).toBeCalledTimes(2);
  });
});
