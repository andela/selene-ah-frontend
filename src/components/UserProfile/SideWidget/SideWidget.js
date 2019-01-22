import React from 'react';

import SideWidgetLink from './SideWidgetLinks/SideWidgetLink';
import './SideWidget.scss';

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

const SideWidget = () => (
    <div className="side-card">
        { profileLinks.map(profileLink => (
          <SideWidgetLink key={profileLink.id} class={profileLink.class}
          title={profileLink.title} imageUrl={profileLink.imageUrl}
          path={profileLink.path} />
        )) }
    </div>
);

export default SideWidget;
