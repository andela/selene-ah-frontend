import { shallow } from 'enzyme';
import React from 'react';
import MiniCard from './MiniCard';

describe('Button Component', () => {
  let wrapper;
  const props = {
    icon: 'icon',
  };
  beforeAll(() => {
    wrapper = shallow(<MiniCard {...props}/>);
  });
  it('should render MiniCard', () => {
    shallow(<MiniCard {...props}/>);
  });
  it('should find Div', () => {
    const div = wrapper.find('div');
    expect(div.length).toEqual(2);
  });
  it('should find P tag', () => {
    const pTag = wrapper.find('p');
    expect(pTag.length).toEqual(2);
  });
});
