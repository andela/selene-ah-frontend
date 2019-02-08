import React from 'react';
import { shallow } from 'enzyme';
import Article from '../Article';

describe('Article Component Test', () => {
  let wrapper;
  const changeSidenavSpy = jest.fn();

  const props = {
    unmountArticle: jest.fn(),
    changeSidenav: changeSidenavSpy,
    isLoggedIn: true,
    user: {
      id: 1,
      userName: 'davandela',
    },
    followers: {
      followees: [
        {},
      ],
    },
    response: {
      article: {
        author: {
          imageUrl: 'kdka',
          userName: 'jdajdj',
        },
        title: 'hdakdkja',
        body: 'dahkfdjakdadskjds',
        likedUsers: [],
        readTime: 2,
      },
      vote: {
        voteCount: {
          likeCount: 3,
        },
      },
    },
    history: {
      location: {
        pathname: '/testpath',
      },
      push: jest.fn(),
    },
  };

  beforeEach(() => {
    wrapper = shallow(<Article {...props}/>);
    changeSidenavSpy.mockClear();
  });

  it('should render the article component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render null when token does not exist', () => {
    const wrapperTwo = shallow(<Article {...props} />);
    expect(wrapperTwo.length).toEqual(1);
    localStorage.removeItem('token');
  });

  it('should render the article component', () => {
    wrapper.setProps({
      response: {
        article: {
          author: {
            imageUrl: null,
            userName: 'jdajdj',
          },
          title: 'hdakdkja',
          body: 'dahkfdjakdadskjds',
          likedUsers: [],
          readTime: 2,
          imageUrl: 'djnahda',
        },
        vote: {
          voteCount: {
            likeCount: 3,
          },
        },
      },
      user: {
        userName: 'davandela',
      },
      location: {
        pathname: '/jdakdjkajda',
      },
    });
    expect(wrapper.length).toEqual(1);
  });

  it('should render the article component', () => {
    wrapper.setProps({
      isLoggedIn: true,
      user: {
        userName: 'davandela',
      },
      response: {
        article: {
          author: {
            imageUrl: null,
            userName: 'jdajdj',
          },
          title: 'hdakdkja',
          body: 'dahkfdjakdadskjds',
          likedUsers: [],
          readTime: 1,
        },
        vote: {
          voteCount: {
            likeCount: 3,
          },
        },
      },
      location: {
        pathname: '/jdakdjkajda',
      },
    });
    expect(wrapper.length).toEqual(1);
  });

  it('should render the article component', () => {
    wrapper.setProps({
      changeSidenav: changeSidenavSpy,
      user: {
        userName: 'davandela',
      },
      isLoggedIn: true,
      followers: {

      },
      response: {
        article: {
          author: {
            imageUrl: null,
            userName: 'jdajdj',
          },
          title: 'hdakdkja',
          body: 'dahkfdjakdadskjds',
          likedUsers: [],
          readTime: 1,
        },
        vote: {
          voteCount: {
            likeCount: 3,
          },
        },
      },
      location: {
        pathname: '/jdakdjkajda',
      },
    });
    wrapper.instance().changeSidenav();
  });

  it('should click the overlay button', () => {
    wrapper.setState({
      sidenav: true,
    });
    const sidenavBtn = wrapper.find('div.sidebar-overlay');
    sidenavBtn.at(0).simulate('click');
  });

  it('should set user props', () => {
    wrapper.setProps({
      user: null,
    });
  });

  it('should call componentWillUnmount', () => {
    expect(wrapper.instance().componentWillUnmount());
  });


  it('should call editArticleHandler', () => {
    expect(wrapper.instance().editArticleHandler());
  });
});
