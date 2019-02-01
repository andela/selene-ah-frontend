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

const followUserStart = state => updateObject(state, {
  loading: true,
  error: false,
  success: false,
});

const followUserFailure = (state, { payload }) => updateObject(state, {
  loading: false,
  response: payload,
  error: true,
});

const followUserSuccess = (state, { payload }) => updateObject(state, {
  loading: false,
  response: payload,
  success: true,
});

const unFollowUserStart = state => updateObject(state, {
  unloading: true,
  unfollowError: false,
  unfollowSuccess: false,
});

const unFollowUserFailure = (state, { payload }) => updateObject(state, {
  unloading: false,
  response: payload,
  unfollowError: true,
});

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
