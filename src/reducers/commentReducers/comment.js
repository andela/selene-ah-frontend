import * as actionType from '../../actions/commentAction/actionTypes';
import updateObject from '../../helpers/store/utility';
import commentAuthor from '../../helpers/addCommentAuthor';


const initialState = {
  isLoading: false,
  response: null,
  error: null,
  success: null,
  postIsLoading: false,
  getSuccess: null,
};

const getCommentStartState = {
  isLoading: true,
  error: false,
};

/**
 * @description - Dispatches when comment is fetched successfully
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const getCommentSuccessState = (state, action) => updateObject(state, {
  isLoading: false,
  response: action.payload,
  success: true,
  postIsLoading: false,
  getSuccess: true,
});

/**
 * @description - Dispatches when getComment fails
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const getCommentFailedState = (state, action) => updateObject(state, {
  isLoading: false,
  error: true,
  response: action.payload,
  success: false,
  postIsLoading: false,
  getSuccess: false,
});

const postCommentStartState = {
  postIsLoading: true,
  error: false,
};

/**
 * @description - Dispatches when comment fail to post
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const postCommentFailedState = (state, action) => updateObject(state, {
  isLoading: false,
  error: true,
  success: false,
  postResponse: action.payload,
  postIsLoading: false,
  getSuccess: true,
});

/**
 * @description - Dispatches when comment is posted successfully
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const postCommentSuccessState = (state, action) => updateObject(state, {
  isLoading: false,
  response: [
    commentAuthor(action.payload, action.userDetails),
    ...(state.response ? [...state.response] : []),
  ],
  success: true,
  postIsLoading: false,
  getSuccess: true,
});


const commentReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_COMMENT_START:
      return updateObject(state, getCommentStartState);

    case actionType.GET_COMMENT_FAIL:
      return getCommentFailedState(state, action);

    case actionType.GET_COMMENT_SUCCESS:
      return getCommentSuccessState(state, action);

    case actionType.POST_COMMENT_START:
      return updateObject(state, postCommentStartState);

    case actionType.POST_COMMENT_SUCCESS:
      return postCommentSuccessState(state, action);

    case actionType.POST_COMMENT_FAIL:
      return postCommentFailedState(state, action);

    default:
      return state;
  }
};


export default commentReducers;
