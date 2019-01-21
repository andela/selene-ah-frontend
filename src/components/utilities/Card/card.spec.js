import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

describe('Card Component', () => {
  let wrapper;
  const props = {
    imageUrl: 'vjgdshvbsdkjhb',
    title: 'vjdbhvbfvkj',
    body: 'bkjdfhvkbxbx',
    author: {
      userName: 'vcbvxhc',
      imageUrl: 'sjdvbdshms',
    },
    readTime: 1,
    slug: 'dhhdh',
  };

  beforeEach(() => {
    wrapper = shallow(<Card {...props} />);
  });

  it('it should render a Card Component', () => {
    shallow(<Card {...props} />);
  });

  it('should render default avatar', () => {
    wrapper.setProps({
      author: {
        imageUrl: null,
      },
    });
  });
});
