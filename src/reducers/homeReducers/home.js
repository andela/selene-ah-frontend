import * as actionType from '../../actions/authAction/actionTypes';
import updateObject from '../../helpers/store/utility';

export const initialState = {
  isLoading: false,
  articlesResponse: {},
  error: null,
  success: null,
};

const isHomeLoadingState = { isLoading: true };

const updateFetchArticlesSuccessState = (state, action) => updateObject(state, {
  isLoading: false,
  articlesResponse: action.payload,
  success: true,
});

const updateFetchArticleFailedState = (state, action) => updateObject(state, {
  isLoading: false,
  error: true,
  articlesResponse: action.payload,
});

const fetchArticles = (state = initialState, action) => {
  switch (action.type) {
  case actionType.FECTH_ARTICLES_START:
    return updateObject(initialState, isHomeLoadingState);

  case actionType.FECTH_ARTICLES_FAILED:
    return updateFetchArticleFailedState(state, action);

  case actionType.FECTH_ARTICLES_SUCCESS:
    return updateFetchArticlesSuccessState(state, action);

  default:
    return state;
  }
};

export default fetchArticles;
