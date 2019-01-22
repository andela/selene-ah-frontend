import axios from 'axios';
import * as type from './actionTypes';

const getArticleStart = () => ({
  type: type.GET_ARTICLE_START,
});

const getArticleSuccess = payload => ({
  type: type.GET_ARTICLE_SUCCESS,
  payload,
});

const getArticleFail = payload => ({
  type: type.GET_ARTICLE_FAIL,
  payload,
});
const articleDispatcher = () => (dispatch) => {
  const authorsToken = localStorage.getItem('token');
  dispatch(getArticleStart());
  return axios
    .get(`${process.env.SERVER_API}/article/author`, {
      headers: {
        Authorization: `Bearer ${authorsToken}`,
      },
    })
    .then((res) => {
      dispatch(getArticleSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getArticleFail(err));
    });
};

export default {
  articleDispatcher,
  getArticleStart,
  getArticleFail,
  getArticleSuccess,
};
