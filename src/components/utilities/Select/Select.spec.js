import { shallow } from 'enzyme';
import React from 'react';
import Select from './Select';

describe('Switch Component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Select />);
  });

  it('should render select item', () => {
    expect(shallow(<Select />)).toBeTruthy;
  });

  it('should find Fragment', () => {
    const fragment = wrapper.find('select');
    expect(fragment.length).toEqual(1);
  });
});
