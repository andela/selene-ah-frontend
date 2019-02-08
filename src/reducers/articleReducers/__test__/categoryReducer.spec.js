/* eslint-disable max-len */
import * as categoryActionTypes from '../../../actions/articles/actionTypes';
import categoryReducer, { initialState as defaultState } from '../categoryReducer';
import stateUpdateUtility from '../../../helpers/store/utility';

describe('Category Reducer', () => {
  it(`should update state when ${categoryActionTypes.GET_CATEGORY} is triggered`, () => {
    expect(categoryReducer(defaultState, { type: categoryActionTypes.GET_CATEGORY })).toEqual(
      stateUpdateUtility(defaultState, {
        isFetchingCategories: true,
      }),
    );
  });

  it(`should update state when ${categoryActionTypes.GET_CATEGORY_FAILURE} is triggered`, () => {
    const payload = {
      response: {
        data: {
          message: 'Sorry, could not get categories',
        },
      },
    };
    expect(categoryReducer(defaultState, { type: categoryActionTypes.GET_CATEGORY_FAILURE, payload })).toEqual(
      stateUpdateUtility(defaultState, {
        isFetchingCategories: false,
        fetchCategoriesError: true,
        fetchCategoriesResponse: payload,
        fetchCategoriesSuccess: false,
      }),
    );
  });

  it(`should update state when ${categoryActionTypes.GET_CATEGORY_SUCCESS} is triggered`, () => {
    expect(categoryReducer(defaultState, { type: categoryActionTypes.GET_CATEGORY_SUCCESS, payload: 'success' })).toEqual(
      stateUpdateUtility(defaultState, {
        isFetchingCategories: false,
        fetchCategoriesError: false,
        fetchCategoriesResponse: 'success',
        fetchCategoriesSuccess: true,
      }),
    );
  });

  it('should default state when nothing is triggered', () => {
    expect(categoryReducer(defaultState, { type: 'nothing' })).toEqual(
      defaultState,
    );
  });

  it('should default state when no state is passed', () => {
    expect(categoryReducer(undefined, { type: 'null' })).toEqual(
      defaultState,
    );
  });
});
