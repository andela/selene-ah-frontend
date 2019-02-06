import updateStateUtility from '../../helpers/store/utility';
import {
  CREATE_ARTICLE,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILURE,
  UPDATE_ARTICLE,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_FAILURE,
} from '../../actions/articles/actionTypes';


export const initialState = {
  isCreatingArticle: false,
  createArticleResponse: null,
  createArticleError: false,
  createArticleSuccess: false,
  isUpdatingArticle: false,
  updateArticleResponse: null,
  updateArticleError: false,
  updateArticleSuccess: false,
};

/**
 * @description - Dispatches when articleCreate starts
 * @param {object} state
 * @returns {object} - An updated state
 */
const createArticle = state => updateStateUtility(
  state,
  { isCreatingArticle: true, createArticleError: false },
);

/**
 * @description - Dispatches when article is created successfully
 * @param {object} state
 * @param {object} payload
 * @returns {object} - An updated state
 */
const createArticleSuccess = (state, payload) => updateStateUtility(
  state,
  {
    isCreatingArticle: false,
    createArticleError: false,
    createArticleResponse: payload,
    createArticleSuccess: true,
  },
);

/**
 * @description - Dispatches when there is an error in creating article
 * @param {object} state
 * @param {object} payload
 * @returns {object} - An updated state
 */
const createArticleFailure = (state, payload) => updateStateUtility(
  state,
  {
    isCreatingArticle: false,
    createArticleError: true,
    createArticleResponse: payload,
  },
);

/**
 * @description - Dispatches when updateArticle start
 * @param {object} state
 * @returns {object} - An updated state
 */
const updateArticle = state => updateStateUtility(
  state,
  {
    isUpdatingArticle: true,
    updateArticleError: false,
    updateArticleSuccess: false,
  },
);

/**
 * @description - Dispatches when article is updated successfully
 * @param {object} state
 * @param {object} payload
 * @returns {object} - An updated state
 */
const updateArticleSuccess = (state, payload) => updateStateUtility(
  state,
  {
    isUpdatingArticle: false,
    updateArticleError: false,
    updateArticleResponse: payload,
    updateArticleSuccess: true,
  },
);

/**
 * @description - Dispatches when there is an error in updating article
 * @param {object} state
 * @param {object} payload
 * @returns {object} - An updated state
 */
const updateArticleFailure = (state, payload) => updateStateUtility(
  state,
  {
    isUpdatingArticle: false,
    updateArticleError: true,
    updateArticleResponse: payload,
  },
);

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ARTICLE:
      return createArticle(state);
    case CREATE_ARTICLE_SUCCESS:
      return createArticleSuccess(state, action.payload);
    case CREATE_ARTICLE_FAILURE:
      return createArticleFailure(state, action.payload);
    case UPDATE_ARTICLE:
      return updateArticle(state, action.payload);
    case UPDATE_ARTICLE_SUCCESS:
      return updateArticleSuccess(state, action.payload);
    case UPDATE_ARTICLE_FAILURE:
      return updateArticleFailure(state, action.payload);
    default:
      return state;
  }
};

export default articleReducer;
