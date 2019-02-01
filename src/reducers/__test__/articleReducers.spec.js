/* eslint-disable max-len */
import * as articleActionTypes from '../../actions/articles/articleActionTypes';
import articleReducers, { initialState as defaultState } from '../articleReducers/articleReducers';
import stateUpdateUtility from '../../helpers/store/utility';

describe('Article Reducer', () => {
  it(`should update state when ${articleActionTypes.CREATE_ARTICLE} is triggered`, () => {
    expect(articleReducers(defaultState, { type: articleActionTypes.CREATE_ARTICLE })).toEqual(
      stateUpdateUtility(defaultState, {
        isCreatingArticle: true,
      }),
    );
  });

  it(`should update state when ${articleActionTypes.CREATE_ARTICLE_FAILURE} is triggered`, () => {
    const payload = {
      response: {
        data: {
          message: 'Sorry could not create article',
        },
      },
    };
    expect(articleReducers(defaultState, { type: articleActionTypes.CREATE_ARTICLE_FAILURE, payload })).toEqual(
      stateUpdateUtility(defaultState, {
        isCreatingArticle: false,
        createArticleError: true,
        createArticleResponse: payload,
      }),
    );
  });

  it(`should update state when ${articleActionTypes.CREATE_ARTICLE_SUCCESS} is triggered`, () => {
    expect(articleReducers(defaultState, { type: articleActionTypes.CREATE_ARTICLE_SUCCESS, payload: 'success' })).toEqual(
      stateUpdateUtility(defaultState, {
        isCreatingArticle: false,
        createArticleError: false,
        createArticleResponse: 'success',
        createArticleSuccess: true,
      }),
    );
  });

  it('should default state when nothing is triggered', () => {
    expect(articleReducers(defaultState, { type: 'nothing' })).toEqual(
      defaultState,
    );
  });

  it('should default state when no state is passed', () => {
    expect(articleReducers(undefined, { type: 'null' })).toEqual(
      defaultState,
    );
  });
});
