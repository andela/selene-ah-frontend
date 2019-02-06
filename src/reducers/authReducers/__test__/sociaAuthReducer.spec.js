import reducers from '../socialAuthReducer';
import * as actionTypes from '../../../actions/authAction/actionTypes';

describe('### Social Auth Reducers', () => {
  it('should return initial state if action is undefined', () => {
    expect(reducers({
      isAuthenticated: null,
      error: null,
      token: '',
    }, {})).toEqual({
      isAuthenticated: null,
      error: null,
      token: '',
    });
  });

  it('should return an updated state if googleAuthSuccess is called', () => {
    expect(reducers({
      isAuthenticated: null,
    }, {
      type: actionTypes.GOOGLE_AUTH_SUCCESS,
    })).toEqual({
      isAuthenticated: true,
    });
  });

  it('should return an updated state if google auth fail is called', () => {
    const response = {
      response: {
        data: {
          message: 'me',
        },
      },
    };
    expect(reducers(
      {
        isAuthenticated: null,
      }, {
        type: actionTypes.GOOGLE_AUTH_FAIL, payload: response,
      },
    )).toEqual(
      {
        isAuthenticated: false,
      },
    );
  });

  it('should return an updated state if facebookAuthSuccess is called', () => {
    expect(reducers({
      isAuthenticated: null,
    }, {
      type: actionTypes.FACEBOOK_AUTH_SUCCESS,
    })).toEqual({
      isAuthenticated: true,
    });
  });

  it('should return an updated state if Facebook auth fail is called', () => {
    const response = {
      response: {
        data: {
          message: 'me',
        },
      },
    };
    expect(reducers({
      isAuthenticated: null,
    }, { type: actionTypes.FACEBOOK_AUTH_FAIL, payload: response })).toEqual({
      isAuthenticated: false,
    });
  });

  it('should return an updated state if twitterAuthSuccess is called', () => {
    expect(reducers({
      isAuthenticated: null,
    }, {
      type: actionTypes.TWITTER_AUTH_SUCCESS,
    })).toEqual({
      isAuthenticated: true,
    });
  });

  it('should return an updated state if Twitter auth fail is called', () => {
    const response = {
      response: {
        data: {
          message: 'me',
        },
      },
    };
    expect(reducers({
      isAuthenticated: null,
    }, { type: actionTypes.TWITTER_AUTH_FAIL, payload: response })).toEqual({
      isAuthenticated: false,
    });
  });
});
