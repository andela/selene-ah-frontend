import * as actionTypes from '../../actions/authAction/actionTypes';
import updateObject from '../../helpers/store/utility';

const signUpStart = state => updateObject(state, { loading: true });

const initState = {
  isLoading: false,
  response: null,
  error: null,
  success: null,
};

const signUpFailure = (state, action) => {
  updateObject(state, {
    loading: false,
    error: true,
    response: action.payload,
  });
};

const signUpSuccess = (state, action) => updateObject(state, {
  loading: false,
  success: true,
  response: action.payload,
});
const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_START: return signUpStart(state);
    case actionTypes.SIGN_UP_FAILURE: return signUpFailure(state, action);
    case actionTypes.SIGN_UP_SUCCESS: return signUpSuccess(state, action);
    default: return state;
  }
};

export default reducer;
