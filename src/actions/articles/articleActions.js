import axios from 'axios';

import {
  CREATE_ARTICLE,
  CREATE_ARTICLE_FAILURE,
  CREATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_FAILURE,
} from './actionTypes';

export const createArticle = () => ({ type: CREATE_ARTICLE });

export const createArticleFailure = payload => ({
  type: CREATE_ARTICLE_FAILURE,
  payload,
});

export const createArticleSuccess = payload => ({
  type: CREATE_ARTICLE_SUCCESS,
  payload,
});

export const updateArticle = () => ({ type: UPDATE_ARTICLE });

export const updateArticleFailure = payload => ({
  type: UPDATE_ARTICLE_FAILURE,
  payload,
});

export const updateArticleSuccess = payload => ({
  type: UPDATE_ARTICLE_SUCCESS,
  payload,
});

export const postArticle = articleObject => async (dispatch) => {
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

export const postUpdatedArticle = articleObject => async (dispatch) => {
  dispatch(updateArticle());
  const token = localStorage.getItem('token');
  try {
    const response = await axios.put(
      `${process.env.SERVER_API}/article/${articleObject.id}`, {
        ...articleObject,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    dispatch(updateArticleSuccess(response));
  } catch (error) {
    dispatch(updateArticleFailure(error));
  }
};
