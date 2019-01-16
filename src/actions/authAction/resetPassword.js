import axios from 'axios';
import * as actionTypes from './actionTypes';


const resetPasswordStart = () => ({
  type: actionTypes.RESET_PASSWORD_START,
});

const resetPasswordSuccess = payload => ({
  type: actionTypes.RESET_PASSWORD_SUCCESS,
  payload,
});

const resetPasswordFailed = payload => ({
  type: actionTypes.RESET_PASSWORD_FAILED,
  payload,
});


const sendResetLink = email => (dispatch) => {
  const data = {
    email,
  };
  dispatch(resetPasswordStart());
  return axios.post(`${process.env.SERVER_API}/auth/resetpassword`,
    data).then((response) => {
    dispatch(resetPasswordSuccess(response.data.message));
  }).catch((err) => {
    dispatch(resetPasswordFailed(err.response.data.message));
  });
};

export default {
  resetPasswordStart,
  resetPasswordSuccess,
  resetPasswordFailed,
  sendResetLink,
};
