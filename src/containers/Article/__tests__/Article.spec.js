/* eslint-disable import/first */
jest.mock('../../../helpers/validationHelpers/decodeToken');
import React from 'react';
import { shallow } from 'enzyme';
import decodedToken from '../../../helpers/validationHelpers/decodeToken';
import decodedUser from '../../../../__mocks__/decodedUser';
import Article from '../Article';

describe('Article Component Test', () => {
  decodedToken.mockResolvedValue(() => ({
    decodedUser,
  }));
  let wrapper;
  const changeSidenavSpy = jest.fn();

  const props = {
    changeSidenav: changeSidenavSpy,
    isLoggedIn: true,
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
    location: {
      pathname: '/jdakdjkajda',
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
      location: {
        pathname: '/jdakdjkajda',
      },
    });
    expect(wrapper.length).toEqual(1);
  });

  it('should render the article component', () => {
    wrapper.setProps({
      isLoggedIn: true,
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
});
