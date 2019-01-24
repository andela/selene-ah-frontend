import updateStateUtility from '../../helpers/store/utility';
import {
  CREATE_ARTICLE,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILURE,
} from '../../actions/articles/articleActionTypes';

export const initialState = {
  isCreatingArticle: false,
  createArticleResponse: null,
  createArticleError: false,
  createArticleSuccess: false,
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

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ARTICLE:
      return updateCreateArticle(state);
    case CREATE_ARTICLE_SUCCESS:
      return updateCreateArticleSuccess(state, action.payload);
    case CREATE_ARTICLE_FAILURE:
      return updateCreateArticleFailure(state, action.payload);
    default:
      return state;
  }
};

export default articleReducer;
