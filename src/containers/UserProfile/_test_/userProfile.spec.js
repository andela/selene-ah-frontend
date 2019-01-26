/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';
import moxios from 'moxios';
import { UserProfile, mapDispatchToProps, mapStateToProps } from '../UserProfile';

describe('User profile container', () => {
  let wrapper;
  let toastManagerSpy;

  const props = {
    toastManager: {
      add: toastManagerSpy,
    },
    response: {},
    statError: false,
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
    user: {},
    getAllStat: jest.fn(),
  };

  beforeEach(() => {
    moxios.install();
    wrapper = shallow(<UserProfile {...props}/>);
    toastManagerSpy = jest.fn();
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
  it('should display the User Statistics', async () => {
    await props.getAllStat();
    wrapper.setState({
      userStats: true,
      activeStat: true,
      activeArticle: false,
    });
    wrapper.instance().handleNavChange('Statistics');
  });
  it('should display the User Articles', () => {
    wrapper.setState({
      userStats: false,
      activeStat: false,
      activeArticle: true,
    });
    wrapper.instance().handleNavChange('Articles');
  });
  it('should return null if side nav string is not found', () => {
    wrapper.setState({
      userStats: false,
      activeStat: false,
      activeArticle: true,
    });
    wrapper.instance().handleNavChange('followers');
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

  it('should return false when errors occur', () => {
    const nextProps = { statError: true };
    wrapper.setProps({
      statError: false,
      toastManager: {
        add: toastManagerSpy,
      },
    });
    expect(
      wrapper.instance().shouldComponentUpdate(nextProps),
    ).toEqual(false);
  });
});
