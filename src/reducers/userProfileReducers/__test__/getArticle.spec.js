/* eslint-disable max-len */
import * as type from '../../../actions/userAction/actionTypes';
import getArticleReducer, { initialState as defaultState } from '../Profile';
import updateObject from '../../../helpers/store/utility';

describe('Get Article Reducer', () => {
  it(`should update state when ${type.GET_ARTICLE_START} is triggered`, () => {
    expect(getArticleReducer(defaultState, { type: type.GET_ARTICLE_START })).toEqual(
      updateObject(defaultState, {
        isLoading: true,
        error: false,
      }),
    );
  });

  it(`should update state when ${type.GET_ARTICLE_START} is triggered`, () => {
    const payload = {
      response: {
        data: {
          message: 'jdjajjdakdja',
        },
      },
    };
    expect(getArticleReducer(defaultState, { type: type.GET_ARTICLE_FAIL, payload })).toEqual(
      updateObject(defaultState, {
        isLoading: false,
        error: true,
        articleResponse: payload.response.data.message,
      }),
    );
  });

  it(`should update state when ${type.GET_ARTICLE_SUCCESS} is triggered`, () => {
    const payload = {
      articles: 'user articles',
    };
    expect(getArticleReducer(defaultState, { type: type.GET_ARTICLE_SUCCESS, payload })).toEqual(
      updateObject(defaultState, {
        isLoading: false,
        success: true,
        response: null,
        showArticle: true,
        articleData: payload.articles,
      }),
    );
  });
});
