/* eslint-disable no-unused-expressions */
import { shallow } from 'enzyme';
import React from 'react';
import EachComment from '../EachComment';


describe('## EacComment Component', () => {
  let wrapper;
  const props = {
    commentDetails: {
      author: {
        imageUrl: 'helooo',
        userName: 'thiit',
        content: 'hello',
      },
      likesCount: 0,
      createdAt: Date.now(),
    },
  };


  beforeEach(() => {
    wrapper = shallow(<EachComment {...props}/>);
  });

  it('should render the eachcomment component', () => {
    expect(wrapper.find('.user-comments').length).toEqual(1);
  });

  it('should render the eachcomment when likecount is greater than 0', () => {
    wrapper.setProps({
      commentDetails: {
        author: {
          imageUrl: null,
          userName: 'hiii',
          content: 'hello',
        },
        createdAt: Date.now(),
        likesCount: 6,
      },
    });
    expect(wrapper.find('.user-comments').length).toEqual(1);
  });
});
