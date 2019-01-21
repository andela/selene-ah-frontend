import Axios from 'axios';
import * as actionType from './actionTypes';

export const likeArticleStart = () => ({
  type: actionType.LIKE_ARTICLE_START,
});

export const likeArticleSuccess = payload => ({
  type: actionType.LIKE_ARTICLE_SUCCESS,
  payload,
});

export const likeArticleFailure = response => ({
  type: actionType.LIKE_ARTICLE_FAILURE,
  payload: response.data.message,
  status: response.status,
});

export const likeArticle = (vote, articleId) => async (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(likeArticleStart());
  try {
    const res = await Axios.post(
      `${process.env.SERVER_API}/votes/${articleId}/like`, { vote }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    dispatch(likeArticleSuccess(res.data.message));
  } catch (err) {
    dispatch(likeArticleFailure(err.response));
  }
};
