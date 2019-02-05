import axios from 'axios';
import * as type from './actionTypes';

const fetchUserRatingStart = () => ({
  type: type.FETCH_USER_RATING_START,
});

const fetchUserRatingSuccess = payload => ({
  type: type.FETCH_USER_RATING_SUCCESS,
  payload,
});

const fetchUserRatingFailed = payload => ({
  type: type.FETCH_USER_RATING_FAILED,
  payload,
});

const fetchUserRating = articleId => async (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(fetchUserRatingStart());
  try {
    const res = await axios
      .get(`${process.env.SERVER_API}/user/articles/${articleId}/rating`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    dispatch(fetchUserRatingSuccess(res.data));
  } catch (err) {
    dispatch(fetchUserRatingFailed(err));
  }
};

export default {
  fetchUserRating,
  fetchUserRatingStart,
  fetchUserRatingSuccess,
  fetchUserRatingFailed,
};
