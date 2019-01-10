import { combineReducers } from 'redux';
import signup from './authReducers/signup';
import login from './authReducers/login';

const rootReducer = combineReducers({
  signup,
  login,
});

export default rootReducer;
