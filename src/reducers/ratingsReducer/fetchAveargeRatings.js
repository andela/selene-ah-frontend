import * as type from '../../actions/ratings/actionTypes';
import updateObject from '../../helpers/store/utility';

export const initialState = {
  isAverageLoading: false,
  averageRating: {},
  averageError: null,
  averageSuccess: null,
};

const isAverageRatingLoadingState = { isAverageLoading: true };

/**
 * @description - Dispatches when average rating is gotten successfully
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const updateFetchAverageRatingSuccessState = (state, action) => updateObject(
  state, {
    isAverageLoading: false,
    averageRating: action.payload,
    averageSuccess: true,
  },
);

/**
 * @description - Dispatches when average rating fails
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const updateFetchAverageRatingFailedState = (state, action) => updateObject(
  state, {
    isAverageLoading: false,
    averageRating: action.payload,
    averageError: true,
  },
);


const fetchAverageRating = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_AVERAGE_RATING_START:
      return updateObject(state, isAverageRatingLoadingState);

    case type.FETCH_AVERAGE_RATING_FAILED:
      return updateFetchAverageRatingFailedState(state, action);

    case type.FETCH_AVERAGE_RATING_SUCCESS:
      return updateFetchAverageRatingSuccessState(state, action);
    default:
      return state;
  }
};

export default fetchAverageRating;
