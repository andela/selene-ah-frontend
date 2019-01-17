import React from 'react';
import { shallow } from 'enzyme';
import SocialButtons from '../SocialButtons';


describe('Social Login Button', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SocialButtons />);
  });

  it('should have the Social button field to have been rendered', () => {
    const anchorLink = wrapper.find('a');
    expect(anchorLink.length).toEqual(3);
  });
});
