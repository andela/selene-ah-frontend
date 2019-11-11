import { shallow } from 'enzyme';
import React from 'react';
import CardParent from '../CardParent';

describe('Card Parent Component', () => {
  const props = {
    children: 'hi',
  };
  beforeEach(() => {
    shallow(<CardParent {...props} />);
  });

  it('it should render a Card Component', () => {
    expect(shallow(<CardParent {...props} />)).toBeTruthy;
  });
});
