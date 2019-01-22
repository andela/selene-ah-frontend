import axios from 'axios';
import * as type from './actionTypes';

const getProfileStart = () => ({
  type: type.GET_PROFILE_START,
});

const getProfileSuccess = payload => ({
  type: type.GET_PROFILE_SUCCESS,
  payload,
});

const getProfileFail = payload => ({
  type: type.GET_PROFILE_FAIL,
  payload,
});

const profileDispatcher = () => (dispatch) => {
  const token = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  dispatch(getProfileStart());
  return axios
    .get(`${process.env.SERVER_API}/user/profile/auth`, { headers })
    .then((res) => {
      dispatch(getProfileSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getProfileFail(err));
    });
};

export default {
  profileDispatcher,
  getProfileStart,
  getProfileFail,
  getProfileSuccess,
};
