import * as actionTypes from '../../actions/userAction/actionTypes';
import updateObject from '../../helpers/store/utility';

export const initialState = {
  isLoading: false,
  response: null,
  error: null,
  success: null,
  isProfileUpdate: null,
  userData: null,
  articleData: null,
  showArticle: null,
  articleResponse: null,
};

/**
 * @description - userProfile start - update the state when called
 * @param {object} state
 * @returns {object} - updated state
 */
const userProfileStart = state => updateObject(state,
  { isLoading: true, error: false });

/**
 * @description - userProfile  failure - update the state when called
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
const userProfileFail = (state, action) => updateObject(state, {
  isLoading: false,
  error: true,
  response: action.payload.response.data.message,
});

/**
 * @description - userProfile success - update the state when called
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
const userProfileSuccess = (state, action) => updateObject(state, {
  isLoading: false,
  success: true,
  response: action.payload,
  userData: action.payload.userProfile,
});


/**
 * @description - updateProfile start - update the state when called
 * @param {object} state
 * @returns {object} - updated state
 */
const updateProfileStart = state => updateObject(state,
  { isLoading: true, error: false });

/**
 * @description - updateProfile failure - update the state when called
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
const updateProfileFail = (state, action) => updateObject(state, {
  isLoading: false,
  error: true,
  response: action.payload.response.data.message,
});

/**
 * @description - updateProfile success - update the state when called
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
const updateProfileSuccess = (state, action) => updateObject(state, {
  isLoading: false,
  success: true,
  isProfileUpdate: true,
  response: action.payload,
  userData: action.profileData,
});

/**
 * @description - getArticle start - update the state when called
 * @param {object} state
 * @returns {object} - updated state
 */
const getArticleStart = state => updateObject(state,
  { isLoading: true, error: false });

/**
 * @description - getArticle failure - update the state when called
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
const getArticleFail = (state, action) => updateObject(state, {
  isLoading: false,
  error: true,
  articleResponse: action.payload.response.data.message,
});

/**
 * @description - getArticle success - update the state when called
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
const getArticleSuccess = (state, action) => updateObject(state, {
  isLoading: false,
  success: true,
  showArticle: true,
  articleData: action.payload.articles,
});
const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.GET_PROFILE_START:
    return userProfileStart(state);
  case actionTypes.GET_PROFILE_SUCCESS:
    return userProfileSuccess(state, action);
  case actionTypes.GET_PROFILE_FAIL:
    return userProfileFail(state, action);

  case actionTypes.UPDATE_PROFILE_START:
    return updateProfileStart(state);
  case actionTypes.UPDATE_PROFILE_SUCCESS:
    return updateProfileSuccess(state, action);
  case actionTypes.UPDATE_PROFILE_FAIL:
    return updateProfileFail(state, action);

  case actionTypes.GET_ARTICLE_START:
    return getArticleStart(state);
  case actionTypes.GET_ARTICLE_SUCCESS:
    return getArticleSuccess(state, action);
  case actionTypes.GET_ARTICLE_FAIL:
    return getArticleFail(state, action);
  default:
    return state;
  }
};

export default reducer;
