import React from 'react';
import { shallow } from 'enzyme';
import moxios from 'moxios';
import imageUpload from '../../../../helpers/imageUpload';
import {
  UpdateProfile,
  mapDispatchToProps,
  mapStateToProps,
} from '../UpdateProfile';


jest.mock('../../../../helpers/imageUpload');
describe('User update profile container', () => {
  let wrapper;
  let preventDefaultSpy;
  const props = {
    toastManager: {},
    updateProfileDispatcher: jest.fn(),
    handleImageUpload: jest.fn(),
    openModal: jest.fn(),
    getImageUrl: jest.fn(),
    userData: {
      facebook: 'facebook',
      bio: 'djajdjda',
    },
    getAllStat: jest.fn(),
  };

  beforeEach(() => {
    moxios.install();
    wrapper = shallow(<UpdateProfile {...props}/>);
  });

  afterEach(() => {
    moxios.uninstall();
    jest.restoreAllMocks();
  });

  it('should  call onChange function', () => {
    const e = {
      target: {
        id: 7,
      },
    };
    expect(wrapper.instance().onChange(e)).toBeTruthy;
  });

  it('should  call onChange function', () => {
    const e = {
      target: {
        id: 'bio',
        value: 'fjajs',
      },
    };
    expect(wrapper.instance().onChange(e)).toBeTruthy;
  });

  it('should call getImageUrl function', () => {
    const e = {
      target: {
        files: [0],
      },
    };
    expect(wrapper.instance().getImageUrl(e)).toBeTruthy;
  });

  it('should call handleImageUpload function', () => {
    const e = {
      target: {
        files: [0],
      },
    };
    wrapper.setState({
      getFile: 'djajd',
    });
    imageUpload.mockResolvedValue(() => ({
      response:
      { data: { secure_url: {} } },
    }));
    expect(wrapper.instance().handleImageUpload(e)).toBeTruthy;
  });


  it('should call the openModal function', () => {
    wrapper.find('span.close').simulate('click', {
      preventDefault: preventDefaultSpy,
      target: {
        class: 'modal-content',
      },
    });
    expect(props.openModal).toHaveBeenCalled();
  });

  it('should call the submit', () => {
    wrapper.setProps({
      onSubmit: jest.fn(),
      userData: {
        bio: null,
      },
    });
    const preventDefault = jest.fn();
    const form = wrapper.find('FormContainer');
    form.at(0).simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  it('should return updated props', () => {
    const state = {
      profile: { 1: 'kd' },
    };

    expect(
      mapStateToProps(state),
    ).toEqual(state.profile);
  });

  it('should return updated props', () => {
    const dispatch = jest.fn();

    expect(
      typeof mapDispatchToProps(dispatch),
    ).toEqual('object');
  });
});
