import { combineReducers } from 'redux';
import signup from './authReducers/signup';
import login from './authReducers/login';
import socialAuthReducer from './authReducers/socialAuthReducer';
import resetPassword from './authReducers/resetPassword';
import updatePassword from './authReducers/updatePassword';

const rootReducer = combineReducers({
  signup,
  login,
  socialAuthReducer,
  resetPassword,
  updatePassword,
});

export default rootReducer;
