/* eslint-disable max-len */
import ArticleViewReducer, { initialState as defaultState } from '../articleView';
import * as type from '../../../actions/articleAction/actionTypes';
import updateObject from '../../../helpers/store/utility';

describe('ArticleView Reducer Test', () => {
  it(`should update when state is ${type.FETCH_ARTICLE_START} fires`, () => {
    expect(ArticleViewReducer(defaultState, { type: type.FETCH_ARTICLE_START })).toEqual(
      updateObject(defaultState, {
        isFetchingArticle: true,
      }),
    );
  });

  it(`should update when state is ${type.FETCH_ARTICLE_FAILED} fires`, () => {
    const payload = {};
    expect(ArticleViewReducer(defaultState, { type: type.FETCH_ARTICLE_FAILED, payload })).toEqual(
      updateObject(defaultState, {
        response: payload,
        error: true,
        success: false,
        isFetchingArticle: false,
      }),
    );
  });

  it(`should update when state is ${type.FETCH_ARTICLE_SUCCESS} fires`, () => {
    const payload = {};
    expect(ArticleViewReducer(defaultState, { type: type.FETCH_ARTICLE_SUCCESS, payload })).toEqual(
      updateObject(defaultState, {
        response: payload,
        isFetchingArticle: false,
        success: true,
      }),
    );
  });
});
