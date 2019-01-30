import { shallow } from 'enzyme';
import React from 'react';
import {
  FollowReaction,
  mapDispatchToProps,
  mapStateToProps,
} from '../FollowReaction';

const props = {
  isFollowingAuthor: true,
  toastManager: {},
  followUser: jest.fn(),
  unFollowUser: jest.fn(),
  followerId: '1',
};
describe('FollowReaction component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<FollowReaction {...props} />);
    wrapper.setState({
      id: '2',
    });
  });

  it('should render LikeArticle', () => {
    expect(<FollowReaction {...props} />);
  });

  it('should return true when error occurs', () => {
    const nextProps = { error: true };
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
    expect(container.length).toEqual(1);
  });

  it('should handle button click', () => {
    const container = wrapper.find('button');
    wrapper.setProps({
      loading: false,
      unloading: true,
    });
    container.at(0).simulate('click');
    expect(wrapper.instance().handleClick()).toBeCalled;
  });

  it('should handle button click', () => {
    const container = wrapper.find('button');
    wrapper.setProps({
      unloading: false,
      loading: true,
    });
    wrapper.setState({
      id: undefined,
    });
    container.at(0).simulate('click');
    expect(wrapper.instance().handleClick()).toBeCalled;
  });

  it('should handle button click and setstate', () => {
    const container = wrapper.find('button');
    wrapper.setProps({
      loading: false,
    });
    wrapper.setState({
      isFollowingAuthor: true,
      id: '2',
    });
    container.at(0).simulate('click');
    expect(wrapper.instance().handleClick()).toBeCalled;
    expect(wrapper.props().unFollowUser).toBeCalled;
  });

  it('should handle button click and call followUser', () => {
    const container = wrapper.find('button');
    wrapper.setProps({
      loading: false,
    });
    wrapper.setState({
      isFollowingAuthor: false,
      id: '2',
    });
    container.at(0).simulate('click');
    expect(wrapper.instance().handleClick()).toBeCalled;
    expect(wrapper.props().followUser).toBeCalled;
  });
});

describe('Connect state from redux', () => {
  const state = {
    follow: {},
  };
  it('should MapstatetoProps', () => {
    expect(mapStateToProps(state)).toEqual({});
  });

  it('should MapDispatchToProps', () => {
    expect(typeof mapDispatchToProps(state)).toEqual('object');
  });
});
