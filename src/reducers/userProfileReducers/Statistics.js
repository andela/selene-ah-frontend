import * as actionsTypes from '../../actions/userStat/actionTypes';
import updateObject from '../../helpers/store/utility';

export const initialState = {
  statError: null,
  userArticleStat: null,
  commentStat: null,
  bookmarkStat: null,
  noUserFollowerStat: null,
  userArticleLike: null,
  usersYouAreFollowing: null,
  fetchingData: false,
};

/**
 * @description - Dispatches when userstats fail
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
const userStatFail = (state, action) => (
  updateObject(state, {
    statError: true,
    errorMessage: action.error,
  })
);

/**
 * @description - Dispatches when user article stats is gotten successfully
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
const userArticleStatSuccess = (state, action) => (
  updateObject(state, {
    userArticleStat: action.payload,
  })
);

/**
 * @description - Dispatches when user comment stats is gotten successfully
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
const userCommentStatSuccess = (state, action) => (
  updateObject(state, {
    commentStat: action.payload,
  })
);

/**
 * @description - Dispatches when user bookmark stats is gotten successfully
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
const userBookmarkStatSuccess = (state, action) => (
  updateObject(state, {
    bookmarkStat: action.payload,
  })
);

/**
 * @description - Dispatches when user followers stats is gotten successfully
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
const userFollowerStatSuccess = (state, action) => (
  updateObject(state, {
    noUserFollowerStat: action.payload,
  })
);

/**
 * @description - Dispatches when user following stats is gotten successfully
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
const usersYouFollowSuccess = (state, action) => (
  updateObject(state, {
    usersYouAreFollowing: action.payload,
  })
);

/**
 * @description - Dispatches when user like stats is gotten successfully
 * @param {object} state
 * @param {object} action
 * @returns {object} - updated state
 */
const userArticleLikeSuccess = (state, action) => (
  updateObject(state, {
    userArticleLike: action.payload,
  })
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.GET_FOLLOWERS_FAILURE:
      return userStatFail(state, action);
    case actionsTypes.GET_LIKED_ARTICLES_FAILURE:
      return userStatFail(state, action);
    case actionsTypes.GET_BOOKMARK_FAILURE:
      return userStatFail(state, action);
    case actionsTypes.GET_ARTICLES_STAT_FAILURE:
      return userStatFail(state, action);
    case actionsTypes.FOLLOWING_OTHERS_STAT_FAILURE:
      return userStatFail(state, action);
    case actionsTypes.GET_COMMENT_STAT_FAILURE:
      return userStatFail(state, action);
    case actionsTypes.GET_FOLLOWERS_SUCCESS:
      return userFollowerStatSuccess(state, action);
    case actionsTypes.FOLLOWING_OTHERS_STAT_SUCCESS:
      return usersYouFollowSuccess(state, action);
    case actionsTypes.GET_LIKED_ARTICLES_SUCCESS:
      return userArticleLikeSuccess(state, action);
    case actionsTypes.GET_BOOKMARK_SUCCESS:
      return userBookmarkStatSuccess(state, action);
    case actionsTypes.GET_ARTICLES_STAT_SUCCESS:
      return userArticleStatSuccess(state, action);
    case actionsTypes.GET_COMMENT_STAT_SUCCESS:
      return userCommentStatSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
