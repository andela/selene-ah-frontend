import * as actionTypes from './actionTypes';


const increment = index => ({
  type: actionTypes.INCREMENT_LIKES,
  index,
});

const decrement = index => ({
  type: actionTypes.DECREMENT_LIKES,
  index,
});

export { increment, decrement };
