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
      },
    },
  };

  beforeEach(() => {
    wrapper = shallow(<Article {...props}/>);
  });

  it('should render the article component', () => {
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
        },
      },
    });
    expect(wrapper.length).toEqual(1);
  });
});
