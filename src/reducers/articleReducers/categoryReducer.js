import updateStateUtility from '../../helpers/store/utility';
import {
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
} from '../../actions/articles/actionTypes';

export const initialState = {
  isFetchingCategories: false,
  fetchCategoriesResponse: null,
  fetchCategoriesError: false,
  fetchCategoriesSuccess: false,
};

/**
 * @description - Dispatches when getCategory start
 * @param {object} state
 * @returns {object} - An updated state
 */
const getCategory = state => updateStateUtility(
  state,
  { isFetchingCategories: true, fetchCategoriesError: false },
);

/**
 * @description - Dispatches when category is returned successfully
 * @param {object} state
 * @param {object} payload
 * @returns {object} - An updated state
 */
const getCategorySuccess = (state, payload) => updateStateUtility(
  state,
  {
    isFetchingCategories: false,
    fetchCategoriesError: false,
    fetchCategoriesResponse: payload,
    fetchCategoriesSuccess: true,
  },
);

/**
 * @description - Dispatches when there is a failure in fetching category
 * @param {object} state
 * @param {object} payload
 * @returns {object} - An updated state
 */
const getCategoryFailure = (state, payload) => updateStateUtility(
  state,
  {
    isFetchingCategories: false,
    fetchCategoriesError: true,
    fetchCategoriesResponse: payload,
    fetchCategoriesSuccess: false,
  },
);

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return getCategory(state);
    case GET_CATEGORY_SUCCESS:
      return getCategorySuccess(state, action.payload);
    case GET_CATEGORY_FAILURE:
      return getCategoryFailure(state, action.payload);
    default:
      return state;
  }
};

export default categoryReducer;
