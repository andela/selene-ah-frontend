import React from 'react';
import { shallow } from 'enzyme';
import HomeLoader from '../HomeLoader';

describe('HomeLoader Tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomeLoader />);
  });

  it('should render the homeloader component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
