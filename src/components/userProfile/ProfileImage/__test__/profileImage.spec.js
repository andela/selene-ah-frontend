import { shallow } from 'enzyme';
import React from 'react';
import ProfileImage from '../ProfileImage';

describe('SideWidget Component', () => {
  const props = {
    imageUrl: 'userImage.svg',
    classname: 'profile',
  };
  it('should render Social links', () => {
    const wrapper = shallow(<ProfileImage {...props} />);
    const container = wrapper.find('div');
    expect(container.length).toEqual(3);
  });
});
