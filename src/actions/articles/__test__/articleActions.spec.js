import moxios from 'moxios';
import * as articleActionTypes from '../actionTypes';
import {
  createArticle,
  postArticle,
  createArticleFailure,
  createArticleSuccess,
  updateArticle,
  updateArticleSuccess,
  updateArticleFailure,
  postUpdatedArticle,
} from '../articleActions';

const url = `${process.env.SERVER_API}/article`;
const updateUrl = `${process.env.SERVER_API}`
+ '/article/846647b6-1536-4455-a67d-9e73a5b6eb4e';
const dispatch = jest.fn();
const fakeArticleObject = {
  title: 'title of article',
  body: 'body of article',
  imageUrl: 'pic.jpg',
  categoryId: '90u0eurjolisjdflsjflaskjdlfse',
  id: '846647b6-1536-4455-a67d-9e73a5b6eb4e',
};

const mockResponse = {
  response: {
    data: {
      message: 'response message',
    },
  },
};

describe('Test the article actions', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());

  /** Test article creation actions */


  it('should return an action if CREATE_ARTICLE is triggerd', () => {
    expect(createArticle()).toEqual({
      type: articleActionTypes.CREATE_ARTICLE,
    });
  });

  it('should return an action if CREATE_ARTICLE_SUCCESS is triggerd', () => {
    expect(createArticleSuccess()).toEqual({
      type: articleActionTypes.CREATE_ARTICLE_SUCCESS,
    });
  });

  it('should return an action if CREATE_ARTICLE_FAILURE is triggerd', () => {
    expect(createArticleFailure()).toEqual({
      type: articleActionTypes.CREATE_ARTICLE_FAILURE,
    });
  });

  it('should call the create article dispatch function', async () => {
    moxios.stubRequest(url, mockResponse);
    await postArticle(fakeArticleObject)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: articleActionTypes.CREATE_ARTICLE,
    });
  });

  it('should call the create article failed dispatch function', async () => {
    moxios.stubRequest(url, { status: 400 });
    await postArticle(fakeArticleObject, { push() {} })(dispatch);
    expect(dispatch).toBeCalledTimes(4);
  });

  /** Test article update actions */

  it('should return an action if UPDATE_ARTICLE is triggerd', () => {
    expect(updateArticle()).toEqual({
      type: articleActionTypes.UPDATE_ARTICLE,
    });
  });

  it('should return an action if UPDATE_ARTICLE_SUCCESS is triggerd', () => {
    expect(updateArticleSuccess()).toEqual({
      type: articleActionTypes.UPDATE_ARTICLE_SUCCESS,
    });
  });

  it('should return an action if CREATE_ARTICLE_FAILURE is triggerd', () => {
    expect(updateArticleFailure()).toEqual({
      type: articleActionTypes.UPDATE_ARTICLE_FAILURE,
    });
  });

  it('should call the post update article dispatch function', async () => {
    moxios.stubRequest(updateUrl, mockResponse);
    await postUpdatedArticle(fakeArticleObject)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: articleActionTypes.UPDATE_ARTICLE,
    });
  });

  it('should call the update article failed dispatch function', async () => {
    moxios.stubRequest(updateUrl, { status: 400 });
    await postUpdatedArticle(fakeArticleObject, { push() {} })(dispatch);
    expect(dispatch).toBeCalledTimes(8);
  });
});
