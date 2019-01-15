import axios from 'axios';
import * as actionTypes from './actionTypes';

/**
 * @description - Signup start actions
 * @returns {object} - signup start action
 */
export const signUpStart = () => ({
  type: actionTypes.SIGN_UP_START,
});

/**
 * @description - Signup success actions
 * @param {*} payload - success response
 * @returns {object} - signup sucess action
 */
export const signUpSuccess = payload => ({
  type: actionTypes.SIGN_UP_SUCCESS,
  payload,
});

/**
 * @description - Signup failure actions
 * @param {*} payload - failure response
 * @returns {object} - signup start action
 */
export const signUpFailure = payload => ({
  type: actionTypes.SIGN_UP_FAILURE,
  payload,
});

/**
 * @description - Signup user
 * @param {*} user - user object to dispatch
 * @param {*} history
 * @returns {fn} - signup dispatch function
 */
export const signUpUser = (user, history) => async (dispatch) => {
  dispatch(signUpStart());
  try {
    const res = await axios.post(`${process.env.SERVER_API}/auth/signup`,
      { ...user });
    localStorage.setItem('token', res.data.token);
    dispatch(signUpSuccess(res.data));
    history.push('/');
  } catch (err) {
    dispatch(signUpFailure(err));
  }
};
