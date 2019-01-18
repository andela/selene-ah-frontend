/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';
import moxios from 'moxios';
import { Login, mapDispatchToProps, mapStateToProps } from '../Login';
import loginImage from '../../../../assets/images/illustration_1.svg';
import { Button } from '../../../../components/utilities';

const url = `${process.env.SERVER_API}/auth/signin`;

describe('Login container', () => {
  let wrapper;
  let preventDefaultSpy;
  let toastManagerSpy;

  const props = {
    toastManager: {},
    loginDispatcher: jest.fn(),
    error: false,
    errorMessage: null,
    successMessage: null,
    isLoading: false,
    isAuthenticated: null,
    imageUrl: loginImage,
    classes: 'google-btn',
    loginError: false,
  };

  beforeEach(() => {
    moxios.install();
    preventDefaultSpy = jest.fn();
    toastManagerSpy = jest.fn();
    wrapper = shallow(<Login {...props}/>);
  });

  afterEach(() => {
    moxios.uninstall();
    jest.restoreAllMocks();
  });

  it('should have the email input field to have rendered', () => {
    expect(wrapper.find('#email').length).toEqual(1);
  });

  it('should have the password input field to have rendered', () => {
    expect(wrapper.find('#password').length).toEqual(1);
  });

  it('should have the email button field to have rendered', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('should hid button when isLoading is true', () => {
    wrapper.setProps({ isLoading: true });
    expect(wrapper.find(Button).length).toEqual(0);
  });

  it('should call the handleChange when email input changes', () => {
    wrapper.find('#email').simulate('change', {
      preventDefault: preventDefaultSpy,
      target: {
        id: 'email',
      },
    });
    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should call the handleChange when password input changes', () => {
    wrapper.find('#password').simulate('change', {
      preventDefault: preventDefaultSpy,
      target: {
        id: 'pasword',
      },
    });
    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should call the toastManager function when invalid form is submitted', () => {
    wrapper.setState({ error: { 1: 'kdak' } });
    wrapper.setProps({
      toastManager: {
        add: toastManagerSpy,
      },
    });
    wrapper.find('FormContainer').simulate('submit', {
      preventDefault: preventDefaultSpy,
    });
    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(toastManagerSpy).toHaveBeenCalled();
  });

  it('should call the loginDispatcher function when form is submitted', () => {
    wrapper.setState({ error: {} });
    wrapper.find('FormContainer').simulate('submit', {
      preventDefault: preventDefaultSpy,
    });
    const mockResponse = {
      message: 'success',
      token: 'kjdjadha',
    };
    moxios.stubRequest(url, { status: 200, response: mockResponse });
    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(toastManagerSpy).not.toHaveBeenCalled();
  });

  it('should return true when no errors', () => {
    const nextProps = { loginError: true, errorMessage: false };
    wrapper.setProps({
      loginError: false,
      toastManager: {
        add: toastManagerSpy,
      },
    });
    expect(
      wrapper.instance().shouldComponentUpdate(nextProps),
    ).toEqual(true);
  });

  it('should return true when unauthenticated', () => {
    wrapper.setProps({
      isAuthenticated: false,
      toastManager: {
        add: toastManagerSpy,
      },
    });
    wrapper.instance().componentDidMount();
    expect(toastManagerSpy).toHaveBeenCalled();
  });

  it('should return false when errors occur', () => {
    const nextProps = { error: true, errorMessage: 'dja' };
    wrapper.setProps({
      loginError: false,
      toastManager: {
        add: toastManagerSpy,
      },
    });
    expect(
      wrapper.instance().shouldComponentUpdate(nextProps),
    ).toEqual(false);
  });

  it('should return updated props', () => {
    const state = {
      login: { 1: 'kd' },
    };

    expect(
      mapStateToProps(state),
    ).toEqual(state.login);
  });

  it('should return updated props', () => {
    const dispatch = jest.fn();

    expect(
      typeof mapDispatchToProps(dispatch),
    ).toEqual('object');
  });
});
