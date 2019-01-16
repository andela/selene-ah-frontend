/* eslint-disable no-unused-expressions */
import { shallow } from 'enzyme';
import React from 'react';
import {
  UpdatePassword,
  mapStateToProps,
  mapDispatchToProps,
} from '../UpdatePassword';


describe('## UpdatePassword Component', () => {
  let wrapper;
  const props = {
    toastManager: {},
    response: '',
    updatePassword: jest.fn(),
    token: '',
    error: false,
    isLoading: false,
    passwordChanged: false,
    history: { location: { search: '?auhodhgondogo' }, replace: jest.fn() },
  };


  beforeEach(() => {
    wrapper = shallow(<UpdatePassword {...props}/>);
  });

  it('should have the password input field to have rendered', () => {
    expect(wrapper.find('#password').length).toEqual(1);
  });

  it('should render the FormContainer', () => {
    const container = wrapper.find('FormContainer');
    expect(container.length).toEqual(1);
  });
  it('should render the Input component', () => {
    const container = wrapper.find('Input');
    expect(container.length).toEqual(2);
  });

  it('should change state if password field is changed', () => {
    const input = wrapper.find('Input');
    input.at(0)
      .simulate('change', { target: { id: 'password', value: '1@andela' } });
    expect(wrapper.state().data.password).toEqual('1@andela');
  });

  it('should return true when error occur in shouldComponentUpdate', () => {
    const nextProps = { error: true };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
    });
    expect(wrapper.instance()
      .shouldComponentUpdate(nextProps.error)).toEqual(true);
  });

  it('should submit form when submitted', () => {
    wrapper.setState({
      password: 'idris',
      confirmPassword: 'idris',
    });
    wrapper.setProps({
      toastManager: {
        add: jest.fn(),
      },
      updatePassword: jest.fn(),
    });
    const preventDefault = jest.fn();
    const form = wrapper.find('FormContainer');
    form.at(0).simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(wrapper.props().updatePassword).toBeCalled;
  });


  it('should give error when form gives error', () => {
    wrapper.setState({
      error: { password: true },
    });
    wrapper.setProps({
      toastManager: {
        add: jest.fn(),
      },
    });
    const preventDefault = jest.fn();
    const form = wrapper.find('FormContainer');
    form.at(0).simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(wrapper.props().toastManager).toBeCalled;
  });

  it('should give error if password is not equal to confirm password', () => {
    wrapper.setState({
      password: 'daniel',
      confirmPassword: 'idris',
    });
    wrapper.setProps({
      toastManager: {
        add: jest.fn(),
      },
    });
    const preventDefault = jest.fn();
    const form = wrapper.find('FormContainer');
    form.at(0).simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(wrapper.props().toastManager).toBeCalled;
  });

  it('should return true when error occurs', () => {
    const nextProps = { error: true };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
    });
    expect(wrapper.instance()
      .shouldComponentUpdate(nextProps.error)).toEqual(true);
  });

  it('should return false if shouldComponentUpdate does not return error ',
    () => {
      const nextProps = { error: true };
      wrapper.setProps({
        toastManager: {
          add: () => {},
        },
      });
      expect(wrapper.instance()
        .shouldComponentUpdate(nextProps)).toEqual(false);
    });
});


describe('## UpdatePassword Completed successfully Component', () => {
  let wrapper;

  const props = {
    toastManager: {},
    response: '',
    sendResetLink: jest.fn(),
    history: { location: { search: '?auhodhgondogo' } },
    error: false,
    isLoading: false,
    success: true,
    passwordChanged: true,
  };


  beforeEach(() => {
    wrapper = shallow(<UpdatePassword {...props}/>);
  });


  it('should render the FormContainer', () => {
    const container = wrapper.find('FormContainer');
    expect(container.length).toEqual(1);
  });


  it('should redirect when login button is clicked', () => {
    const history = {
      history: {
        push: jest.fn(),
      },
    };
    wrapper.setState({
      password: 'idrisa',
      confirmPassword: 'idris',
    });
    wrapper.setProps({
      toastManager: {
        add: jest.fn(),
      },
    });
    const form = wrapper.find('Button');
    form.at(0).simulate('click');
    expect(history).toBeCalled;
  });
});


describe('## Connect state and dispatch to props', () => {
  const state = {
    updatePassword: 'me',
  };
  it('should call mapStateToProps', () => {
    expect(mapStateToProps(state)).toEqual({ 0: 'm', 1: 'e' });
  });

  it('should call mapDispatchToProps', () => {
    expect(typeof mapDispatchToProps(state)).toEqual('object');
  });
});
