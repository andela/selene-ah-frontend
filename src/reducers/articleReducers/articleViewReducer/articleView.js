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

const fetchingArticleStart = state => updateObject(
  state, {
    isFetchingArticle: true,
    error: false,
  },
);

const unmountArticle = state => updateObject(
  state, {
    response: null,
  },
);

const fetchArtcileFailed = (state, action) => updateObject(
  state, {
    response: action.payload,
    error: true,
    isFetchingArticle: false,
  },
);

const fetchArtcileSucess = (state, action) => updateObject(
  state, {
    response: action.payload,
    isFetchingArticle: false,
    success: true,
  },
);

const fetchFollowersStart = state => updateObject(
  state, { isFetchingFollowers: true },
);

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
