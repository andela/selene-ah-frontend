import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AverageRatingActionCreators from '../AverageRatingActionCreators';
import * as types from '../actionTypes';

const middlewares = [thunk];
const createStore = configureMockStore(middlewares);

const articleId = undefined;

const url = `${process.env.SERVER_API}/articles/${articleId}/rating`;

describe('Average ratings Action Creators', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should return an action if fetch average rating start is fired', () => {
    expect(AverageRatingActionCreators.fetchAverageRatingStart()).toEqual({
      type: types.FETCH_AVERAGE_RATING_START,
    });
  });

  it('should return an action if fetch average rating failed is fired', () => {
    expect(AverageRatingActionCreators.fetchAverageRatingFailed()).toEqual({
      type: types.FETCH_AVERAGE_RATING_FAILED,
    });
  });

  it('should return an action if fetch average rating start is fired', () => {
    expect(AverageRatingActionCreators.fetchAverageRatingSuccess()).toEqual({
      type: types.FETCH_AVERAGE_RATING_SUCCESS,
    });
  });

  it('should call the fetch average rating dispatch function', async () => {
    const mockResponse = {
      message: 'start the fetch process',
    };
    moxios.stubRequest(url, { status: 200, response: mockResponse });

    const expectedAction = [
      { type: types.FETCH_AVERAGE_RATING_START },
      { type: types.FETCH_AVERAGE_RATING_SUCCESS, payload: mockResponse },
    ];
    const store = createStore({});
    await store.dispatch(AverageRatingActionCreators.fetchAverageRating());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should fail when fetch average failure is called', async () => {
    const mockResponse = {
      payload: new Error('Request failed with status code 400'),
    };
    moxios.stubRequest(url, { status: 400, response: mockResponse });

    const expectedAction = [
      { type: types.FETCH_AVERAGE_RATING_START },
      {
        type: types.FETCH_AVERAGE_RATING_FAILED,
        payload: mockResponse.payload,
      },
    ];
    const store = createStore({});
    await store.dispatch(AverageRatingActionCreators.fetchAverageRating());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
