import { combineReducers } from 'redux';
import signup from './authReducers/signup';
import login from './authReducers/login';
import socialAuthReducer from './authReducers/socialAuthReducer';
import resetPassword from './authReducers/resetPassword';
import updatePassword from './authReducers/updatePassword';
import likeArticleReducer from './reactionReducers/likearticleReactions';
import articleViewReducer
  from './articleReducers/articleViewReducer/articleView';
import articlesResponse from './homeReducers/home';
import articleReducers from './articleReducers/articleReducers';
import categoryReducer from './articleReducers/categoryReducer';
import imageUploadReducers from './articleReducers/imageUploadReducers';
import profile from './userProfileReducers/Profile';
import follow from './reactionReducers/follow';
import commentReducers from './commentReducers/comment';
import fetchAverageRating from './ratingsReducer/fetchAveargeRatings';
import postRating from './ratingsReducer/postRatings';
import fetchUserRatings from './ratingsReducer/fetchUserRatings';
import statistics from './userProfileReducers/Statistics';

const rootReducer = combineReducers({
  signup,
  login,
  socialAuthReducer,
  resetPassword,
  updatePassword,
  likeArticleReducer,
  articleViewReducer,
  articlesResponse,
  articleReducers,
  categoryReducer,
  imageUploadReducers,
  profile,
  follow,
  commentReducers,
  fetchAverageRating,
  postRating,
  fetchUserRatings,
  statistics,
});

export default rootReducer;
