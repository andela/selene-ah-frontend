import { shallow } from 'enzyme';
import React from 'react';
import UserTop from '../UserTop';
import UserTopLoader from '../UserTopLoader';


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
    wrapper = shallow(<UserTop {...props} />);
    shallow(<UserTopLoader />);
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

  it('should find Fragment', () => {
    const fragment = wrapper.find('Fragment');
    expect(fragment.length).toEqual(1);
  });
});
