import * as actionType from '../../actions/authAction/actionTypes';
import updateObject from '../../helpers/store/utility';

const initialState = {
  isLoading: false,
  response: null,
  error: null,
  success: null,
  passwordChanged: false,
};

const updatePasswordStartState = { isLoading: true };

/**
 * @description - Dispatches when password is updated successfully
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const updatePasswordSuccessState = (state, action) => updateObject(state, {
  isLoading: false,
  response: action.payload,
  success: true,
  passwordChanged: true,
});

/**
 * @description - Dispatches when update password fails
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const updatePasswordFailedState = (state, action) => updateObject(state, {
  isLoading: false,
  error: true,
  response: action.payload,
  passwordChanged: false,
});

const updatePassword = (state = initialState, action) => {
  switch (action.type) {
  case actionType.UPDATE_PASSWORD_START:
    return updateObject(initialState, updatePasswordStartState);

  case actionType.UPDATE_PASSWORD_SUCCESS:
    return updatePasswordSuccessState(state, action);

  case actionType.UPDATE_PASSWORD_FAILED:
    return updatePasswordFailedState(state, action);

  default:
    return state;
  }
};

export default updatePassword;
