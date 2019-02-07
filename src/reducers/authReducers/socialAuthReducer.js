import * as actionsTypes from '../../actions/authAction/actionTypes';
import updateObject from '../../helpers/store/utility';

const initialState = {
  isAuthenticated: null,
  error: null,
  isNewUser: null,
};

/**
 * @description - Dispatches when social authentication fail
 * @param {object} state
 * @returns {object} - An updated state
 */
const socialAuthFail = state => (
  updateObject(state, {
    isAuthenticated: false,
  })
);

/**
 * @description - Dispatches when social authentication is successful
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const socialAuthSuccess = (state, action) => (
  updateObject(state, {
    isAuthenticated: true,
    isNewUser: action.newUser,
  })
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionsTypes.GOOGLE_AUTH_FAIL:
    return socialAuthFail(state, action);
  case actionsTypes.FACEBOOK_AUTH_FAIL:
    return socialAuthFail(state, action);
  case actionsTypes.TWITTER_AUTH_FAIL:
    return socialAuthFail(state, action);
  case actionsTypes.GOOGLE_AUTH_SUCCESS:
    return socialAuthSuccess(state, action);
  case actionsTypes.FACEBOOK_AUTH_SUCCESS:
    return socialAuthSuccess(state, action);
  case actionsTypes.TWITTER_AUTH_SUCCESS:
    return socialAuthSuccess(state, action);
  default:
    return state;
  }
};

export default reducer;
