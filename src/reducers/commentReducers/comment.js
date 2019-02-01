import * as actionType from '../../actions/commentAction/commentType';
import updateObject from '../../helpers/store/utility';
import commentAuthor from '../../helpers/utilities/addCommentAuthor';


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

const getCommentSuccessState = (state, action) => updateObject(state, {
  isLoading: false,
  response: action.payload,
  success: true,
  postIsLoading: false,
  getSuccess: true,
});

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


const postCommentFailedState = (state, action) => updateObject(state, {
  isLoading: false,
  error: true,
  success: false,
  postResponse: action.payload,
  postIsLoading: false,
  getSuccess: true,
});

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
