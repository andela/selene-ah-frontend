import * as actionTypes from '../../actions/reactionActions/actionTypes';
import updateObject from '../../helpers/store/utility';

const initState = {
  unloading: null,
  unfollowError: null,
  unfollowSuccess: false,
  error: null,
  loading: false,
  success: false,
  response: null,
};

/**
 * @description - Dispatches when user follows an author
 * @param {object} state
 * @returns {object} - updated state
 */
const followUserStart = state => updateObject(state, {
  loading: true,
  error: false,
  success: false,
});

/**
 * @description - Dispatches when follow user fails
 * @param {object} state
 * @param {object} payload
 * @returns {object} - updated state
 */
const followUserFailure = (state, { payload }) => updateObject(state, {
  loading: false,
  response: payload,
  error: true,
});

/**
 * @description - Dispatches when follow user is successful
 * @param {object} state
 *  * @param {object} payload
 * @returns {object} - updated state
 */
const followUserSuccess = (state, { payload }) => updateObject(state, {
  loading: false,
  response: payload,
  success: true,
});

/**
 * @description - Dispatches when user unfollows an author
 * @param {object} state
 * @returns {object} - updated state
 */
const unFollowUserStart = state => updateObject(state, {
  unloading: true,
  unfollowError: false,
  unfollowSuccess: false,
});

/**
 * @description - Dispatches when unfollow user fails
 * @param {object} state
 * @param {object} payload
 * @returns {object} - updated state
 */
const unFollowUserFailure = (state, { payload }) => updateObject(state, {
  unloading: false,
  response: payload,
  unfollowError: true,
});

/**
 * @description - Dispatches when user unfollows an author successfully
 * @param {object} state
 * @param {object} payload
 * @returns {object} - updated state
 */
const unFollowUserSuccess = (state, { payload }) => updateObject(state, {
  unloading: false,
  response: payload,
  unfollowSuccess: true,
});

const reducer = (state = initState, action) => {
  switch (action.type) {
  case actionTypes.FOLLOW_USER_START: return followUserStart(state);
  case actionTypes.FOLLOW_USER_FAILURE:
    return followUserFailure(state, action);
  case actionTypes.FOLLOW_USER_SUCCESS:
    return followUserSuccess(state, action);
  case actionTypes.UNFOLLOW_USER_START: return unFollowUserStart(state);
  case actionTypes.UNFOLLOW_USER_FAILURE:
    return unFollowUserFailure(state, action);
  case actionTypes.UNFOLLOW_USER_SUCCESS:
    return unFollowUserSuccess(state, action);
  default: return state;
  }
};

export default reducer;
