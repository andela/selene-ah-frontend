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

const fetchFollowersStart = () => ({
  type: type.FETCH_FOLLOWERS_START,
});

const fetchFollowersComplete = payload => ({
  type: type.FETCH_FOLLOWERS_COMPLETE,
  payload,
});

export const unmountArticle = () => ({
  type: type.UNMOUNT_ARTICLE,
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

const fetchFollowers = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(fetchFollowersStart());
  try {
    const res = await axios.get(`${process.env.SERVER_API}/following`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(fetchFollowersComplete(res.data));
  } catch (err) {
    dispatch(fetchFollowersComplete(err.response.data.message));
  }
};

export default {
  fetchArticleStart,
  fetchArticleSuccess,
  fetchArticleFailed,
  fetchArticle,
  fetchFollowers,
  fetchFollowersStart,
  fetchFollowersComplete,
  unmountArticle,
};
