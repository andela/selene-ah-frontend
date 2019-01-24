import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as types from '../actionTypes';
import * as articleActions from '../likeArticleActions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Like article actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should return type if likeArticleStart is called', () => {
    expect(articleActions.likeArticleStart().type).toEqual(
      types.LIKE_ARTICLE_START,
    );
    expect(typeof articleActions.likeArticleStart()).toEqual('object');
  });

  it('should return type if likeArticleSuccess is called', () => {
    expect(articleActions.likeArticleSuccess(
      'payload',
    ).type).toEqual(types.LIKE_ARTICLE_SUCCESS);
    expect(articleActions.likeArticleSuccess(
      'payload',
    ).payload).toEqual('payload');
  });

  it('should return type if likeArticleFailure is called', () => {
    const mockResponse = {
      data: {
        message: 'Ops',
      },
    };
    expect(articleActions.likeArticleFailure(
      mockResponse,
    ).type).toEqual(types.LIKE_ARTICLE_FAILURE);
    expect(
      articleActions.likeArticleFailure(mockResponse).payload,
    ).toEqual('Ops');
  });

  it(`should dispatch ${types.LIKE_ARTICLE_SUCCESS} `, async () => {
    const mockResponse = {
      data: {
        data: {
          message: 'Ops',
        },
      },
    };
    moxios.stubRequest(`${process.env.SERVER_API}/votes/yes/like`,
      { status: 200, response: mockResponse });
    const store = mockStore({});

    const expectedActions = [
      { type: types.LIKE_ARTICLE_START },
      { type: types.LIKE_ARTICLE_SUCCESS, payload: mockResponse.data.mre },
    ];
    const vote = {};
    await store.dispatch(articleActions.likeArticle(vote, 'yes'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it(`should dispatch ${types.LIKE_ARTICLE_FAILURE} `, async () => {
    const mockResponse = {
      response: {
        data: {
          message: 'Ops',
        },
      },
    };

    moxios.stubRequest(`${process.env.SERVER_API}/votes/yes/like`,
      { status: 400, response: mockResponse });
    const expectedActions = [
      { type: types.LIKE_ARTICLE_START },
      {
        type: types.LIKE_ARTICLE_FAILURE,
        payload: mockResponse.me,
        status: 400,
      },
    ];
    const store = mockStore({});
    const vote = {};
    await store.dispatch(articleActions.likeArticle(vote, 'yes'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
