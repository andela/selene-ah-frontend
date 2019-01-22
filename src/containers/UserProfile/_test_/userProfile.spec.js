/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';
import moxios from 'moxios';
import { UserProfile, mapDispatchToProps, mapStateToProps } from '../UserProfile';

describe('User profile container', () => {
  let wrapper;
  const props = {
    toastManager: {},
    response: {},
    error: false,
    profileDispatcher: jest.fn(),
    openModal: jest.fn(),
    isLoading: false,
    token: null,
    success: null,
    userData: {
      image: 'dhahkdllakd',
    },
    history: {
      push: jest.fn(),
    },
  };

  beforeEach(() => {
    moxios.install();
    wrapper = shallow(<UserProfile {...props}/>);
  });

  afterEach(() => {
    moxios.uninstall();
    jest.restoreAllMocks();
  });

  it('should call the modal function', () => {
    wrapper.instance().openModal();
  });

  it('should render the component', () => {
    wrapper.setProps({
      userData: {
      },
    });
    wrapper.instance().render();
  });

  it('should render the component', () => {
    wrapper.setProps({
      success: true,
    });
    wrapper.instance().render();
  });

  it('should display the side nav', () => {
    wrapper.setState({ sidenav: true });
    wrapper.find('.sidebar-overlay').simulate('click');
    wrapper.instance().changeSidenav();
  });

  it('should return updated props', () => {
    const state = {
      profile: { 1: 'kd' },
    };

    expect(
      mapStateToProps(state),
    ).toEqual(state.profile);
  });

  it('should return updated props', () => {
    const dispatch = jest.fn();

    expect(
      typeof mapDispatchToProps(dispatch),
    ).toEqual('object');
  });
});
