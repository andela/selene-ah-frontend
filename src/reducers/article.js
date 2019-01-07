import defaultState from '../defaultState';

const articles = (state = defaultState, action) => {
  if (action.type) return state;
};

export default articles;
