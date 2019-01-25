import React from 'react';
import { shallow } from 'enzyme';
import BackDrop from '../BackDrop';

describe('BackDrop Tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BackDrop title='Something cool!'/>);
  });

  it('should render component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
