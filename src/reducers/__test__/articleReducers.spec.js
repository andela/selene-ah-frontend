/* eslint-disable max-len */
import * as articleActionTypes from '../../actions/articles/articleActionTypes';
import articleReducers, { initialState as defaultState } from '../articleReducers/articleReducers';
import stateUpdateUtility from '../../helpers/store/utility';
import { UPDATE_ARTICLE_ERROR } from '../../helpers/articleHelpers/articleConstants';

describe('Article Reducer', () => {
  /** Article creation reducer test */

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


  /** Article update reducer test */

  it(`should update state when ${articleActionTypes.UPDATE_ARTILCE} is triggered`, () => {
    expect(articleReducers(defaultState, { type: articleActionTypes.UPDATE_ARTICLE })).toEqual(
      stateUpdateUtility(defaultState, {
        isUpdatingArticle: true,
      }),
    );
  });

  it(`should update state when ${articleActionTypes.UPDATE_ARTICLE_FAILURE} is triggered`, () => {
    const payload = {
      response: {
        data: {
          message: UPDATE_ARTICLE_ERROR,
        },
      },
    };
    expect(articleReducers(defaultState, {
      type: articleActionTypes.UPDATE_ARTICLE_FAILURE,
      payload,
    })).toEqual(
      stateUpdateUtility(defaultState, {
        isUpdatingArticle: false,
        updateArticleError: true,
        updateArticleResponse: payload,
      }),
    );
  });

  it(`should update state when ${articleActionTypes.UPDATE_ARTICLE_SUCCESS} is triggered`, () => {
    expect(articleReducers(defaultState, { type: articleActionTypes.UPDATE_ARTICLE_SUCCESS, payload: 'success' })).toEqual(
      stateUpdateUtility(defaultState, {
        isUpdatingArticle: false,
        updateArticleError: false,
        updateArticleResponse: 'success',
        updateArticleSuccess: true,
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
