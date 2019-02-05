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

const updateCreateArticle = state => updateStateUtility(
  state,
  { isCreatingArticle: true, createArticleError: false },
);

const updateCreateArticleSuccess = (state, payload) => updateStateUtility(
  state,
  {
    isCreatingArticle: false,
    createArticleError: false,
    createArticleResponse: payload,
    createArticleSuccess: true,
  },
);

const updateCreateArticleFailure = (state, payload) => updateStateUtility(
  state,
  {
    isCreatingArticle: false,
    createArticleError: true,
    createArticleResponse: payload,
  },
);

/** Updating articles */

const updateArticleReducer = state => updateStateUtility(
  state,
  {
    isUpdatingArticle: true,
    updateArticleError: false,
    updateArticleSuccess: false,
  },
);

const updateArticleSuccessReducer = (state, payload) => updateStateUtility(
  state,
  {
    isUpdatingArticle: false,
    updateArticleError: false,
    updateArticleResponse: payload,
    updateArticleSuccess: true,
  },
);

const updateArticleFailureReducer = (state, payload) => updateStateUtility(
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
      return updateCreateArticle(state);
    case CREATE_ARTICLE_SUCCESS:
      return updateCreateArticleSuccess(state, action.payload);
    case CREATE_ARTICLE_FAILURE:
      return updateCreateArticleFailure(state, action.payload);
    case UPDATE_ARTICLE:
      return updateArticleReducer(state, action.payload);
    case UPDATE_ARTICLE_SUCCESS:
      return updateArticleSuccessReducer(state, action.payload);
    case UPDATE_ARTICLE_FAILURE:
      return updateArticleFailureReducer(state, action.payload);
    default:
      return state;
  }
};

export default articleReducer;
