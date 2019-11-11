import { shallow } from 'enzyme';
import React from 'react';
import SideWidget from '../SideWidget';

describe('SideWidget Component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<SideWidget />);
  });
  it('should render SideWidget', () => {
    expect(shallow(<SideWidget />)).toBeTruthy;
  });
  it('should find Div', () => {
    const div = wrapper.find('div');
    expect(div.length).toEqual(1);
  });
});
