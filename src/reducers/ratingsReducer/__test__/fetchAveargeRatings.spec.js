import * as type from '../../../actions/Ratings/actionTypes';
import fetchAverageRating, { initialState } from '../fetchAveargeRatings';
import updateObject from '../../../helpers/store/utility';

describe('Post Rating Reducer', () => {
  it(`it should update state when ${type.FETCH_AVERAGE_RATING_START}
   is triggered`,
  () => {
    expect(fetchAverageRating(initialState, {
      type: type.FETCH_AVERAGE_RATING_START,
    })).toEqual(updateObject(initialState, { isAverageLoading: true }));
  });

  it(`should update state when ${type.FETCH_AVERAGE_RATING_FAILED}
   is triggered`, () => {
    const payload = {
      response: {
        data: {
          message: 'bhjvbhdsjv chmjv',
        },
      },
    };
    expect(fetchAverageRating(initialState, {
      type: type.FETCH_AVERAGE_RATING_FAILED,
      payload,
    }))
      .toEqual(updateObject(initialState, {
        isAverageLoading: false,
        averageRating: payload,
        averageError: true,
      }));
  });

  it(`should update state when ${type.FETCH_AVERAGE_RATING_SUCCESS}
  is triggered`, () => {
    const payload = {
      articlesResponse: 'look lively',
    };
    expect(fetchAverageRating(initialState, {
      type: type.FETCH_AVERAGE_RATING_SUCCESS,
      payload,
    })).toEqual(updateObject(initialState, {
      isAverageLoading: false,
      averageRating: payload,
      averageSuccess: true,
    }));
  });
});
