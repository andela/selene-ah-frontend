import * as type from '../../actions/articleAction/actionTypes';
import updateObject from '../../helpers/store/utility';

export const initialState = {
  isFetchingArticle: false,
  error: null,
  success: null,
  response: null,
};

const fetchingArticleState = { isFetchingArticle: true };

const articleViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_ARTICLE_START:
      return updateObject(initialState, fetchingArticleState);
    case type.FETCH_ARTICLE_SUCCESS:
      return updateObject(initialState, {
        response: action.payload,
        isFetchingArticle: false,
        success: true,
      });
    case type.FETCH_ARTICLE_FAILED:
      return updateObject(initialState, {
        response: action.payload,
        error: true,
        success: false,
        isFetchingArticle: false,
      });
    default:
      return state;
  }
};

export default articleViewReducer;
