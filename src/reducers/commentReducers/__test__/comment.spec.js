/* eslint-disable import/first */
jest.mock('../../../helpers/utilities/addCommentAuthor');
import reducer from '../comment';
import * as types from '../../../actions/commentAction/commentType';

import addCommentAuthor from '../../../helpers/utilities/addCommentAuthor';
import comment from '../../../../__mocks__/comment';


describe(' ###Comment Reducers', () => {
  addCommentAuthor.mockResolvedValue(() => ({
    comment,
  }));


  it('should return initstate when action is null', () => {
    expect(reducer({
      success: false,
      error: false,
      response: null,
      loading: false,
    }, {})).toEqual({
      success: false,
      error: false,
      response: null,
      loading: false,
    });
  });

  it('should update state when get comment start is called', () => {
    expect(reducer({
      error: false,
      isLoading: false,
      response: null,
      success: null,
      getSuccess: null,
      postIsLoading: false,
    }, { type: types.GET_COMMENT_START })).toEqual({
      error: false,
      isLoading: true,
      getSuccess: null,
      response: null,
      success: null,
      postIsLoading: false,
    });
  });


  it('should update state when get comment fail is called', () => {
    expect(reducer({
      isLoading: true,
      response: null,
      error: null,
      success: null,
      postIsLoading: false,
    }, { type: types.GET_COMMENT_FAIL, payload: 'data' })).toEqual({
      isLoading: false,
      response: 'data',
      getSuccess: false,
      error: true,
      success: false,
      postIsLoading: false,
    });
  });

  it('should update state when get comment success is called', () => {
    expect(reducer({
      isLoading: true,
      response: null,
      error: null,
      success: null,
      postIsLoading: false,
    }, { type: types.GET_COMMENT_SUCCESS, payload: 'data' })).toEqual({
      isLoading: false,
      response: 'data',
      error: null,
      getSuccess: true,
      success: true,
      postIsLoading: false,
    });
  });

  it('should update state when Post comment start is called', () => {
    expect(reducer({
      isLoading: true,
      response: null,
      error: null,
      success: null,
      postIsLoading: false,
    }, { type: types.POST_COMMENT_START })).toEqual({
      isLoading: true,
      response: null,
      error: false,
      success: null,
      postIsLoading: true,
    });
  });

  it('should update state when post comment sucess is called', () => {
    expect(reducer({
      isLoading: true,
      response: [{ id: 1 }],
      error: null,
      success: null,
      postIsLoading: false,
    }, { type: types.POST_COMMENT_SUCCESS, payload: comment })).toBeCalled;
  });


  it('should update state when  post comment fail is called', () => {
    expect(reducer({
      isLoading: true,
      response: null,
      error: null,
      success: null,
      postIsLoading: false,
    }, { type: types.POST_COMMENT_FAIL, payload: 'data' })).toEqual({
      isLoading: false,
      response: null,
      error: true,
      success: false,
      getSuccess: true,
      postIsLoading: false,
      postResponse: 'data',
    });
  });
});
