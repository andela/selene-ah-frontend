import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';
import defaultState from './defaultState';


const middleware = [thunk];

const store = createStore(
  rootReducer,
  defaultState,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);

export default store;
