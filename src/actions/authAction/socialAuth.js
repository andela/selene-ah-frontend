import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authSuccess = (authType, newUser) => {
  switch (authType.toUpperCase()) {
    case 'GOOGLE':
      return ({
        type: actionTypes.GOOGLE_AUTH_SUCCESS,
        newUser,
      });
    case 'FACEBOOK':
      return ({
        type: actionTypes.FACEBOOK_AUTH_SUCCESS,
        newUser,
      });

    case 'TWITTER':
      return ({
        type: actionTypes.TWITTER_AUTH_SUCCESS,
        newUser,
      });
    default: return null;
  }
};

const getSocialAuthAction = (authType) => {
  switch (authType.toUpperCase()) {
    case 'GOOGLE':
      return actionTypes.GOOGLE_AUTH_FAIL;
    case 'FACEBOOK':
      return actionTypes.FACEBOOK_AUTH_FAIL;
    case 'TWITTER':
      return actionTypes.TWITTER_AUTH_FAIL;
    default:
      return null;
  }
};

export const authFail = (error, authType) => ({
  type: getSocialAuthAction(authType),
  payload: error,
});


export
const socialAuth = (baseAPI, socialToken, authType) => async (dispatch) => {
  const url = `${baseAPI}${socialToken}`;
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      const newUser = false;
      localStorage.setItem('AuthorHavenToken', response.data.token);
      return dispatch(authSuccess(authType, newUser));
    }
    if (response.status === 201) {
      const newUser = true;
      localStorage.setItem('AuthorHavenToken', response.data.token);
      return dispatch(authSuccess(authType, newUser));
    }
  } catch (error) {
    dispatch(authFail(error, authType));
  }
};
