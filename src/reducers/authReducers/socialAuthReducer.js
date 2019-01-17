import * as actionsTypes from '../../actions/authAction/actionTypes';
import updateObject from '../../helpers/store/utility';

const initialState = {
  isAuthenticated: null,
  error: null,
  isNewUser: null,
};

const socialAuthFail = state => (
  updateObject(state, {
    isAuthenticated: false,
  })
);

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
