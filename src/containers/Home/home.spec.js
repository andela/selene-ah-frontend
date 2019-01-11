import { shallow } from 'enzyme';
import React from 'react';
import {
  Home,
  // mapDispatchToProps, mapStateToProps
} from './Home';

describe('## Home Component', () => {
  let wrapper;
  const props = {
    isLoading: false,
    fetchArticles: jest.fn(),
    error: false,
    articlesResponse: {
      article: {
        imageUrl: 'vjdgbvkjvk',
        title: 'my name is Gbols',
        body: 'na you ba man',
        author: {
          imageUrl: 'fbkjdvsdvls',
          userName: 'gbols',
        },
        readTime: '1 mins',
      },
    },
  };


  beforeEach(() => {
    wrapper = shallow(<Home {...props}/>);
  });

  it('should render the the navbar', () => {
    const container = wrapper.find('Navbar');
    expect(container.length).toEqual(1);
  });
});
