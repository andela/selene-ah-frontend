import { shallow } from 'enzyme';
import React from 'react';
import SideWidgetLink from '../SideWidgetLink';

describe('SideWidgetLink Component', () => {
  let wrapper;
  const props = {
    path: '/profil',
    class: 'links',
    title: 'article',
  };

  beforeAll(() => {
    wrapper = shallow(<SideWidgetLink {...props} />);
  });

  it('should render Social links', () => {
    shallow(<SideWidgetLink {...props} />);
  });

  it('should find Fragment', () => {
    const fragment = wrapper.find('Fragment');
    expect(fragment.length).toEqual(1);
  });
});
