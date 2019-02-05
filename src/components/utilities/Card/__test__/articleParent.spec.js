import { shallow } from 'enzyme';
import React from 'react';
import ArticleParent from '../ArticleParent';

describe(' Component', () => {
  let wrapper;
  const props = {
    classname: 'card',
    children: 'this is a demo bio',
  };

  beforeAll(() => {
    wrapper = shallow(<ArticleParent {...props} />);
  });
  it('should find Fragment', () => {
    const fragment = wrapper.find('Fragment');
    expect(fragment.length).toEqual(1);
  });
});
