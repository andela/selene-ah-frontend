import * as type from '../../../actions/articleAction/actionTypes';
import updateObject from '../../../helpers/store/utility';

export const initialState = {
  isFetchingArticle: false,
  error: null,
  success: null,
  response: null,
  isFetchingFollowers: false,
  followers: null,
};

/**
 * @description - Dispatches when fetching article start
 * @param {object} state
 * @returns {object} - An updated state
 */
const fetchingArticleStart = state => updateObject(
  state, {
    isFetchingArticle: true,
    error: false,
  },
);

/**
 * @description - Dispatches when unmount article is called
 * to set response to null
 * @param {object} state
 * @returns {object} - An updated state
 */
const unmountArticle = state => updateObject(
  state, {
    response: null,
  },
);

/**
 * @description - Dispatches when fetching articles fails
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const fetchArtcileFailed = (state, action) => updateObject(
  state, {
    response: action.payload,
    error: true,
    isFetchingArticle: false,
  },
);

/**
 * @description - Dispatches when article is fetched successfully
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const fetchArtcileSucess = (state, action) => updateObject(
  state, {
    response: action.payload,
    isFetchingArticle: false,
    success: true,
  },
);

/**
 * @description - Dispatches when fetch followers starts
 * @param {object} state
 * @returns {object} - An updated state
 */
const fetchFollowersStart = state => updateObject(
  state, { isFetchingFollowers: true },
);

/**
 * @description - Dispatches when followers is fetched successfully
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const fetchFollowersComplete = (state, action) => updateObject(
  state, { followers: action.payload, isFetchingFollowers: false },
);


const articleViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_ARTICLE_START:
      return fetchingArticleStart(state);
    case type.FETCH_ARTICLE_SUCCESS:
      return fetchArtcileSucess(state, action);
    case type.FETCH_ARTICLE_FAILED:
      return fetchArtcileFailed(state, action);
    case type.FETCH_FOLLOWERS_START: return fetchFollowersStart(state);
    case type.FETCH_FOLLOWERS_COMPLETE:
      return fetchFollowersComplete(state, action);
    case type.UNMOUNT_ARTICLE:
      return unmountArticle(state, action);
    default:
      return state;
  }
};

export default articleViewReducer;
