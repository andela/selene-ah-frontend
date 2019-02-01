import React from 'react';
import { shallow } from 'enzyme';
import EmailConfirmation from '../EmailConfirmation';

describe('EmailConfirmation Tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EmailConfirmation />);
  });

  it('should render the email confirmation component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
