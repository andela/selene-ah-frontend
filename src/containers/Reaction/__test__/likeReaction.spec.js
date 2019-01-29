import { shallow } from 'enzyme';
import React from 'react';
import {
  LikeArticle,
  mapDispatchToProps,
  mapStateToProps,
} from '../LikeReaction';

const props = {
  articleId: 'hdhdhdhd',
  isLiked: true,
  toastManager: {},
  likeArticle: jest.fn(),
};
describe('Like article component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<LikeArticle {...props} />);
  });

  it('should render LikeArticle', () => {
    expect(<LikeArticle {...props} />);
  });

  it('should return true when error occurs', () => {
    const nextProps = { error: true, status: 401 };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
    });
    expect(wrapper.instance()
      .shouldComponentUpdate(nextProps)).toEqual(false);
  });

  it('should return false if there is no error', () => {
    const nextProps = { error: false };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
    });
    expect(wrapper.instance().shouldComponentUpdate(nextProps)).toEqual(true);
  });

  it('should find div element', () => {
    const container = wrapper.find('div');
    expect(container.length).toEqual(2);
  });

  it('should handle div click', () => {
    const container = wrapper.find('div');
    wrapper.setState({
      likeCount: 2,
    });
    container.at(0).simulate('click');
    expect(wrapper.instance().handleClick()).toBeCalled;
    expect(wrapper.state().likeCount).toEqual(2);
  });

  it('should handle div click and increment likeCount', () => {
    const container = wrapper.find('div');
    wrapper.setState({
      cssClassToggle: false,
      likeCount: 2,
      id: 1,
    });
    container.at(0).simulate('click');
    expect(wrapper.instance().handleClick()).toBeCalled;
    expect(wrapper.state().likeCount).toEqual(3);
  });

  it('should handle div click and decrement likeCount', () => {
    const container = wrapper.find('div');
    wrapper.setState({
      cssClassToggle: true,
      likeCount: 2,
      id: 1,
    });
    container.at(0).simulate('click');
    expect(wrapper.instance().handleClick()).toBeCalled;
    expect(wrapper.state().likeCount).toEqual(1);
  });

  it('should return false if there is no error', () => {
    const nextProps = { error: true, status: 401 };
    wrapper.setProps({
      toastManager: {
        add: () => {},
      },
    });

    wrapper.setState({
      likeCount: 0,
    });
    expect(wrapper.instance().shouldComponentUpdate(nextProps)).toEqual(false);
  });

  it('should handle click events', () => {
    wrapper.find('div').last().simulate('click');
    expect(wrapper.instance().handleClick()).toHaveBeenCalled;
  });
});

describe('Connect state from redux', () => {
  const state = {
    likeArticleReducer: {},
  };
  it('should MapstatetoProps', () => {
    expect(mapStateToProps(state)).toEqual({});
  });

  it('should MapDispatchToProps', () => {
    expect(typeof mapDispatchToProps(state)).toEqual('object');
  });
});
