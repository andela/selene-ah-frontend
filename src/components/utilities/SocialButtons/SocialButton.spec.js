import { shallow } from 'enzyme';
import React from 'react';
import SocialButton from './SocialButton';

describe('Button Component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<SocialButton />);
  });
  it('should render SocialButton', () => {
    expect(shallow(<SocialButton />)).toBeTruthy;
  });
  it('should find Fragment', () => {
    const fragment = wrapper.find('Fragment');
    expect(fragment.length).toEqual(1);
  });
  it('should find button', () => {
    const socialbutton = wrapper.find('div');
    expect(socialbutton.length).toEqual(1);
  });
});
