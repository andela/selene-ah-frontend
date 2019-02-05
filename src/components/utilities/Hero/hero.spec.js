import { shallow } from 'enzyme';
import React from 'react';
import Hero from './Hero';

describe('Card Component', () => {
  const props = {
    heroImage: 'bjbvdccjk',
  };

  beforeEach(() => {
    shallow(<Hero {...props} />);
  });

  it('it should render a Card Component', () => {
    shallow(<Hero {...props} />);
  });
});
