import React from 'react';
import { shallow } from 'enzyme';
import ShareButton from '../ShareButton';

describe('ShareButton Tests', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      url: '/jdaj',
    };
    wrapper = shallow(<ShareButton {...props}/>);
  });

  it('should render the ShareButton component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
