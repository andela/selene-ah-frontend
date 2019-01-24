import moxios from 'moxios';
import homeActionCreators from './homeActionCreators';
import * as actionTypes from '../../actions/authAction/actionTypes';

const dispatchFunction = jest.fn();

const url = `${process.env.SERVER_API}/articles`;

describe('Fetch Article Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    dispatchFunction.mockRestore();
    moxios.uninstall();
  });

  it('should return an action if fetch atricle start is fired', () => {
    expect(homeActionCreators.fetchArticlesStart()).toEqual({
      type: actionTypes.FECTH_ARTICLES_START,
    });
  });

  it('should return an action if fetch article failed is fired', () => {
    expect(homeActionCreators.fetchArticlesFailed()).toEqual({
      type: actionTypes.FECTH_ARTICLES_FAILED,
    });
  });

  it('should return an action if fetch article success is fired', () => {
    expect(homeActionCreators.fetchArticlesSuccess()).toEqual({
      type: actionTypes.FECTH_ARTICLES_SUCCESS,
    });
  });

  it('should call the fetch article start dispatch function', async () => {
    const mockResponse = {
      message: 'start the fetch process',
    };

    moxios.stubRequest(url, {
      status: 200,
      response: mockResponse,
    });

    await homeActionCreators.fetchArticles()(dispatchFunction);
    expect(dispatchFunction).toBeCalled();
    expect(dispatchFunction).toBeCalledWith({
      type: actionTypes.FECTH_ARTICLES_START,
    });
  });

  it('should call the article failed dispatch function', async () => {
    const mockResponse = {
      messsage: 'Something happened with the server',
    };
    moxios.stubRequest(url, { status: 400, response: mockResponse });
    await homeActionCreators.fetchArticles()(dispatchFunction);
    expect(dispatchFunction).toBeCalledTimes(2);
  });
});
