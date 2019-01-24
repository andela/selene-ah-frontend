import { shallow } from 'enzyme';
import React from 'react';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  let wrapper;
  const props = {
    changeSidenav: jest.fn(),
    isLoggedIn: true,
  };

  beforeEach(() => {
    wrapper = shallow(<Navbar {...props} />);
  });

  it('it should render a Navbar Component', () => {
    shallow(<Navbar {...props} />);
  });

  it('should open navbar state when clicked', () => {
    const container = wrapper.find('span.hide-on-large-only');
    container.simulate('click');
    expect(props.changeSidenav).toBeCalled();
  });

  it('should  navbar state when clicked', () => {
    wrapper.setProps({ isLoggedIn: false });
  });
});
