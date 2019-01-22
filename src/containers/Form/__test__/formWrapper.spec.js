import React from 'react';
import { shallow } from 'enzyme';
import FormWrapper from '../FormWrapper';

describe('###FormWrapper', () => {
  let wrapper;
  const props = {
    imageUrl: {},
    children: 'subheader',
    displayImage: true,
  };
  beforeAll(() => {
    wrapper = shallow(<FormWrapper {...props} />);
  });

  it('should render FormWrapperwq', () => {
    expect(<FormWrapper {...props} />);
  });

  it('should render form-nav css class', () => {
    const container = wrapper.find('.form-nav');
    expect(container.length).toEqual(1);
  });
});
