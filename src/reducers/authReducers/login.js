import * as type from '../../actions/authAction/actionTypes';
import updateObject from '../../helpers/store/utility';

export const initialState = {
  isLoading: false,
  response: null,
  loginError: null,
  success: null,
  errorMessage: null,
};

const loginStartState = { isLoading: true };

/**
 * @description - Dispatches when login is successful
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const updateLoginSuccessState = (state, action) => updateObject(state, {
  isLoading: true,
  response: action.payload,
  success: true,
});

/**
 * @description - Dispatches when login fails
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const updateLoginFailedState = (state, action) => updateObject(state, {
  isLoading: false,
  loginError: true,
  response: action.payload,
  errorMessage: action.payload.response.data.message,
});


const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOGIN_START:
      return updateObject(initialState, loginStartState);

    case type.LOGIN_FAILED:
      return updateLoginFailedState(state, action);

    case type.LOGIN_SUCCESS:
      return updateLoginSuccessState(state, action);

    default:
      return state;
  }
};

export default loginReducer;
