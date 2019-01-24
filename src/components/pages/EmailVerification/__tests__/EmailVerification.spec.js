import React from 'react';
import { shallow } from 'enzyme';
import EmailVerification from '../EmailVerification';

describe('EmailVerification Tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EmailVerification />);
  });

  it('should render the email verification component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
