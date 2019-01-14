import axios from 'axios';
import * as actionTypes from './actionTypes';

export const signUpStart = () => ({
  type: actionTypes.SIGN_UP_START,
});

export const signUpSuccess = payload => ({
  type: actionTypes.SIGN_UP_SUCCESS,
  payload,
});

export const signUpFailure = err => ({
  type: actionTypes.SIGN_UP_FAILURE,
  payload: err,
});

export const signUpUser = user => (dispatch) => {
  dispatch(signUpStart());
  axios.post('your url here', { ...user }).then((res) => {
    dispatch(signUpSuccess(res));
  }).catch((err) => {
    dispatch(signUpFailure(err));
  });
};
