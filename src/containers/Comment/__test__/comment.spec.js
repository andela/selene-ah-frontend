import { shallow } from 'enzyme';
import React from 'react';
import {
  Comment,
  mapStateToProps,
  mapDispatchToProps,
} from '../Comment';
import WriteComment from '../WriteComment';
import ShowCommentButton from '../ShowCommentButton';


describe('## Comment Component', () => {
  let wrapper;
  const toastManagerSpy = jest.fn();

  const props = {
    error: {},
    user: {
      id: 'kshdkjdjkdh',
    },
    content: '',
    setWriteComment: false,
    toastManager: {},
    viewComment: false,
    id: jest.fn(),
    onCommentClick: false,
    articleId: 'hikhdh',
  };


  beforeEach(() => {
    wrapper = shallow(<Comment {...props}/>);
  });

  it('should render the writeComment component', () => {
    const proops = {
      inputChange: jest.fn(),
      setWriteComment: true,
      postIsLoading: false,
      submitComment: jest.fn(),
      textFocus: jest.fn(),
    };
    const componentWrapper = shallow(<WriteComment {...proops}/>);
    const input = componentWrapper.find('textarea');
    expect(input.toBeCalled);
  });

  it('should render the writeComment component', () => {
    const proops = {
      inputChange: jest.fn(),
      setWriteComment: false,
      postIsLoading: true,
      submitComment: jest.fn(),
      textFocus: jest.fn(),
    };
    const componentWrapper = shallow(<WriteComment {...proops}/>);
    const input = componentWrapper.find('textarea');
    expect(input.toBeCalled);
  });


  it('should reder the showCommentButton component', () => {
    const proops = {
      handleCommentButton: jest.fn(),
      viewComment: false,
      loading: true,
    };
    const componentWrapper = shallow(<ShowCommentButton {...proops}/>);
    const input = componentWrapper.find('button');
    expect(input.toBeCalled);
  });

  it('should render the showCommentButton component', () => {
    const proops = {
      handleCommentButton: jest.fn(),
      viewComment: true,
      loading: true,
    };
    const componentWrapper = shallow(<ShowCommentButton {...proops}/>);
    const input = componentWrapper.find('button');
    expect(input.toBeCalled);
  });

  it('should render the ShowCommentButton component on isloading', () => {
    const proops = {
      handleCommentButton: jest.fn(),
      viewComment: false,
      loading: false,
    };
    const componentWrapper = shallow(<ShowCommentButton {...proops}/>);
    const input = componentWrapper.find('button');
    expect(input.toBeCalled);
  });

  it('should change state if comment and pass cliploader', () => {
    wrapper.setState({
      isLoading: true,
    });
    const input = wrapper.find('ClipLoader');
    expect(input.toBeCalled);
  });

  it('should change state when postIsLoading', () => {
    wrapper.setProps({
      getSuccess: true,
      response: {
        map: jest.fn(),
      },
    });
    wrapper.setState({
      postIsLoading: true,
    });
    const input = wrapper.find('ClipLoader');
    expect(input.toBeCalled);
  });


  it('should change state if EachComment is called', () => {
    wrapper.setProps({
      getSuccess: true,
      isLoading: false,
      response: [
        { id: 'hdhks' },
      ],
    });
    wrapper.setState({
      viewComment: true,
    });
    const input = wrapper.find('EachComment');
    input.at(0).simulate('change', { target: { id: 'content', value: 'hi' } });
    expect(wrapper.state().content).toEqual('');
  });

  it('should test if componentwillUmout is invoked when leaving page', () => {
    wrapper.setState({
      viewComment: false,
    });
    const componentWillUnmount = jest.spyOn(wrapper.instance(),
      'componentWillUnmount');
    wrapper.unmount();
    expect(componentWillUnmount).toHaveBeenCalled();
  });

  it('should call onTextFocus function', () => {
    wrapper.setProps({
      toastManager: {
        add: toastManagerSpy,
      },
    });

    wrapper.setState({
      id: 1,
    });

    wrapper.instance().onTextFocus();
    expect(toastManagerSpy).toBeCalled;
  });

  it('should call onTextFocus function', () => {
    wrapper.setProps({
      toastManager: {
        add: toastManagerSpy,
      },
    });

    wrapper.setState({
      id: null,
    });

    wrapper.instance().onTextFocus();
    expect(toastManagerSpy).toBeCalled;
  });

  it('should call the handleCommentButton', () => {
    const spy = jest.fn();
    wrapper.setProps({
      getArticleComments: spy,
    });
    wrapper.instance().handleCommentButton();
    expect(spy).toBeCalled;
  });

  it('should call the commentSubmit function', () => {
    const eventSpy = jest.fn();
    wrapper.setState({
      token: 'dkajdbcajebjakdajjdakw',
      content: 'kjdhakuebdubejduabejddu',
    });

    const event = {
      preventDefault: eventSpy,
    };

    wrapper.setProps({
      articleId: 'hkdhjdhd',
      postComment: jest.fn(),
    });
    wrapper.instance().commentSubmit(event);
    expect(wrapper.props().postComment).toBeCalled;
  });

  it('should call the handleInputChange function', () => {
    const e = {
      target: {
        value: 'djakjdka',
      },
    };
    wrapper.instance().handleInputChange(e);
  });


  it('should return true when error occurs', () => {
    const nextProps = { error: true, status: 400 };
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
});


describe('Connect of the articlecomment to state from redux', () => {
  const state = {
    commentReducers: {},
  };
  it('should MapstatetoProps', () => {
    expect(mapStateToProps(state)).toEqual({});
  });

  it('should MapDispatchToProps', () => {
    expect(typeof mapDispatchToProps(state)).toEqual('object');
  });
});
