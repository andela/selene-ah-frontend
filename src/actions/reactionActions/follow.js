import axios from 'axios';
import * as actionTypes from './actionTypes';

export const followUserStart = () => ({
  type: actionTypes.FOLLOW_USER_START,
});

export const followUserSuccess = payload => ({
  type: actionTypes.FOLLOW_USER_SUCCESS,
  payload,
});

export const followUserFailure = response => ({
  type: actionTypes.FOLLOW_USER_FAILURE,
  payload: response.data.message,
  status: response.status,
});

export const unFollowUserStart = () => ({
  type: actionTypes.UNFOLLOW_USER_START,
});

export const unFollowUserSuccess = payload => ({
  type: actionTypes.UNFOLLOW_USER_SUCCESS,
  payload,
});

export const unFollowUserFailure = payload => ({
  type: actionTypes.UNFOLLOW_USER_FAILURE,
  payload,
});

export const followUser = (followerId, followState) => async (dispatch) => {
  const token = localStorage.getItem('token');
  try {
    dispatch(followUserStart());
    const res = await axios.post(`${process.env.SERVER_API}/${followState}`,
      { followerId }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    dispatch(followUserSuccess(res.data.message));
  } catch (err) {
    dispatch(followUserFailure(err.response));
  }
};

export const unFollowUser = (followState, id) => async (dispatch) => {
  const token = localStorage.getItem('token');
  try {
    dispatch(unFollowUserStart());
    const res = await axios.delete(
      `${process.env.SERVER_API}/${followState}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    dispatch(unFollowUserSuccess(res.data.message));
  } catch (err) {
    dispatch(unFollowUserFailure(err.response.data.message));
  }
};
