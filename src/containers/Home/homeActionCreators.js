import axios from 'axios';
import * as actionTypes from '../../actions/authAction/actionTypes';

const fetchArticlesStart = () => ({
  type: actionTypes.FECTH_ARTICLES_START,
});

const fetchArticlesSuccess = payload => ({
  type: actionTypes.FECTH_ARTICLES_SUCCESS,
  payload,
});

const fetchArticlesFailed = payload => ({
  type: actionTypes.FECTH_ARTICLES_FAILED,
  payload,
});

const fetchArticles = () => async (dispatch) => {
  dispatch(fetchArticlesStart());
  try {
    const res = await axios.get(`${process.env.SERVER_API}/articles`);
    dispatch(fetchArticlesSuccess(res.data));
  } catch (err) {
    dispatch(fetchArticlesFailed(err));
  }
};

export default {
  fetchArticles,
  fetchArticlesStart,
  fetchArticlesSuccess,
  fetchArticlesFailed,
};
