import React from 'react';
import { shallow } from 'enzyme';
import NoMatch from '../NoMatch';

describe('404 Component Test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NoMatch />);
  });

  it('should render the 404 component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
