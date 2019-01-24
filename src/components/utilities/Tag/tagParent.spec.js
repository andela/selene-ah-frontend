import { shallow } from 'enzyme';
import React from 'react';
import TagParent from './TagParent';

describe('TagParent Component', () => {
  const props = {
    children: 'nhfhfnfcj',
  };

  beforeEach(() => {
    shallow(<TagParent {...props} />);
  });

  it('it should render a Card Component', () => {
    shallow(<TagParent {...props} />);
  });
});
