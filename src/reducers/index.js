import { combineReducers } from 'redux';
import signup from './authReducers/signup';
import login from './authReducers/login';
import socialAuthReducer from './authReducers/socialAuthReducer';
import resetPassword from './authReducers/resetPassword';
import updatePassword from './authReducers/updatePassword';
import articleViewReducer from './articleViewReducer/articleView';
import articlesResponse from './authReducers/home';

const rootReducer = combineReducers({
  signup,
  login,
  socialAuthReducer,
  resetPassword,
  updatePassword,
  articleViewReducer,
  articlesResponse,
});

export default rootReducer;
