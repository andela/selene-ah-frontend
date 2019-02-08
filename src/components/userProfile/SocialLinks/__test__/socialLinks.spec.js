import { shallow } from 'enzyme';
import React from 'react';
import SocialLinks from '../SocialLinks';

describe('Social Component', () => {
  const props = {
    icon: 'favIcon',
    children: 'links',
  };
  it('should render Social links', () => {
    expect(shallow(<SocialLinks {...props} />)).toBeTruthy;
  });
});
