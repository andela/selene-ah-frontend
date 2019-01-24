import axios from 'axios';

import {
  CREATE_ARTICLE,
  CREATE_ARTICLE_FAILURE,
  CREATE_ARTICLE_SUCCESS,
} from './articleActionTypes';

export const createArticle = () => ({ type: CREATE_ARTICLE });

export const createArticleFailure = payload => ({
  type: CREATE_ARTICLE_FAILURE,
  payload,
});

export const createArticleSuccess = payload => ({
  type: CREATE_ARTICLE_SUCCESS,
  payload,
});

const postArticle = articleObject => async (dispatch) => {
  dispatch(createArticle());
  const token = localStorage.getItem('token');
  try {
    const response = await axios.post(`${process.env.SERVER_API}/article`, {
      ...articleObject,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(createArticleSuccess(response));
  } catch (error) {
    dispatch(createArticleFailure(error));
  }
};

export default postArticle;
