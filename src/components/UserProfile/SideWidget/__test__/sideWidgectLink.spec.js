import { shallow } from 'enzyme';
import React from 'react';
import SideWidgetLink from '../SideWidgetLinks/SideWidgetLink';

describe('Side Nav Button Component', () => {
  let wrapper;
  const props = {
    icon: 'icon',
    handleNavClick: jest.fn(),
    flag: true,
  };
  beforeAll(() => {
    wrapper = shallow(<SideWidgetLink {...props}/>);
  });
  it('should render SideWidget', () => {
    shallow(<SideWidgetLink {...props}/>);
  });
  it('should call the handlenavclick when flag is true', () => {
    wrapper.find('p').simulate('click');
    expect(props.handleNavClick).toHaveBeenCalled();
  });
  it('should call the handlenavclick when flag is false', () => {
    wrapper.setProps({
      flag: false,
    });
    wrapper.find('p').simulate('click');
    expect(props.handleNavClick).toHaveBeenCalled();
  });
  it('should find P tag', () => {
    const pTag = wrapper.find('p');
    expect(pTag.length).toEqual(1);
  });

  it('should find Span tag', () => {
    const span = wrapper.find('span');
    expect(span.length).toEqual(1);
  });
  it('should find Fragment tag', () => {
    const fragment = wrapper.find('Fragment');
    expect(fragment.length).toEqual(1);
  });
});
