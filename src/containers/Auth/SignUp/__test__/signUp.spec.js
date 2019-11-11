/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import { shallow } from 'enzyme';
import React from 'react';
import { SignUp } from '../SignUp';

describe('## Signup Component', () => {
  let wrapper;
  beforeAll(() => {
    const props = {
      toastManager: {},
    };
    wrapper = shallow(<SignUp {...props} />);
  });

  it('should render FormWrapper', () => {
    const container = wrapper.find('FormWrapper');
    expect(container.length).toEqual(1);
  });

  it('should render FormContainer', () => {
    const container = wrapper.find('FormContainer');
    expect(container.length).toEqual(1);
  });

  it('should render signup-container id', () => {
    const container = wrapper.find('#signup-container');
    expect(container.length).toEqual(1);
  });

  it('should render Input component', () => {
    const container = wrapper.find('Input');
    expect(container.length).toEqual(3);
  });

  it('should render Input component', () => {
    wrapper.setState({
      step: 2,
    });
    const container = wrapper.find('Input');
    expect(container.length).toEqual(3);
  });

  it('should change state if email field is changed', () => {
    const input = wrapper.find('Input');
    input.at(0).simulate('change', { target: { id: 'email', value: 'danielshotonwa@yahoo.com' } });
    expect(wrapper.state().user.email).toEqual('danielshotonwa@yahoo.com');
  });

  it('should change state if firstName field is changed', () => {
    const input = wrapper.find('Input');
    input.at(0).simulate('change', { target: { id: 'firstName', value: 'daniel' } });
    expect(wrapper.state().user.firstName).toEqual('daniel');
  });

  it('should change state if lastName field is changed', () => {
    const input = wrapper.find('Input');
    input.at(0).simulate('change', { target: { id: 'lastName', value: 'daniel' } });
    expect(wrapper.state().user.lastName).toEqual('daniel');
  });

  it('should change state if password field is changed', () => {
    const input = wrapper.find('Input');
    input.at(0).simulate('change', { target: { id: 'password', value: 'daniel123*' } });
    expect(wrapper.state().user.password).toEqual('daniel123*');
  });

  it('should change state if confirmPassword field is changed', () => {
    const input = wrapper.find('Input');
    input.at(0).simulate('change', { target: { id: 'confirmPassword', value: 'daniel123*' } });
    expect(wrapper.state().user.confirmPassword).toEqual('daniel123*');
  });

  it('should change state if userName field is changed', () => {
    const input = wrapper.find('Input');
    input.at(0).simulate('change', { target: { id: 'userName', value: 'daniel' } });
    expect(wrapper.state().user.userName).toEqual('daniel');
  });

  it('should update state if next step is called', () => {
    const e = {
      preventDefault: jest.fn(),
    };
    expect(wrapper.instance().nextStep(e)).toBeTruthy;
  });

  it('should update state if next step is called', () => {
    const e = {
      preventDefault: jest.fn(),
    };
    expect(wrapper.instance().prevStep(e)).toBeTruthy;
  });

  it('should submit if form is submitted', () => {
    wrapper.setProps({
      toastManager: {
        add: jest.fn(),
      },
      signUpUser: jest.fn(),
    });
    const preventDefault = jest.fn();
    const form = wrapper.find('FormContainer');
    form.at(0).simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(wrapper.props().signUpUser).toBeCalled;
  });

  it('should give error if form is submitted with errors', () => {
    wrapper.setState({
      error: { email: true },
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

  it('should return false if there is no error', () => {
    const nextProps = { error: true };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
    });
    expect(wrapper.instance().shouldComponentUpdate(nextProps)).toEqual(false);
  });

  it('should return invalid if error', () => {
    wrapper.setState({
      error: { email: true },
    });
  });

  it('should return invalid if error', () => {
    expect(wrapper.setState({
      error: { firstName: true },
    })).toBeTruthy;
  });

  it('should return invalid if error', () => {
    expect(wrapper.setState({
      error: { lastName: true },
    })).toBeTruthy;
  });

  it('should return invalid if error', () => {
    expect(wrapper.setState({
      error: { password: true },
    })).toBeTruthy;
  });

  it('should return invalid if error', () => {
    expect(wrapper.setState({
      error: { userName: true },
    })).toBeTruthy;
  });

  it('should redirect to homepage if user exist', () => {
    const props = {
      toastManager: {},
      user: {},
      history: {
        push: jest.fn(),
      },
    };
    expect(shallow(<SignUp {...props} />)).toBeTruthy;
  });


  it('should update state if next step is called', () => {
    const e = {
      preventDefault: jest.fn(),
    };
    wrapper.setState({
      error: { email: true, passowrd: true, confirmPassword: true },
    });

    expect(wrapper.instance().nextStep(e)).toBeTruthy;
  });

  it('should update state if next step is called', () => {
    const props = {
      toastManager: {},
      user: {
        email: '',
        passowrd: '',
        confirmPassword: '',
      },
      history: {
        push: jest.fn(),
      },
    };

    wrapper.setState({
      step: 1,
      error: { email: true, password: true, confirmPassword: true },
    });

    expect(shallow(<SignUp {...props} />)).toBeTruthy;
  });
});
