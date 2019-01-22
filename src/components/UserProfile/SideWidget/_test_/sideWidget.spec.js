import { shallow } from 'enzyme';
import React from 'react';
import SideWidget from '../SideWidget';

describe('SideWidget Component', () => {
  const profileLinks = [
    {
      id: 1,
      class: 'side-card__link',
      title: 'Articles',
      imageUrl: '',
      path: '/my-articles',
    },
    {
      id: 2,
      class: '',
      titie: 'Stat',
      imageUrl: '',
      path: '/profile-stat',
    },
  ];

  it('should render Social links', () => {
    shallow(<SideWidget {...profileLinks} />);
  });
});
