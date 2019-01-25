/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import { shallow } from 'enzyme';
import React from 'react';
import { VerifyAuth, mapStateToProps, mapDispatchToProps } from '../VerifyAuth';

describe('## Signup Component', () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
      isAuthenticated: true,
      history: {
        location: {
          pathname: '/',
          search: '?code=AQAPIlsvSDwnrFLR2dVc34scL5kf2Ijmm5zYOo',
        },
      },
      socialAuth: jest.fn(),
    };
    wrapper = shallow(<VerifyAuth {...props} />);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should redirect to home if authenticate is true', () => {
    const redirect = wrapper.find('Fragment');
    expect(redirect.length).toEqual(1);
  });
  it('should redirect to home if authenticate is true', () => {
    wrapper.props({
      isAuthenticated: false,
    });
    const redirect = wrapper.find('Redirect');
    expect(redirect.length).toEqual(1);
  });

  it('should call componentDidMount for facebook auth', () => {
    const spy = jest.spyOn(props, 'socialAuth');
    wrapper.setProps({
      history: {
        location: {
          pathname: '/auth/facebook',
          search: '?code=AQAPIlsvsv',
        },
      },
    });
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
  it('should call componentDidMount for google auth', () => {
    const spy = jest.spyOn(props, 'socialAuth');
    wrapper.setProps({
      history: {
        location: {
          pathname: '/auth/google',
          search: '?code=AQAPIlsvsv',
        },
      },
    });
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('should call componentDidMount for twitter auth', () => {
    const spy = jest.spyOn(props, 'socialAuth');
    wrapper.setProps({
      history: {
        location: {
          pathname: '/auth/twitter',
          search: '?code=AQAPIlsvsv',
        },
      },
    });
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('should return null for getBaseUrl', () => {
    expect(wrapper.instance().getBaseUrl('fake')).toEqual(null);
  });
});

describe('## VerifyAuth Dispatch functions', () => {
  const state = {
    socialAuthReducer: {},
  };

  it('should be dispatch props', () => {
    expect(typeof mapDispatchToProps(state)).toEqual('object');
  });

  it('should be map state to props', () => {
    expect(mapStateToProps(state)).toEqual({
      ...state.socialAuthReducer,
    });
  });
});
