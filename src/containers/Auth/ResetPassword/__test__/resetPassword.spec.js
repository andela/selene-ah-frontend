/* eslint-disable no-unused-expressions */
import { shallow } from 'enzyme';
import React from 'react';
import {
  ResetPassword,
  mapStateToProps,
  mapDispatchToProps,
} from '../ResetPassword';


describe('## ResetPassword Component', () => {
  let wrapper;

  const props = {
    toastManager: {},
    response: '',
    sendResetLink: jest.fn(),
    error: false,
    isLoading: false,
    passwordChanged: false,
  };


  beforeEach(() => {
    wrapper = shallow(<ResetPassword {...props}/>);
  });

  it('should have the email input field', () => {
    expect(wrapper.find('#email').length).toEqual(1);
  });

  it('should render the FormContainer', () => {
    const container = wrapper.find('FormContainer');
    expect(container.length).toEqual(1);
  });
  it('should render the Input component', () => {
    const container = wrapper.find('Input');
    expect(container.length).toEqual(1);
  });

  it('should change state when email field is changed', () => {
    const input = wrapper.find('Input');
    input.at(0)
      .simulate('change', { target: { id: 'email', value: 'iss@yahoo.com' } });
    expect(wrapper.state().email).toEqual('iss@yahoo.com');
  });

  it('should return true when shouldComponentUpdate returns true', () => {
    const nextProps = { error: true };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
    });
    expect(wrapper.instance()
      .shouldComponentUpdate(nextProps.error)).toEqual(true);
  });

  it('should return false when shouldComponentUpdate return false', () => {
    const nextProps = { error: true };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
    });
    expect(wrapper.instance().shouldComponentUpdate(nextProps)).toEqual(false);
  });

  it('should submit when form is submitted', () => {
    wrapper.setProps({
      toastManager: {
        add: jest.fn(),
      },
      sendResetLink: jest.fn(),
    });
    const preventDefault = jest.fn();
    const form = wrapper.find('FormContainer');
    form.at(0).simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(wrapper.props().sendResetLink).toBeCalled;
  });
});


describe('## ResetPassword successful Component', () => {
  let wrapper;

  const props = {
    toastManager: {},
    response: '',
    sendResetLink: jest.fn(),
    error: false,
    isLoading: false,
    success: true,
  };


  beforeEach(() => {
    wrapper = shallow(<ResetPassword {...props}/>);
  });


  it('should render the FormContainer', () => {
    const container = wrapper.find('FormContainer');
    expect(container.length).toEqual(1);
  });
});

describe('## Connect the state and dispatch to props', () => {
  const state = {
    resetPassword: 'id',
  };
  it('should call mapStateToProps', () => {
    expect(mapStateToProps(state)).toEqual({ 0: 'i', 1: 'd' });
  });

  it('should call mapDispatchToProps', () => {
    expect(typeof mapDispatchToProps(state)).toEqual('object');
  });
});
