import updateStateUtility from '../../helpers/store/utility';
import {
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
} from '../../actions/articles/categoryActionTypes';

export const initialState = {
  isFetchingCategories: false,
  fetchCategoriesResponse: null,
  fetchCategoriesError: false,
  fetchCategoriesSuccess: false,
};

const updateGetCategory = state => updateStateUtility(
  state,
  { isFetchingCategories: true, fetchCategoriesError: false },
);

const updateGetCategorySuccess = (state, payload) => updateStateUtility(
  state,
  {
    isFetchingCategories: false,
    fetchCategoriesError: false,
    fetchCategoriesResponse: payload,
    fetchCategoriesSuccess: true,
  },
);

const updateGetCategoryFailure = (state, payload) => updateStateUtility(
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
      return updateGetCategory(state);
    case GET_CATEGORY_SUCCESS:
      return updateGetCategorySuccess(state, action.payload);
    case GET_CATEGORY_FAILURE:
      return updateGetCategoryFailure(state, action.payload);
    default:
      return state;
  }
};

export default categoryReducer;
