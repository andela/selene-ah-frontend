import faker from 'faker';
import moxios from 'moxios';
import getArticleAction from '../getArticle';
import * as actionTypes from '../actionTypes';

const dispatchFunction = jest.fn();
const requestUrl = `${process.env.SERVER_API}/article/author`;

describe('Update Password Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFunction.mockRestore();
    moxios.uninstall();
  });

  it('should return an action if update profile start is fired', () => {
    expect(getArticleAction.getArticleStart()).toEqual({
      type: actionTypes.GET_ARTICLE_START,
    });
  });

  it('should return an action if get artilce failed is fired', () => {
    const payload = 'fail to get profile';
    expect(getArticleAction.getArticleFail(payload)).toEqual({
      type: actionTypes.GET_ARTICLE_FAIL,
      payload,
    });
  });

  it('should return an action if get profile success is fired', () => {
    const payload = 'data';
    expect(getArticleAction.getArticleSuccess(payload)).toEqual({
      type: actionTypes.GET_ARTICLE_SUCCESS,
      payload,
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

    await getArticleAction.articleDispatcher(fakeEmail)(dispatchFunction);
    expect(dispatchFunction).toBeCalled();
    expect(dispatchFunction)
      .toBeCalledWith({ type: actionTypes.GET_ARTICLE_START });
  });

  it('should call the get article dispatch function', async () => {
    const fakeEmail = {
      email: faker.internet.email(),
    };

    const mockResponse = {
      message: 'Invalid Email',
    };

    moxios.stubRequest(requestUrl, { status: 400, response: mockResponse });
    await getArticleAction
      .articleDispatcher(fakeEmail, { push() {} })(dispatchFunction);
    expect(dispatchFunction).toBeCalledTimes(2);
  });
});
