import faker from 'faker';
import moxios from 'moxios';
import getProfileAction from '../getProfile';
import * as actionTypes from '../actionTypes';

const dispatchFunction = jest.fn();
const requestUrl = `${process.env.SERVER_API}/user/profile/auth`;

describe('Get Profile Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFunction.mockRestore();
    moxios.uninstall();
  });

  it('should return an action if get profile start is fired', () => {
    expect(getProfileAction.getProfileStart()).toEqual({
      type: actionTypes.GET_PROFILE_START,
    });
  });

  it('should return an action if get profile failed is fired', () => {
    const payload = 'fail to get profile';
    expect(getProfileAction.getProfileFail(payload)).toEqual({
      type: actionTypes.GET_PROFILE_FAIL,
      payload,
    });
  });

  it('should return an action if get profile success is fired', () => {
    const payload = 'data';
    expect(getProfileAction.getProfileSuccess(payload)).toEqual({
      type: actionTypes.GET_PROFILE_SUCCESS,
      payload,
    });
  });

  it('should call the get profile start dispatch function', async () => {
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

    await getProfileAction.profileDispatcher(fakeEmail)(dispatchFunction);
    expect(dispatchFunction).toBeCalled();
    expect(dispatchFunction)
      .toBeCalledWith({ type: actionTypes.GET_PROFILE_START });
  });

  it('should call the get profile dispatch function', async () => {
    const fakeEmail = {
      email: faker.internet.email(),
    };

    const mockResponse = {
      message: 'Invalid Email',
    };

    moxios.stubRequest(requestUrl, { status: 400, response: mockResponse });
    await getProfileAction
      .profileDispatcher(fakeEmail, { push() {} })(dispatchFunction);
    expect(dispatchFunction).toBeCalledTimes(2);
  });
});
jest.setTimeout(30000);
