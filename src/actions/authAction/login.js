import axios from 'axios';
import * as type from './actionTypes';

const loginStart = () => ({
  type: type.LOGIN_START,
});

const loginSuccess = payload => ({
  type: type.LOGIN_SUCCESS,
  payload,
});

const loginFailed = payload => ({
  type: type.LOGIN_FAILED,
  payload,
});

const loginDispatcher = userData => (dispatch) => {
  dispatch(loginStart());
  return axios.post(`${process.env.SERVER_API}/auth/signin`, userData)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      dispatch(loginSuccess(res.data));
    })
    .catch((err) => { dispatch(loginFailed(err)); });
};

export default {
  loginDispatcher,
  loginStart,
  loginFailed,
  loginSuccess,
};
