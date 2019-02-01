import axios from 'axios';
import * as actionTypes from './actionTypes';


const updatePasswordStart = () => ({
  type: actionTypes.UPDATE_PASSWORD_START,
});

const updatePasswordSuccess = payload => ({
  type: actionTypes.UPDATE_PASSWORD_SUCCESS,
  payload: payload.data.message,
});

const updatePasswordFailed = payload => ({
  type: actionTypes.UPDATE_PASSWORD_FAILED,
  payload: payload.data.message,
});


const updatePassword = (passwordData, token) => (dispatch) => {
  const data = {
    ...passwordData,
  };
  const headers = {
    resetpasswordtoken: token,
  };
  dispatch(updatePasswordStart());
  return axios.post(`${process.env.SERVER_API}/auth/updatepassword`,
    data, { headers }).then((response) => {
    dispatch(updatePasswordSuccess(response));
  }).catch((err) => {
    dispatch(updatePasswordFailed(err.response));
  });
};

export default {
  updatePasswordStart,
  updatePasswordSuccess,
  updatePasswordFailed,
  updatePassword,
};
