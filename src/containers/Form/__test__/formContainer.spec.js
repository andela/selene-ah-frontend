import React from 'react';
import { shallow } from 'enzyme';
import FormContainer from '../FormContainer';

describe('###FormContainer', () => {
  let wrapper;
  const props = {
    header: 'header',
    subHeader: 'subheader',
    onSubmit: jest.fn(),
  };
  beforeAll(() => {
    wrapper = shallow(<FormContainer {...props} />);
  });

  it('should render FormContainer', () => {
    expect(<FormContainer {...props} />);
  });

  it('should render Fragment', () => {
    const fragment = wrapper.find('Fragment');
    expect(fragment.length).toEqual(1);
  });

  it('should submit Form', () => {
    const form = wrapper.find('form');
    form.at(0).simulate('submit');
    expect(wrapper.props().onSubmit).toBeCalled;
  });
});
