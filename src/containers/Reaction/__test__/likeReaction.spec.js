import { shallow } from 'enzyme';
import React from 'react';
import {
  LikeArticle,
  mapDispatchToProps,
  mapStateToProps,
} from '../LikeReaction';

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

describe('Like article component', () => {
  let wrapper;
  const props = {
    articleId: 'hdhdhdhd',
    isLiked: true,
    toastManager: {},
    likeArticle: jest.fn(),
  };
  beforeAll(() => {
    wrapper = shallow(<LikeArticle {...props} />);
  });

  it('should render LikeArticle', () => {
    expect(<LikeArticle {...props} />);
  });

  it('should render null when token does not exist', () => {
    localStorage.setItem('token', `
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJ1c2VyIjp7ImlkIjoiZjAyODA1YTktYjEwOC
    00YjhhLTgyMTctOGYwZGIzZTlkMDAyIiwiZmlyc3ROYW1
    lIjoiZGFuaWVsIiwibGFzdE5hbWUiOiJzaG93IiwidXNl
    ck5hbWUiOiJkYW5pZWwiLCJlbWFpbCI6ImRhbmllbHNob
    3RvbndhQHlhaG9vLmNvbSIsInZlcmlmaWVkIjpmYWxzZS
    wiYmxvY2tlZCI6ZmFsc2UsImltYWdlVXJsIjpudWxsLCJ
    iaW8iOm51bGwsImdlbmRlciI6bnVsbCwidHdpdHRlclVyb
    CI6bnVsbCwiZmFjZWJvb2tVcmwiOm51bGwsImRhdGVPZk
    JpcnRoIjpudWxsLCJlbWFpbE5vdGlmaWNhdGlvbiI6ZmFs
    c2UsInJvbGUiOiJyZWd1bGFyIn0sImlhdCI6MTU0ODI2M
    TI5NCwiZXhwIjoxNTQ4MzQ3Njk0fQ._uFWoYDflivwt0
    R5DtoGRpr8rQE11qcAOh9K0wh24D0`.replace(/\n/gm, ''));
    const wrapperTwo = shallow(<LikeArticle {...props} />);
    expect(wrapperTwo.find('div').exists()).toBe(true);
    localStorage.removeItem('token');
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
