import React from 'react';
import { shallow } from 'enzyme';
import ArticleLoader from '../ArticleLoader';

describe('ArticleLoader Component Test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ArticleLoader />);
  });

  it('should render the 404 component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
