import { shallow } from 'enzyme';
import React from 'react';
import SideNav from './SideNav';

describe('SideNav Component', () => {
  let wrapper;
  const props = {
    isLoggedIn: true,
  };
  beforeEach(() => {
    wrapper = shallow(<SideNav {...props} />);
  });

  it('should render SideNav', () => {
    shallow(<SideNav {...props}/>);
  });

  it('it should render an avatar based on isLoggenIn state', () => {
    wrapper.setProps({ isLoggedIn: false });
  });
});
