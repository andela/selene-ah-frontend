import * as type from '../../actions/ratings/actionTypes';
import updateObject from '../../helpers/store/utility';

export const initialState = {
  isUserLoading: false,
  userRatingResponse: {},
  userError: null,
  userSuccess: null,
};

const isUserRatingLoadingState = { isUserLoading: true };

/**
 * @description - Dispatches when user rating is gotten successfully
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const updateFetchUserRatingSuccessState = (state, action) => updateObject(
  state, {
    isUserLoading: false,
    userRatingResponse: action.payload,
    userSuccess: true,
  },
);

/**
 * @description - Dispatches when user rating fails
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const updateFetchUserRatingFailedState = (state, action) => updateObject(
  state, {
    isUserLoading: false,
    userRatingResponse: action.payload,
    userError: true,
  },
);


const fetchUserRating = (state = initialState, action) => {
  switch (action.type) {
  case type.FETCH_USER_RATING_START:
    return updateObject(initialState, isUserRatingLoadingState);

  case type.FETCH_USER_RATING_FAILED:
    return updateFetchUserRatingFailedState(state, action);

  case type.FETCH_USER_RATING_SUCCESS:
    return updateFetchUserRatingSuccessState(state, action);
  default:
    return state;
  }
};

export default fetchUserRating;
