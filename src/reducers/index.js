import { combineReducers } from 'redux';
import signup from './authReducers/signup';
import login from './authReducers/login';
import socialAuthReducer from './authReducers/socialAuthReducer';

const rootReducer = combineReducers({
  signup,
  login,
  socialAuthReducer,
});

export default rootReducer;
