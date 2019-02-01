/* eslint-disable import/first */
jest.mock('../../../helpers/validationHelpers/decodeToken.js');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import {
  userArticleLikeStat,
  userCommentStat,
  userBookmarkStat,
  userArticlesStat,
  userFollowerStat,
  followingUsersStat,
  getAllStat,
} from '../getUserStat';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import decodedToken from '../../../helpers/validationHelpers/decodeToken';
import decodedUser from '../../../../__mocks__/decodedUser';

describe('### User stats Actions Creators', () => {
  const token = 'eytoskl39i0j443322323klklvdslfnkdfklnsllmd';
  decodedToken.mockResolvedValue(() => ({
    decodedUser,
  }));

  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should return user article count ',
    async () => {
      const mockResponse = {
        data: {
          count: 2,
          rows: [
            {
              readTime: 3,
              readingStat: 4,
            },
            {
              readTime: 3,
              readingStat: 4,
            },

          ],
        },
      };
      moxios.stubRequest(`${process.env.SERVER_API}/articles/stat`, {
        status: 200,
        response: mockResponse,
      });
      const expectedActions = [{
        type: 'GET_ARTICLES_STAT_SUCCESS',
        payload: {
          noOfreaders: 8,
          totalNoOfReadingTime: 6,
          noOfWrittenArticles: 2,
        },
      }];
      const store = mockStore({});
      await store
        .dispatch(userArticlesStat(token, 'ARTICLES_STAT'));
      expect(store.getActions()).toEqual(expectedActions);
    });

  it('should return an article likes count ',
    async () => {
      const mockResponse = {
        data: {
          count: 0,
        },
      };
      moxios.stubRequest(`${process.env.SERVER_API}/votes/user`, {
        status: 200,
        response: mockResponse,
      });
      const expectedActions = [{
        type: 'GET_LIKED_ARTICLES_SUCCESS',
        payload: 0,
      }];
      const store = mockStore({});
      await store
        .dispatch(userArticleLikeStat(token));
      expect(store.getActions()).toEqual(expectedActions);
    });

  it('should return an comment count ',
    async () => {
      const mockResponse = {
        data: {
          count: 0,
        },
      };
      moxios.stubRequest(`${process.env.SERVER_API}/comments/user/count`, {
        status: 200,
        response: mockResponse,
      });
      const expectedActions = [{
        type: 'GET_COMMENT_STAT_SUCCESS',
        payload: 0,
      }];
      const store = mockStore({});
      await store
        .dispatch(userCommentStat(token));
      expect(store.getActions()).toEqual(expectedActions);
    });

  it('should return bookmark count ',
    async () => {
      const mockResponse = {
        data: {
          count: 0,
        },
      };
      moxios.stubRequest(`${process.env.SERVER_API}/bookmark`, {
        status: 200,
        response: mockResponse,
      });
      const expectedActions = [{
        type: 'GET_BOOKMARK_SUCCESS',
        payload: 0,
      }];
      const store = mockStore({});
      await store
        .dispatch(userBookmarkStat(token));
      expect(store.getActions()).toEqual(expectedActions);
    });
  it('should return your following count ',
    async () => {
      const mockResponse = {
        followees: [
          {
            id: 1,
            name: 'David Jones',
          },
        ],
      };
      const userId = undefined;
      moxios.stubRequest(`${process.env.SERVER_API}/following/${userId}`, {
        status: 200,
        response: mockResponse,
      });
      const expectedActions = [{
        type: 'FOLLOWING_OTHERS_STAT_SUCCESS',
        payload: 1,
      }];
      const store = mockStore({});
      await store
        .dispatch(followingUsersStat(token));
      expect(store.getActions()).toEqual(expectedActions);
    });

  it('should return Follower count ',
    async () => {
      const userId = undefined;
      const mockResponse = {
        followers: {
          count: 1,
          rows: [
            {
              createdAt: '2013-02-09',
            },
          ],
        },
      };
      moxios.stubRequest(`${process.env.SERVER_API}/followers/${userId}`, {
        status: 200,
        response: mockResponse,
      });
      const expectedActions = [{
        type: 'GET_FOLLOWERS_SUCCESS',
        payload: {
          newFollowers: 1,
          totalFollowers: 1,
        },
      }];
      const store = mockStore({});
      await store
        .dispatch(userFollowerStat(token));
      expect(store.getActions()).toEqual(expectedActions);
    });
  it('should return new Follower count of 0',
    async () => {
      const userId = undefined;
      const mockResponse = {
        followers: {
          count: 0,
          rows: [],
        },
      };
      moxios.stubRequest(`${process.env.SERVER_API}/followers/${userId}`, {
        status: 200,
        response: mockResponse,
      });
      const expectedActions = [{
        type: 'GET_FOLLOWERS_SUCCESS',
        payload: {
          newFollowers: 0,
          totalFollowers: 0,
        },
      }];
      const store = mockStore({});
      await store
        .dispatch(userFollowerStat(token));
      expect(store.getActions()).toEqual(expectedActions);
    });
  it('getAllStat works as expected',
    async () => {
      const dispatch = jest.fn();
      await getAllStat(token, 1)(dispatch);
      expect(dispatch).toBeCalled();
    });
  it('should return should return 401 Error Occur - follower count ',
    async () => {
      const error = {
        message: 'error occured',
      };
      const userId = undefined;
      moxios.stubRequest(`${process.env.SERVER_API}/followers/${userId}`, {
        status: 401,
        response: error,
      });
      const expectedActions = [{
        type: 'GET_FOLLOWERS_FAILURE',
        error: new Error('Request failed with status code 401'),
      }];
      const store = mockStore({});
      await store
        .dispatch(userFollowerStat(token));
      expect(store.getActions()).toEqual(expectedActions);
    });
  it('should return should return 401 Error Occur - Bookmark count ',
    async () => {
      const error = {
        message: 'error occured',
      };
      moxios.stubRequest(`${process.env.SERVER_API}/bookmark`, {
        status: 401,
        response: error,
      });
      const expectedActions = [{
        type: 'GET_BOOKMARK_FAILURE',
        error: new Error('Request failed with status code 401'),
      }];
      const store = mockStore({});
      await store
        .dispatch(userBookmarkStat(token));
      expect(store.getActions()).toEqual(expectedActions);
    });
  it('should return should return 401 Error Occur - Comment count ',
    async () => {
      const error = {
        message: 'error occured',
      };
      moxios.stubRequest(`${process.env.SERVER_API}/comments/user/count`, {
        status: 401,
        response: error,
      });
      const expectedActions = [{
        type: 'GET_COMMENT_STAT_FAILURE',
        error: new Error('Request failed with status code 401'),
      }];
      const store = mockStore({});
      await store
        .dispatch(userCommentStat(token));
      expect(store.getActions()).toEqual(expectedActions);
    });
  it('should return should return 401 Error Occur - Article count ',
    async () => {
      const error = {
        message: 'error occured',
      };
      moxios.stubRequest(`${process.env.SERVER_API}/articles/stat`, {
        status: 401,
        response: error,
      });
      const expectedActions = [{
        type: 'GET_ARTICLES_STAT_FAILURE',
        error: new Error('Request failed with status code 401'),
      }];
      const store = mockStore({});
      await store
        .dispatch(userArticlesStat(token));
      expect(store.getActions()).toEqual(expectedActions);
    });
  it('should return should return 401 Error Occur - Article Like count ',
    async () => {
      const error = {
        message: 'error occured',
      };
      moxios.stubRequest(`${process.env.SERVER_API}/votes/user`, {
        status: 401,
        response: error,
      });
      const expectedActions = [{
        type: 'GET_LIKED_ARTICLES_FAILURE',
        error: new Error('Request failed with status code 401'),
      }];
      const store = mockStore({});
      await store
        .dispatch(userArticleLikeStat(token));
      expect(store.getActions()).toEqual(expectedActions);
    });
  it('should return should return 401 Error Occur -  following count ',
    async () => {
      const error = {
        message: 'error occured',
      };
      const userId = undefined;
      moxios.stubRequest(`${process.env.SERVER_API}/following/${userId}`, {
        status: 401,
        response: error,
      });
      const expectedActions = [{
        type: 'FOLLOWING_OTHERS_STAT_FAILURE',
        error: new Error('Request failed with status code 401'),
      }];
      const store = mockStore({});
      await store
        .dispatch(followingUsersStat(token));
      expect(store.getActions()).toEqual(expectedActions);
    });
});
