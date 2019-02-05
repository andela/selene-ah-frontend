import { shallow } from 'enzyme';
import React from 'react';
import ProfileImage from '../ProfileImage';

describe('SideWidget Component', () => {
  const props = {
    imageUrl: 'userImage.svg',
    classname: 'profile',
  };
  it('should render Social links', () => {
    shallow(<ProfileImage {...props} />);
  });
});
