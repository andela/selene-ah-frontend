import axios from 'axios';
import * as type from './actionTypes';

const fetchAverageRatingStart = () => ({
  type: type.FETCH_AVERAGE_RATING_START,
});

const fetchAverageRatingSuccess = payload => ({
  type: type.FETCH_AVERAGE_RATING_SUCCESS,
  payload,
});

const fetchAverageRatingFailed = payload => ({
  type: type.FETCH_AVERAGE_RATING_FAILED,
  payload,
});

const fetchAverageRating = articleId => async (dispatch) => {
  dispatch(fetchAverageRatingStart());
  try {
    const res = await axios
      .get(`${process.env.SERVER_API}/articles/${articleId}/rating`);
    dispatch(fetchAverageRatingSuccess(res.data));
  } catch (err) {
    dispatch(fetchAverageRatingFailed(err));
  }
};

export default {
  fetchAverageRating,
  fetchAverageRatingStart,
  fetchAverageRatingSuccess,
  fetchAverageRatingFailed,
};
