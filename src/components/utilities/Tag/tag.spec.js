import { shallow } from 'enzyme';
import React from 'react';
import Tag from './Tag';

describe('Card Component', () => {
  const props = {
    isActive: true,
    icon: 'bksvjvv',
    children: 'nhfhfnfcj',
  };

  beforeEach(() => {
    shallow(<Tag {...props} />);
  });

  it('it should render a Card Component', () => {
    expect(shallow(<Tag {...props} />)).toBeTruthy;
  });
});
