import { shallow } from 'enzyme';
import React from 'react';
import UserInfo from '../UserInfo';
import UserInfoLoader from '../UserInfoLoader';


describe(' Component', () => {
  let wrapper;
  let preventDefaultSpy;
  const props = {
    name: 'Michael',
    bio: 'this is a demo bio',
    imageUrl: 'user-profile.jpg',
    openModal: jest.fn(),
    SocialLinks: {
      twitter: '@johnDoe',
      facebook: '@johnDoe',
      email: '@johnDoe',
      userName: 'mike',
    },
  };

  beforeAll(() => {
    wrapper = shallow(<UserInfo {...props} />);
    shallow(<UserInfoLoader />);
  });

  it('should call the openModal function', () => {
    wrapper.find('button.edit-button').simulate('click', {
      preventDefault: preventDefaultSpy,
      target: {
        class: 'edit-button',
      },
    });
    expect(props.openModal).toHaveBeenCalled();
  });
});
