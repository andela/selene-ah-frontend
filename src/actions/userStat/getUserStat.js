import axios from 'axios';

import * as actionTypes from './actionTypes';

const filterFollowers = (follower) => {
  const timeStamp = Math.round(new Date().getTime() / 1000);
  const dateLimitStamp = timeStamp - (7 * 24 * 3600);
  const followerDate = new Date(follower.createdAt);
  return followerDate >= new Date(dateLimitStamp).getTime();
};

const getNewFollowers = (followers) => {
  if (followers.length === 0) {
    return 0;
  }
  const newFollowers = followers.filter(filterFollowers);
  return newFollowers.length;
};

const fetchData = async (url, token) => {
  axios.defaults.headers.common = {
    Authorization: `bearer ${token}`,
  };
  const response = await axios.get(url);
  return response;
};

export
const userFollowerStat = (token, userId) => async (dispatch) => {
  try {
    const url = `${process.env.SERVER_API}/followers/${userId}`;
    const response = await fetchData(url, token);
    const followersStats = {
      newFollowers: getNewFollowers(response.data.followers.rows),
      totalFollowers: response.data.followers.count,
    };
    return dispatch({
      type: actionTypes.GET_FOLLOWERS_SUCCESS,
      payload: followersStats,
    });
  } catch (error) {
    return dispatch({
      type: actionTypes.GET_FOLLOWERS_FAILURE,
      error,
    });
  }
};

export
const followingUsersStat = (token, userId) => async (dispatch) => {
  try {
    const url = `${process.env.SERVER_API}/following/${userId}`;
    const response = await fetchData(url, token);
    return dispatch({
      type: actionTypes.FOLLOWING_OTHERS_STAT_SUCCESS,
      payload: !response.data.followees ? 0 : response.data.followees.length,
    });
  } catch (error) {
    return dispatch({
      type: actionTypes.FOLLOWING_OTHERS_STAT_FAILURE,
      error,
    });
  }
};


export
const userCommentStat = token => async (dispatch) => {
  const url = `${process.env.SERVER_API}/comments/user/count`;
  try {
    const response = await fetchData(url, token);
    const commentStats = response.data.data.count;
    return dispatch({
      type: actionTypes.GET_COMMENT_STAT_SUCCESS,
      payload: commentStats,
    });
  } catch (error) {
    return dispatch({
      type: actionTypes.GET_COMMENT_STAT_FAILURE,
      error,
    });
  }
};

export
const userArticleLikeStat = token => async (dispatch) => {
  const url = `${process.env.SERVER_API}/votes/user`;
  try {
    const response = await fetchData(url, token);
    const likesStats = response.data.data.count;
    return dispatch({
      type: actionTypes.GET_LIKED_ARTICLES_SUCCESS,
      payload: likesStats,
    });
  } catch (error) {
    return dispatch({
      type: actionTypes.GET_LIKED_ARTICLES_FAILURE,
      error,
    });
  }
};

export
const userBookmarkStat = token => async (dispatch) => {
  const url = `${process.env.SERVER_API}/bookmark`;
  try {
    const response = await fetchData(url, token);
    const result = response.data.data.count;
    return dispatch({
      type: actionTypes.GET_BOOKMARK_SUCCESS,
      payload: result,
    });
  } catch (error) {
    return dispatch({
      type: actionTypes.GET_BOOKMARK_FAILURE,
      error,
    });
  }
};

const calTotal = (array, props) => array.reduce((a, b) => a + b[props], 0);

const articleStats = (articleData) => {
  const userArticleStats = {
    noOfreaders: calTotal(articleData.rows, 'readingStat'),
    totalNoOfReadingTime: calTotal(articleData.rows, 'readTime'),
    noOfWrittenArticles: articleData.count,
  };
  return userArticleStats;
};

export
const userArticlesStat = token => async (dispatch) => {
  const url = `${process.env.SERVER_API}/articles/stat`;
  try {
    const response = await fetchData(url, token);
    const result = articleStats(response.data.data);
    return dispatch({
      type: actionTypes.GET_ARTICLES_STAT_SUCCESS,
      payload: result,
    });
  } catch (error) {
    return dispatch({
      type: actionTypes.GET_ARTICLES_STAT_FAILURE,
      error,
    });
  }
};

export const getAllStat = (token, userId) => (dispatch) => {
  try {
    return Promise.all([
      dispatch(userFollowerStat(token, userId)),
      dispatch(userArticlesStat(token)),
      dispatch(userBookmarkStat(token)),
      dispatch(userArticleLikeStat(token)),
      dispatch(userCommentStat(token)),
      dispatch(followingUsersStat(token, userId)),
    ]);
  } catch (error) {
    return dispatch({
      error,
    });
  }
};
