import reducer from '../likearticleReactions';
import * as types from '../../../actions/reactionActions/actionTypes';

describe('Like Article Reducers', () => {
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

  it(`should update state when ${types.LIKE_ARTICLE_START} is called`, () => {
    expect(reducer({
      success: false,
      error: false,
      response: null,
      loading: false,
    }, { type: types.LIKE_ARTICLE_START })).toEqual({
      success: false,
      error: false,
      response: null,
      loading: true,
    });
  });

  it(`should update state when ${types.LIKE_ARTICLE_FAILURE} is called`, () => {
    expect(reducer({
      success: false,
      error: false,
      response: null,
      loading: false,
    }, { type: types.LIKE_ARTICLE_FAILURE, payload: 'response' })).toEqual({
      success: false,
      error: true,
      response: 'response',
      loading: false,
    });
  });

  it(`should update state when ${types.LIKE_ARTICLE_SUCCESS} is called`, () => {
    expect(reducer({
      success: false,
      error: false,
      response: null,
      loading: false,
    }, { type: types.LIKE_ARTICLE_SUCCESS, payload: 'success' })).toEqual({
      success: true,
      error: false,
      response: 'success',
      loading: false,
    });
  });
});
