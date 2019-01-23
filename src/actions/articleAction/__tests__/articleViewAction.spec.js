/* eslint-disable max-len */
import faker from 'faker';
import moxios from 'moxios';
import articleViewActions from '../articleView';
import * as type from '../actionTypes';

const dispatchFn = jest.fn();
const url = `${process.env.SERVER_API}/article/s`;

describe('ArticleView Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFn.mockRestore();
    moxios.uninstall();
  });

  it(`should return an action object once ${type.FETCH_ARTICLE_START} is fired`, () => {
    expect(articleViewActions.fetchArticleStart()).toEqual({
      type: type.FETCH_ARTICLE_START,
    });
  });

  it(`should return an action object once ${type.FETCH_ARTICLE_FAILED} is fired`, () => {
    expect(articleViewActions.fetchArticleFailed()).toEqual({
      type: type.FETCH_ARTICLE_FAILED,
    });
  });

  it(`should return an action object once ${type.FETCH_ARTICLE_SUCCESS} is fired`, () => {
    expect(articleViewActions.fetchArticleSuccess()).toEqual({
      type: type.FETCH_ARTICLE_SUCCESS,
    });
  });

  it('should return an action object once FETCH_FOLLOWERS_START is fired', () => {
    expect(articleViewActions.fetchFollowersStart()).toEqual({
      type: type.FETCH_FOLLOWERS_START,
    });
  });

  it('should return an action object once FETCH_FOLLOWERS_COMPLETE is fired', () => {
    expect(articleViewActions.fetchFollowersComplete()).toEqual({
      type: type.FETCH_FOLLOWERS_COMPLETE,
    });
  });

  it('should call the fetchArticle start dispatch function', async () => {
    const fakeUser = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const history = {
      push: jest.fn(),
    };

    const mockResponse = {
      message: 'Successfully fetched article',
    };

    moxios.stubRequest(`${url}/${fakeUser.email}`, mockResponse);
    await articleViewActions.fetchArticle(fakeUser.email, history)(dispatchFn);
    expect(dispatchFn).toBeCalled();
    expect(dispatchFn).toBeCalledWith({ type: type.FETCH_ARTICLE_START });
  });

  it('should call the fetchArticle success dispatch function', async () => {
    const fakeUser = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const history = {
      push: jest.fn(),
    };

    const mockResponse = {
      data: {},
      message: 'Successfully fetched article',
    };

    moxios.stubRequest(`${url}/${fakeUser.email}`, mockResponse);
    await articleViewActions.fetchArticle(fakeUser.email, history)(dispatchFn);
    expect(dispatchFn).toBeCalled();
    expect(dispatchFn).toBeCalledWith({ type: type.FETCH_ARTICLE_SUCCESS });
  });

  it('should call the fetchArticle  dispatch function', async () => {
    const fakeUser = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const history = {
      push: jest.fn(),
    };

    const mockResponse = {
      data: {},
      message: 'Successfully fetched article',
    };

    moxios.stubRequest(`${url}/${fakeUser.email}`, { status: 400, response: mockResponse });
    await articleViewActions.fetchArticle(fakeUser.email, history)(dispatchFn);
    expect(dispatchFn).toBeCalled();
    expect(dispatchFn).toBeCalledTimes(2);
  });


  it('should call the fetchFollowers start dispatch function', async () => {
    const mockResponse = {
      message: 'Successfully fetched article',
    };

    moxios.stubRequest(`${process.env.SERVER_API}/following`, mockResponse);
    await articleViewActions.fetchFollowers()(dispatchFn);
    expect(dispatchFn).toBeCalled();
    expect(dispatchFn).toBeCalledWith({ type: type.FETCH_FOLLOWERS_START });
  });

  it('should call the fetchFollower success dispatch function', async () => {
    const mockResponse = {
      data: {},
      message: 'Successfully fetched article',
    };

    moxios.stubRequest(`${process.env.SERVER_API}/following`, mockResponse);
    await articleViewActions.fetchFollowers()(dispatchFn);
    expect(dispatchFn).toBeCalled();
    expect(dispatchFn).toBeCalledWith({ type: type.FETCH_FOLLOWERS_COMPLETE });
  });

  it('should call the fetchFollowes dispatch function', async () => {
    const mockResponse = {
      data: {},
      message: 'Successfully fetched article',
    };
    moxios.stubRequest(`${process.env.SERVER_API}/following`, { status: 400, response: mockResponse });
    await articleViewActions.fetchFollowers()(dispatchFn);
    expect(dispatchFn).toBeCalled();
    expect(dispatchFn).toBeCalledTimes(2);
  });
});
