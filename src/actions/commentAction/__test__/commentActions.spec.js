
import moxios from 'moxios';
import faker from 'faker';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as types from '../actionTypes';
import commentActions from '../commentView';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);


const dispatchFn = jest.fn();
const url = `${process.env.SERVER_API}/article`;

describe(' ###Comments actions', () => {
  const fakeArticle = {
    articleId: faker.random.uuid,
    content: 'hello',
    token: faker.random.uuid,
  };
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFn.mockRestore();
    moxios.uninstall();
  });

  it('should return type if getCommentStart is called', () => {
    expect(commentActions.getCommentStart().type).toEqual(
      types.GET_COMMENT_START,
    );
    expect(typeof commentActions.getCommentStart()).toEqual('object');
  });

  it('should return type if getCommentSuccess is called', () => {
    expect(commentActions.getCommentSuccess(
      'payload',
    ).type).toEqual(types.GET_COMMENT_SUCCESS);
    expect(commentActions.getCommentSuccess(
      'payload',
    ).payload).toEqual('payload');
  });

  it('should return type if getCommentFailed is called', () => {
    const mockResponse = {
      data: {
        message: 'Ops',
      },
    };
    expect(commentActions.getCommentFailed(
      mockResponse,
    ).type).toEqual(types.GET_COMMENT_FAIL);
    expect(
      commentActions.getCommentFailed(mockResponse).payload.data.message,
    ).toEqual('Ops');
  });

  it('should return type if getCommentStart is called', () => {
    expect(commentActions.postCommentStart().type).toEqual(
      types.POST_COMMENT_START,
    );
    expect(typeof commentActions.postCommentStart()).toEqual('object');
  });


  it('should call the getArticleComments start dispatch function', async () => {
    const mockResponse = {
      message: 'Successfully fetched comments',
    };

    moxios.stubRequest(`${url}/${fakeArticle.articleId}/comments`,
      { status: 200, response: mockResponse });
    await commentActions.getArticleComments(fakeArticle.articleId)(dispatchFn);
    expect(dispatchFn).toBeCalled();
    expect(dispatchFn).toBeCalledWith({ type: types.GET_COMMENT_START });
  });

  it('should call the getArticleComments fail dispatch function', async () => {
    const mockResponse = {
      message: 'failed to fetched comments',
    };

    moxios.stubRequest(`${url}/${fakeArticle.articleId}/comments`,
      { status: 400, response: mockResponse });
    await commentActions.getArticleComments(fakeArticle.articleId)(dispatchFn);
    expect(dispatchFn).toBeCalled();
    expect(dispatchFn).toBeCalledTimes(2);
  });

  it('should call the postComment fail dispatch function', async () => {
    const mockResponse = {
      data: {
        message: 'Successfully fetched comments',
      },
    };

    const { articleId, content, token } = fakeArticle;
    moxios.stubRequest(`${url}/${articleId}/comment`,
      { status: 400, response: mockResponse });
    await commentActions.postComment(articleId, content, token)(dispatchFn);
    expect(dispatchFn).toBeCalled();
    expect(dispatchFn).toBeCalledTimes(2);
  });

  it('should call the postComment success dispatch function', async () => {
    const mockResponse = {
      data: {
        comment: 'failed to fetched comments',
      },
    };
    const { articleId, content, token } = fakeArticle;
    moxios.stubRequest(`${url}/${articleId}/comment`,
      { status: 200, response: mockResponse });
    await commentActions.postComment(articleId, content, token)(dispatchFn);
    expect(dispatchFn).toBeCalled();
    expect(dispatchFn).toBeCalledTimes(2);
  });


  it(`should dispatch ${types.POST_COMMENT_SUCCESS} `, async () => {
    const mockResponse = {
      data: {
        message: 'Ops',
        author: {
          userName: 'shola',
          imageUrl: 'shola.com',
          bio: 'dhd',
        },
      },
    };

    const { articleId, content, token } = fakeArticle;

    moxios.stubRequest(`${url}/${articleId}/comment`,
      { status: 200, response: mockResponse });
    const store = mockStore({});
    await store.dispatch(commentActions.postComment(articleId, content, token));
    expect(store.getActions()).toBeCalled;
  });
});
