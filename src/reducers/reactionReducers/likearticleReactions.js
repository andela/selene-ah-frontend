import * as actionTypes from '../../actions/reactionActions/actionTypes';
import updatedObject from '../../helpers/store/utility';

const initState = {
  success: false,
  error: false,
  response: null,
  loading: false,
  status: null,
};

/**
 * @description - Like article failure action - update the state when called
 * @param {object} state
 * @returns {object} - updated state
 */
const likeArticleFailure = (state, { payload, status }) => updatedObject(state,
  {
    error: true,
    response: payload,
    loading: false,
    status,
  });

/**
 * @description - Like article start action- update the state when called
 * @param {object} state
 * @returns {object} - updated state
 */
const likeArticleStart = state => updatedObject(state, {
  loading: true,
  error: false,
});

/**
 * @description - Like article success action - update the state when called
 * @param {object} state
 * @returns {object} - updated state
 */
const likeArticleSuccess = (state, { payload }) => updatedObject(state, {
  success: true,
  response: payload,
  loading: false,
});

const reducer = (state = initState, action) => {
  switch (action.type) {
  case actionTypes.LIKE_ARTICLE_START: return likeArticleStart(state);
  case actionTypes.LIKE_ARTICLE_FAILURE:
    return likeArticleFailure(state, action);
  case actionTypes.LIKE_ARTICLE_SUCCESS:
    return likeArticleSuccess(state, action);
  default: return state;
  }
};

export default reducer;
