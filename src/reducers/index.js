import { combineReducers } from 'redux';
import signup from './authReducers/signup';
import login from './authReducers/login';
import socialAuthReducer from './authReducers/socialAuthReducer';
import resetPassword from './authReducers/resetPassword';
import updatePassword from './authReducers/updatePassword';
import likeArticleReducer from './reactionReducers/likearticleReactions';
import articleViewReducer from './articleViewReducer/articleView';
import articlesResponse from './authReducers/home';
import articleReducers from './articleReducers/articleReducers';
import categoryReducer from './articleReducers/categoryReducer';
import imageUploadReducers from './articleReducers/imageUploadReducers';
import profile from './userProfileReducers/Profile';

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
});

export default rootReducer;
