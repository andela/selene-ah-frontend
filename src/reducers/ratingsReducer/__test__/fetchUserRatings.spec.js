import * as type from '../../../actions/ratings/actionTypes';
import fetchUserRatings, { initialState } from '../fetchUserRatings';
import updateObject from '../../../helpers/store/utility';

describe('Post Rating Reducer', () => {
  it(`it should update state when ${type.RATE_ARTICLE_START}
  is triggered`, () => {
    expect(fetchUserRatings(initialState, {
      type: type.FETCH_USER_RATING_START,
    })).toEqual(updateObject(initialState, { isUserLoading: true }));
  });

  it(`should update state when ${type.FETCH_USER_RATING_FAILED}
   is triggered`, () => {
    const payload = {
      response: {
        data: {
          message: 'bhjvbhdsjv chmjv',
        },
      },
    };
    expect(fetchUserRatings(initialState, {
      type: type.FETCH_USER_RATING_FAILED,
      payload,
    }))
      .toEqual(updateObject(initialState, {
        isUserLoading: false,
        userRatingResponse: payload,
        userError: true,
      }));
  });

  it(`should update state when ${type.FETCH_USER_RATING_SUCCESS}
  is triggered`, () => {
    const payload = {
      articlesResponse: 'look lively',
    };
    expect(fetchUserRatings(initialState, {
      type: type.FETCH_USER_RATING_SUCCESS,
      payload,
    })).toEqual(updateObject(initialState, {
      isUserLoading: false,
      userRatingResponse: payload,
      userSuccess: true,
    }));
  });
});
