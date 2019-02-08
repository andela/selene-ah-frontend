import React from 'react';
import { shallow } from 'enzyme';
import EditorHeader from '../EditorHeader';

const props = {
  isUpdatingArticle: false,
  isUploadingImage: false,
  categories: [],
  updateArticle: jest.fn(),
  isCreatingArticle: false,
  createArticleSuccess: false,
  getCategorySelection: jest.fn(),
  onFileChangeHandler: jest.fn(),
  editAction: false,
  submitArticle: jest.fn(),
};
let wrapper = shallow(<EditorHeader {...props}/>);
const event = {
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

describe('Editor Header ', () => {
  it('Should check the file input field for change', () => {
    expect(wrapper.find('#featureImage').simulate('change', event)).toBeTruthy;
  });

  it('Should check that a category has been selected', () => {
    expect(wrapper.find('#categorySelect').simulate(
      'change', event,
    )).toBeTruthy;
  });

  it('Should display the edit button once the article has been created',
    () => {
      props.createArticleSuccess = true;
      props.editAction = true;
      wrapper = shallow(<EditorHeader {...props}/>);
      const editButton = wrapper.find('#editArticle');
      expect(editButton.length).toEqual(1);
    });
});
