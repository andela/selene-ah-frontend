import axios from 'axios';
import * as type from './actionTypes';

const fetchArticleStart = () => ({
  type: type.FETCH_ARTICLE_START,
});

const fetchArticleSuccess = payload => ({
  type: type.FETCH_ARTICLE_SUCCESS,
  payload,
});

const fetchArticleFailed = payload => ({
  type: type.FETCH_ARTICLE_FAILED,
  payload,
});

const fetchArticle = (slug, history) => (dispatch) => {
  dispatch(fetchArticleStart());
  return axios.get(`${process.env.SERVER_API}/article/s/${slug}`)
    .then((res) => {
      dispatch(fetchArticleSuccess(res.data));
    })
    .catch((err) => {
      history.push('/404');
      dispatch(fetchArticleFailed(err));
    });
};


export default {
  fetchArticleStart,
  fetchArticleSuccess,
  fetchArticleFailed,
  fetchArticle,
};
