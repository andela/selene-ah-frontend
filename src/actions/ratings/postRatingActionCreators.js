import axios from 'axios';
import * as type from './actionTypes';

const postRatingStart = () => ({
  type: type.RATE_ARTICLE_START,
});

const postRatingSuccess = payload => ({
  type: type.RATE_ARTICLE_SUCCESS,
  payload,
});

const postRatingFailed = payload => ({
  type: type.RATE_ARTICLE_FAILED,
  payload,
});

const postRating = (articleId, ratingObject) => async (dispatch) => {
  dispatch(postRatingStart());
  const token = localStorage.getItem('token');
  try {
    const res = await axios
      .post(`${process.env.SERVER_API}/articles/${articleId}/rating`,
        { ...ratingObject }, {
          headers: {
            Authorization: `Bearere ${token}`,
          },
        });
    dispatch(postRatingSuccess(res.data));
  } catch (err) {
    dispatch(postRatingFailed(err));
  }
};

export default {
  postRating,
  postRatingStart,
  postRatingSuccess,
  postRatingFailed,
};
