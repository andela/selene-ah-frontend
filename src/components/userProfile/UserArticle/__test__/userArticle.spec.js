
import React from 'react';
import { shallow } from 'enzyme';
import moxios from 'moxios';
import {
  UserArticle,
  mapDispatchToProps,
  mapStateToProps,
} from '../UserArticle';
import ArticleLoader from '../ArticlesLoader';

describe('User profile container', () => {
  let wrapper;
  const props = {
    toastManager: {},
    response: {},
    error: false,
    articleDispatcher: jest.fn(),
    openModal: jest.fn(),
    articleData: [{
      id: '1',
      title: 'first',
      body: 'body',
      imageUrl: 'image',
      slug: 'slug',
      readTime: 1,
      author: {},
    }],
    isLoading: false,
    token: null,
    success: null,
    userData: {
      image: 'dhahkdllakd',
    },
  };

  beforeEach(() => {
    moxios.install();
    wrapper = shallow(<UserArticle {...props}/>);
    shallow(<ArticleLoader />);
  });

  afterEach(() => {
    moxios.uninstall();
    jest.restoreAllMocks();
  });

  it('should render the component', () => {
    wrapper.setProps({
      articleData: null,
    });
    expect(wrapper.instance().render()).toBeTruthy;
  });

  it('should render the component', () => {
    wrapper.setProps({
      success: true,
    });
    expect(wrapper.instance().render()).toBeTruthy;
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
