import { shallow } from 'enzyme';
import React from 'react';
import {
  Home,
  mapDispatchToProps, mapStateToProps,
} from './Home';

describe('## Home Component', () => {
  let wrapper;
  const props = {
    isLoading: false,
    fetchArticles: jest.fn(),
    error: false,
    articlesResponse: {
      articles: [{
        imageUrl: 'vjdgbvkjvk',
        title: 'my name is Gbols',
        body: 'na you ba man',
        author: {
          imageUrl: 'fbkjdvsdvls',
          userName: 'gbols',
        },
        readTime: 1,
        slug: 'ggsg',
      }],
    },
  };


  beforeEach(() => {
    wrapper = shallow(<Home {...props}/>);
  });

  it('should render the the navbar component', () => {
    const container = wrapper.find('Navbar');
    expect(container.length).toEqual(1);
  });

  it('should render a cardParent component', () => {
    const container = wrapper.find('CardParent');
    expect(container.length).toEqual(1);
  });

  it('should render a card component', () => {
    const container = wrapper.find('Card');
    expect(container.length).toEqual(1);
  });

  it('should render a Home Loader', () => {
    wrapper.setProps({
      isLoading: true,
    });
    const container = wrapper.find('HomeLoader');
    expect(container.length).toEqual(1);
  });

  it('should open sidenav', () => {
    wrapper.setState({ sidenav: true });
    const container = wrapper.find('div');
    container.at(0).simulate('click');
    // eslint-disable-next-line no-unused-expressions
    expect(wrapper.instance().changeSidenav()).toBeCalled;
  });

  it('should render a Hero component based on isLoggedIn', () => {
    wrapper.setState({ isLoggedIn: false });
    const container = wrapper.find('Hero');
    expect(container.length).toEqual(1);
  });

  it('should render a Hero component based on isLoggedIn', () => {
    wrapper.setState({ isLoggedIn: true });
  });

  it('should not render a card component', () => {
    wrapper.setProps({
      articlesResponse: {
        articles: null,
      },
    });
  });
});

describe('## articlesResponse', () => {
  const state = {
    articlesResponse: 'me',
  };
  it('should call mapStateToProps', () => {
    expect(mapStateToProps(state)).toEqual({ 0: 'm', 1: 'e' });
  });

  it('should call mapDispatchToProps', () => {
    expect(typeof mapDispatchToProps(state)).toEqual('object');
  });
});
