import React from 'react';
import { shallow } from 'enzyme';
import {
  CreateArticle,
  mapStateToProps,
  mapDispatchToProps,
} from '../CreateArticle';


const fetchCategoriesSpy = jest.fn();
const postArticleSpy = jest.fn();
const uploadImageActionSpy = jest.fn();
const getCategorySelectionSpy = jest.fn();
const toastManagerSpy = jest.fn();

const mockState = {
  categoryReducer: {},
  articleReducers: {},
  imageUploadReducers: {},
};

const props = {
  fetchCategories: fetchCategoriesSpy,
  postArticle: postArticleSpy,
  uploadImageAction: uploadImageActionSpy,
  toastManager: {},
  getCategorySelection: getCategorySelectionSpy,
  fetchCategoriesSuccess: false,
};

const props2 = {
  ...props,
  fetchCategoriesResponse: {
    categories: [
      { id: 1, title: 'sport' },
      { id: 2, title: 'fashion' },
    ],
  },
};

describe('CreateAticle Component', () => {
  const wrapper = shallow(<CreateArticle {...props}/>);
  const wrapper2 = shallow(<CreateArticle {...props2}/>);
  let event = {
    preventDefault: jest.fn(),
    target: {
      options: [
        {
          value: 0,
        },
      ],
      result: 'something',
      files: [
        new Blob(),
      ],
      selectedIndex: 0,
      value: '',
    },
  };

  const event2 = {
    preventDefault() {},
    target: {
      files: [false],
    },
  };

  it('Should check the title input field for change', () => {
    wrapper.find('#articleTitle').simulate('change', event);
  });

  it('Should check the title input field for change', () => {
    wrapper.find('#categorySelect').simulate('change', event);
  });

  it('Should check the file input field for change', () => {
    wrapper.find('#featureImage').simulate('change', event);
  });

  it('Should read an image file', () => {
    const methods = {
      addEventListener: jest.fn((_, evt) => evt()),
      readAsDataURL: jest.fn(),
      result: 'something',
    };
    window.FileReader = jest.fn(() => methods);
    wrapper.instance().readUploadedFile(event.target.files[0], event);
    expect(methods.addEventListener).toBeCalled();
  });

  it('Should not read an invalid image file', () => {
    wrapper.instance().readUploadedFile(event2.target.files[0]);
  });

  it('Should check get the article body and set the state', () => {
    wrapper.instance().getArticleBody('The article body');
  });

  it('Should submit the article', () => {
    wrapper.instance().submitArticle();
  });

  it('Should not upload image if non is selected', () => {
    wrapper.setState({ fileSelected: false });
    wrapper.instance().submitArticle();
  });

  it('Should check the title input field for change', () => {
    wrapper2.find('#articleTitle').simulate('change', event);
  });

  it('should return updated state as props', () => {
    expect(
      mapStateToProps(mockState),
    ).toEqual({});
  });

  it('should return updated state props', () => {
    const dispatch = jest.fn();

    expect(
      typeof mapDispatchToProps(dispatch),
    ).toEqual('object');
  });

  it('should get the selected category', () => {
    wrapper.setProps({
      fetchCategoriesSuccess: true,
    });
    wrapper.instance().getCategorySelection(event);
  });

  it('should not try to display categories if non exist', () => {
    const categoriesResponse = {
      categories: null,
    };
    wrapper.setProps({
      fetchCategoriesResponse: categoriesResponse,
    });
    wrapper.instance().render();
  });

  it('should display the edit button if the article has been published', () => {
    wrapper.setProps({
      toastManager: {
        add: toastManagerSpy,
      },
    });
    wrapper.setProps({
      createArticleSuccess: true,
    });
    wrapper.instance().render();
  });

  it('should get the categories', () => {
    wrapper.setProps({
      fetchCategoriesSuccess: false,
    });
    wrapper.instance().getCategorySelection(event);
  });

  it('should display error messages when there are errors', () => {
    const nextProps = {
      createArticleError: true,
      imageUploadError: true,
    };
    wrapper.setProps({
      toastManager: {
        add: toastManagerSpy,
      },
    });
    expect(
      wrapper.instance().shouldComponentUpdate(nextProps),
    ).toEqual(true);
  });

  it('should not update the state if no image is selected', () => {
    event = {
      preventDefault() {},
      target: {
        files: [false],
      },
    };
    const fileObject = wrapper.instance().onFileChangeHandler(event);
    expect(fileObject).toEqual(undefined);
  });

  it('should hide the featured image container if no image has been uploaded',
    () => {
      wrapper.setState({
        imageVisibility: true,
      });

      const imageDisplay = wrapper.find('.featuredImageContainer').length;
      expect(imageDisplay).toEqual(1);
    });
});
