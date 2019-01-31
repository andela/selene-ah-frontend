import moxios from 'moxios';
import postRatingActionCreators from '../postRatingActionCreators';
import * as types from '../actionTypes';

const dispatchFunction = jest.fn();
const articleId = undefined;
const url = `${process.env.SERVER_API}/articles/${articleId}/rating`;

describe('Post ratings Action Creators', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFunction.mockRestore();
    moxios.uninstall();
  });

  it('should return an action if post rating start is fired', () => {
    expect(postRatingActionCreators.postRatingStart()).toEqual({
      type: types.RATE_ARTICLE_START,
    });
  });

  it('should return an action if fetch average rating failed is fired', () => {
    expect(postRatingActionCreators.postRatingFailed()).toEqual({
      type: types.RATE_ARTICLE_FAILED,
    });
  });

  it('should return an action if fetch average rating start is fired', () => {
    expect(postRatingActionCreators.postRatingSuccess()).toEqual({
      type: types.RATE_ARTICLE_SUCCESS,
    });
  });

  it('should call the fetch average rating dispatch function', async () => {
    const mockResponse = {
      message: 'start the fetch process',
    };
    moxios.stubRequest(url, { status: 200, response: mockResponse });
    await postRatingActionCreators.postRating()(dispatchFunction);
    expect(dispatchFunction).toBeCalled();
    expect(dispatchFunction).toBeCalledWith({
      type: types.RATE_ARTICLE_START,
    });
  });

  it('should call the fetch average rating dispatch function', async () => {
    const mockResponse = {
      message: 'Something happened with the server',
    };
    moxios.stubRequest(url, { status: 400, response: mockResponse });
    await postRatingActionCreators.postRating()(dispatchFunction);
    expect(dispatchFunction).toBeCalledTimes(2);
  });
});
