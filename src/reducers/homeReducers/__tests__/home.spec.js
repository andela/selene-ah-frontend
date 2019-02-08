import * as actionType from '../../../actions/authAction/actionTypes';
import fetchArticles, { initialState } from '../home';
import updateObject from '../../../helpers/store/utility';

describe('Fetch Article Reducer', () => {
  it(`should update state when ${actionType.FECTH_ARTICLES_START}
  is triggered`, () => {
    expect(fetchArticles(initialState, {
      type: actionType.FECTH_ARTICLES_START,
    }))
      .toEqual(updateObject(initialState, { isLoading: true }));
  });

  it(`should update state when ${actionType.FECTH_ARTICLES_FAILED}
   is triggered`, () => {
    const payload = {
      response: {
        data: {
          message: 'bhjvbhdsjv chmjv',
        },
      },
    };
    expect(fetchArticles(initialState, {
      type: actionType.FECTH_ARTICLES_FAILED,
      payload,
    }))
      .toEqual(updateObject(initialState, {
        isLoading: false,
        error: true,
        articlesResponse: payload,
      }));
  });

  it(`should update state when ${actionType.FECTH_ARTICLES_SUCCESS}
  is triggered`, () => {
    const payload = {
      articlesResponse: 'look lively',
    };
    expect(fetchArticles(initialState, {
      type: actionType.FECTH_ARTICLES_SUCCESS,
      payload,
    })).toEqual(updateObject(initialState, {
      isLoading: false,
      articlesResponse: payload,
      success: true,
    }));
  });
});
