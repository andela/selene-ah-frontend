import { shallow } from 'enzyme';
import React from 'react';
import Home from '../Home';


describe('## Home container', () => {
  it('should render App Container', () => {
    const wrapper = shallow(<Home />);
    const fragment = wrapper.find('h1');
    expect(fragment.length).toEqual(1);
  });
});
