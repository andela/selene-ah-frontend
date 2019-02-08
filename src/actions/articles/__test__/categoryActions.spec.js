import moxios from 'moxios';
import * as categoryActionTypes from '../actionTypes';
import fetchCategories, * as categoryActions from '../categoryActions';

const url = `${process.env.SERVER_API}/categories`;
const dispatch = jest.fn();

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

  it('should return an action if CREATE_ARTICLE is triggerd', () => {
    expect(categoryActions.getCategory()).toEqual({
      type: categoryActionTypes.GET_CATEGORY,
    });
  });

  it('should return an action if CREATE_ARTICLE_SUCCESS is triggerd', () => {
    expect(categoryActions.getCategorySuccess()).toEqual({
      type: categoryActionTypes.GET_CATEGORY_SUCCESS,
    });
  });

  it('should return an action if CREATE_ARTICLE_FAILURE is triggerd', () => {
    expect(categoryActions.getCategoryFailure()).toEqual({
      type: categoryActionTypes.GET_CATEGORY_FAILURE,
    });
  });

  it('should call the fetch category dispatch function', async () => {
    moxios.stubRequest(url, mockResponse);
    await fetchCategories()(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: categoryActionTypes.GET_CATEGORY,
    });
  });

  it('should call the upload image failed dispatch function', async () => {
    moxios.stubRequest(url, { status: 400 });
    await fetchCategories()(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: categoryActionTypes.GET_CATEGORY_FAILURE,
      payload: 'Request failed with status code 400',
    });
  });
});
