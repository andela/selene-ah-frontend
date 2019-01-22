import axios from 'axios';
import * as type from './actionTypes';

const updateProfileStart = () => ({
  type: type.UPDATE_PROFILE_START,
});

const updateProfileSuccess = (payload, profileData) => ({
  type: type.UPDATE_PROFILE_SUCCESS,
  payload,
  profileData,
});

const updateProfileFail = payload => ({
  type: type.UPDATE_PROFILE_FAIL,
  payload,
});

const updateProfileDispatcher = profileData => (dispatch) => {
  const data = {
    ...profileData,
  };
  const token = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  dispatch(updateProfileStart());
  return axios
    .put(`${process.env.SERVER_API}/user/profile`, data, { headers })
    .then((res) => {
      dispatch(updateProfileSuccess(res.data, data));
    })
    .catch((err) => {
      dispatch(updateProfileFail(err));
    });
};

export default {
  updateProfileDispatcher,
  updateProfileStart,
  updateProfileFail,
  updateProfileSuccess,
};
