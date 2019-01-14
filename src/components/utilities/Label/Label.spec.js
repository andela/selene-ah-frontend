import { shallow } from 'enzyme';
import React from 'react';
import Label from './Label';

let shallowWrapper;

describe('Label Component ', () => {
  const labelProps = {
    for: 'email',
    children: 'A Label',
  };

  beforeAll(() => {
    shallowWrapper = shallow(<Label {...labelProps}/>);
  });

  it('should render the label component', () => {
    shallow(<Label {...labelProps}/>);
  });

  it('should find Fragment field', () => {
    const Fragment = shallowWrapper.find('Fragment');
    expect(Fragment.length).toEqual(1);
  });

  it('should find label field', () => {
    const label = shallowWrapper.find('label');
    expect(label.length).toEqual(1);
  });
});
