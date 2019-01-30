import React from 'react';
import { shallow } from 'enzyme';
import moxios from 'moxios';
import {
  ArticleView,
  mapStateToProps,
  mapDispatchToProps,
} from '../ArticleView';

describe('ArticleView Component Test', () => {
  let wrapper;
  const fetchArticleSpy = jest.fn();
  const fetchFollowersSpy = jest.fn();

  const props = {
    fetchArticle: fetchArticleSpy,
    fetchFollowers: fetchFollowersSpy,
    isFetchingArticle: false,
    response: {},
    location: {
      pathname: '/a/jdakdkk',
    },
  };

  const state = {
    articleReducer: {},
  };

  beforeEach(() => {
    moxios.install();
    wrapper = shallow(<ArticleView {...props}/>);
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should call the fetchArticle function', () => {
    expect(fetchArticleSpy).toHaveBeenCalled();
    expect(fetchFollowersSpy).toHaveBeenCalled();
  });

  it('should render the ArticleLoader component', () => {
    wrapper.setProps({
      isFetchingArticle: true,
    });
    expect(fetchArticleSpy).toHaveBeenCalled();
  });

  it('should mapStateToProps', () => {
    expect(mapStateToProps(state)).toEqual(state.articleReducer);
  });

  it('should return updated props', () => {
    const dispatch = jest.fn();

    expect(
      typeof mapDispatchToProps(dispatch),
    ).toEqual('object');
  });
});
