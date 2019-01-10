import { shallow } from 'enzyme';
import React from 'react';
import Input from './Input';

describe('Button Component', () => {
  let wrapper;
  const props = {
    type: 'type',
    id: 'id',
    placeholder: 'placeholder',
    required: true,
  };

  beforeAll(() => {
    wrapper = shallow(<Input {...props} />);
  });

  it('should render Input', () => {
    shallow(<Input {...props} />);
  });

  it('should find Fragment', () => {
    const fragment = wrapper.find('Fragment');
    expect(fragment.length).toEqual(1);
  });
});
