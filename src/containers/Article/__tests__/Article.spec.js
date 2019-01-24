import React from 'react';
import { shallow } from 'enzyme';
import Article from '../Article';

describe('Article Component Test', () => {
  let wrapper;

  const props = {
    changeSidenav: jest.fn(),
    isLoggedIn: true,
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
  };

  beforeEach(() => {
    wrapper = shallow(<Article {...props}/>);
  });

  it('should render the article component', () => {
    expect(wrapper.length).toEqual(1);
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
    });
    expect(wrapper.length).toEqual(1);
  });

  it('should render the article component', () => {
    wrapper.setProps({
      changeSidenav: jest.fn(),
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
    });
    expect(wrapper.length).toEqual(1);
  });
});
