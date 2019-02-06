import * as type from '../../../actions/ratings/actionTypes';
import postRating, { initialState } from '../postRatings';
import updateObject from '../../../helpers/store/utility';

describe('Post Rating Reducer', () => {
  it(`it should update state when ${type.RATE_ARTICLE_START}
  is triggered`, () => {
    expect(postRating(initialState, {
      type: type.RATE_ARTICLE_START,
    })).toEqual(updateObject(initialState, { isPostLoading: true }));
  });

  it(`should update state when ${type.RATE_ARTICLE_FAILED}
   is triggered`, () => {
    const payload = {
      response: {
        data: {
          message: 'bhjvbhdsjv chmjv',
        },
      },
    };
    expect(postRating(initialState, {
      type: type.RATE_ARTICLE_FAILED,
      payload,
    }))
      .toEqual(updateObject(initialState, {
        isPostLoading: false,
        ratedArticle: payload,
        postError: true,
      }));
  });

  it(`should update state when ${type.RATE_ARTICLE_SUCCESS}
  is triggered`, () => {
    const payload = {
      articlesResponse: 'look lively',
    };
    expect(postRating(initialState, {
      type: type.RATE_ARTICLE_SUCCESS,
      payload,
    })).toEqual(updateObject(initialState, {
      isPostLoading: false,
      ratedArticle: payload,
      postSuccess: true,
    }));
  });
});
