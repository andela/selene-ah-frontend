import { shallow } from 'enzyme';
import React from 'react';
import App from '../src/containers/App';

describe('## App container', () => {
  it('should render App Container', () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find('h2');
    expect(header.length).toEqual(1);
  });
});
