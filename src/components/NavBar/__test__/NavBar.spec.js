import { shallow } from 'enzyme';
import React from 'react';
import NavBar from '../NavBar';

describe('Button Component', () => {
  it('should render the navbar', () => {
    shallow(<NavBar />);
  });
});
