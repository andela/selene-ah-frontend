import { shallow } from 'enzyme';
import React from 'react';
import Button from './Button';

describe('Button Component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Button />);
  });

  it('should render Button', () => {
    expect(shallow(<Button />)).toBeTruthy;
  });

  it('should find Fragment', () => {
    const fragment = wrapper.find('button');
    expect(fragment.length).toEqual(1);
  });

  it('should find button', () => {
    const button = wrapper.find('button');
    expect(button.length).toEqual(1);
  });
});
