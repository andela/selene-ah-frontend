import axios from 'axios';

import {
  GET_CATEGORY,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_SUCCESS,
} from './actionTypes';

export const getCategory = () => ({
  type: GET_CATEGORY,
});

export const getCategoryFailure = payload => ({
  type: GET_CATEGORY_FAILURE,
  payload,
});

export const getCategorySuccess = payload => ({
  type: GET_CATEGORY_SUCCESS,
  payload,
});

const fetchCategories = () => async (dispatch) => {
  dispatch(getCategory());
  try {
    const response = await axios.get(`${process.env.SERVER_API}/categories`);
    return dispatch(getCategorySuccess(response.data));
  } catch (error) {
    return dispatch(getCategoryFailure(error.message));
  }
};

export default fetchCategories;
