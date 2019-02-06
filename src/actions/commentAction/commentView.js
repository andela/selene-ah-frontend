import axios from 'axios';
import * as actionTypes from './actionTypes';

const getCommentStart = () => ({
  type: actionTypes.GET_COMMENT_START,
});

const getCommentSuccess = payload => ({
  type: actionTypes.GET_COMMENT_SUCCESS,
  payload,
});

const getCommentFailed = payload => ({
  type: actionTypes.GET_COMMENT_FAIL,
  payload,
});


const postCommentStart = () => ({
  type: actionTypes.POST_COMMENT_START,
});

const postCommentSuccess = (payload, userDetails) => ({
  type: actionTypes.POST_COMMENT_SUCCESS,
  payload,
  userDetails,
});

const postCommentFailed = payload => ({
  type: actionTypes.POST_COMMENT_FAIL,
  payload,
});

/**
 * @description - get all the comments of an article
 * @param {*} articleId - the id of the article
 * @param {*} userDetails - user details
 * @returns {fn} - dispatch the getcomment function
 */
const getArticleComments = articleId => async (dispatch) => {
  dispatch(getCommentStart());
  try {
    const response = await axios.get(
      `${process.env.SERVER_API}/article/${articleId}/comments`,
    );
    dispatch(getCommentSuccess(response.data.comments));
  } catch (err) {
    dispatch(getCommentFailed(err.response.data.message));
  }
};

/**
 * @description - get all the comments of an article
 * @param {string} articleId - the id of the article
 * @param {string} content - the comment to be post
 * @param {string} userDetails - the user details
 * @returns {fn} - postComment dispatch function
 */
const postComment = (articleId, content, userDetails) => async (dispatch) => {
  const token = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  dispatch(postCommentStart());
  try {
    const response = await axios.post(
      `${process.env.SERVER_API}/article/${articleId}/comment`,
      { content },
      { headers },
    );
    dispatch(postCommentSuccess(response.data.comment, userDetails));
  } catch (err) {
    dispatch(postCommentFailed(err.response.data.message));
  }
};

export default {
  getCommentStart,
  getCommentSuccess,
  getCommentFailed,
  getArticleComments,
  postCommentStart,
  postCommentFailed,
  postComment,
};
