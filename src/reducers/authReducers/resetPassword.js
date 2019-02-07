import * as actionType from '../../actions/authAction/actionTypes';
import updateObject from '../../helpers/store/utility';

const initialState = {
  isLoading: false,
  response: null,
  error: null,
  success: null,
};

const resetPasswordStartState = { isLoading: true };

/**
 * @description - Dispatches when password is updated successfully
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const updateResetSuccessState = (state, action) => updateObject(state, {
  isLoading: false,
  response: action.payload,
  success: true,
});

/**
 * @description - Dispatches when password update fails
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const updateResetFailedState = (state, action) => updateObject(state, {
  isLoading: false,
  error: true,
  response: action.payload,
});

const resetPassword = (state = initialState, action) => {
  switch (action.type) {
  case actionType.RESET_PASSWORD_START:
    return updateObject(initialState, resetPasswordStartState);

  case actionType.RESET_PASSWORD_FAILED:
    return updateResetFailedState(state, action);

  case actionType.RESET_PASSWORD_SUCCESS:
    return updateResetSuccessState(state, action);

  default:
    return state;
  }
};

export default resetPassword;
