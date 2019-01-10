import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const createStore = configureStore(middlewares);

const store = createStore({});

export default store;
