import moxios from 'moxios';
import userRatingActionCreators from '../userRatingActionCreators';
import * as types from '../actionTypes';

const dispatchFunction = jest.fn();
const articleId = undefined;

const url = `${process.env.SERVER_API}/user/articles/${articleId}/rating`;

describe('Average ratings Action Creators', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFunction.mockRestore();
    moxios.uninstall();
  });

  it('should return an action if fetch user rating start is fired', () => {
    expect(userRatingActionCreators.fetchUserRatingStart()).toEqual({
      type: types.FETCH_USER_RATING_START,
    });
  });

  it('should return an action if fetch user rating failed is fired', () => {
    expect(userRatingActionCreators.fetchUserRatingFailed()).toEqual({
      type: types.FETCH_USER_RATING_FAILED,
    });
  });

  it('should return an action if fetch user rating start is fired', () => {
    expect(userRatingActionCreators.fetchUserRatingSuccess()).toEqual({
      type: types.FETCH_USER_RATING_SUCCESS,
    });
  });

  it('should call the fetch user rating dispatch function', async () => {
    const mockResponse = {
      message: 'start the fetch process',
    };
    moxios.stubRequest(url, { status: 200, response: mockResponse });
    await userRatingActionCreators.fetchUserRating()(dispatchFunction);
    expect(dispatchFunction).toBeCalled();
    expect(dispatchFunction).toBeCalledWith({
      type: types.FETCH_USER_RATING_START,
    });
  });

  it('should call the fetch user rating dispatch function', async () => {
    const mockResponse = {
      message: 'Something happened with the server',
    };
    moxios.stubRequest(url, { status: 400, response: mockResponse });
    await userRatingActionCreators.fetchUserRating()(dispatchFunction);
    expect(dispatchFunction).toBeCalledTimes(2);
  });
});
