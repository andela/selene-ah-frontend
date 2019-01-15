import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';


let wrapper;
describe('## App container', () => {
  it('should render App Container', () => {
    wrapper = shallow(<App />);
  });

  it('should find the Switch component', () => {
    const header = wrapper.find('Switch');
    expect(header.length).toEqual(1);
  });
});
