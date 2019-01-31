import * as type from '../../actions/Ratings/actionTypes';
import updateObject from '../../helpers/store/utility';

export const initialState = {
  isPostLoading: false,
  ratedArticle: {},
  postError: null,
  postSuccess: null,
};

const isPostRateLoadingState = { isPostLoading: true };

// eslint-disable-next-line max-len
const updatePostRatingSuccessState = (state, action) => updateObject(state, {
  isPostLoading: false,
  ratedArticle: action.payload,
  postSuccess: true,
});

// eslint-disable-next-line max-len
const updateFetchAverageRatingFailedState = (state, action) => updateObject(state, {
  isPostLoading: false,
  ratedArticle: action.payload,
  postError: true,
});

const postRating = (state = initialState, action) => {
  switch (action.type) {
    case type.RATE_ARTICLE_START:
      return updateObject(initialState, isPostRateLoadingState);

    case type.RATE_ARTICLE_FAILED:
      return updateFetchAverageRatingFailedState(state, action);

    case type.RATE_ARTICLE_SUCCESS:
      return updatePostRatingSuccessState(state, action);
    default:
      return state;
  }
};

export default postRating;
