import React from 'react';
import { shallow } from 'enzyme';
import Html from 'slate-html-serializer';
import rules from '../../../components/Editor/SerializerRules';
import { SaveArticle } from '../SaveArticle';

const html = new Html({ rules });
const spyFunction = jest.fn();
const bulkText = 'It should not submit the article if the title '
+ ' is less than 5 characters';

const props = {
  fetchArticle: spyFunction,
  isUpdatingArticle: false,
  postUpdatedArticle: spyFunction,
  fetchCategories: spyFunction,
  postArticle: spyFunction,
  uploadImageAction: spyFunction,
  uploadImageHandler: spyFunction,
  isUploadingImage: false,
  isCreatingArticle: false,
  createArticleSuccess: true,
  response: {
    article: {
      imageUrl: 'something',
    },
  },
  toastManager: {
    add: jest.fn(),
  },
  getCategorySelection: spyFunction,
  fetchCategoriesSuccess: false,
  history: {
    push: jest.fn(),
  },
  location: {
    pathname: 'selene/selene/create-article',
  },
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
  const wrapper = shallow(<SaveArticle {...props}/>);
  const wrapper2 = shallow(<SaveArticle {...props2}/>);
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

  it('Should update the state when the user types the article content', () => {
    wrapper.instance().getArticleBody('something');

    expect(wrapper.state().body).toEqual('something');
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

  it('It should not submit the article if the title is less than 5 characters',
    () => {
      wrapper.setState({
        title: 'ear',
        body: <p>ear</p>,
        categoryId: null,
      });
      wrapper.instance().submitArticle();
    });

  it('It should not submit the article if'
  + 'the title is more than 200 characters',
  () => {
    wrapper.setState({
      title: bulkText,
      body: null,
      categoryId: null,
    });
    wrapper.instance().submitArticle();
  });

  it('It should not submit the article if'
  + 'the body is less than 5 characters',
  () => {
    wrapper.setState({
      title: 'some text',
      body: '<p></p>',
      categoryId: '8e99e00ee9e0',
    });

    wrapper.instance().updateArticle();
  });

  it('It should not submit the article if categoryId is null',
    () => {
      wrapper.setState({
        title: 'some text',
        body: html.deserialize('some text'),
        categoryId: null,
      });
      wrapper.instance().submitArticle();
    });

  it('Should submit the article', () => {
    wrapper.setState({
      title: 'some text',
      body: html.deserialize(bulkText),
      categoryId: 'o890980ijnokjhlkdf',
    });
    wrapper.instance().submitArticle();
  });

  it('should display the side nav', () => {
    wrapper.setState({ sidenav: true });
    wrapper.find('.sidebar-overlay').simulate('click');
    wrapper.instance().changeSidenav();
  });

  it('Should not upload image if non is selected', () => {
    wrapper.setState({ fileSelected: false });
    wrapper.instance().submitArticle();
  });

  it('should upload the image if the file is selected', async () => {
    wrapper.setState({ fileSelected: true });
    await wrapper.instance().submitArticle();
  });

  it('should  update the state if an image is selected', () => {
    const event3 = {
      preventDefault() {},
      target: {
        files: [true],
      },
      options: [
        {
          value: 'idjfdf90898098',
        },
      ],
    };
    const fileObject = wrapper.instance().onFileChangeHandler(event3);
    expect(fileObject).toEqual(undefined);
  });

  it('Should check the title input field for change', () => {
    wrapper2.find('#articleTitle').simulate('change', event);
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
        add: spyFunction,
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

  it('should display response messages when update actions occur', () => {
    const nextProps = {
      createArticleError: true,
      imageUploadError: true,
      updateArticleError: true,
      updateArticleSuccess: true,
    };
    wrapper.setProps({
      toastManager: {
        add: spyFunction,
      },
    });
    expect(
      wrapper.instance().shouldComponentUpdate(nextProps),
    ).toEqual(true);
  });

  it('should display response messages when actions are successful', () => {
    const nextProps = {
      createArticleError: true,
      imageUploadError: true,
      createArticleSuccess: true,
      createArticleResponse: {
        data: {
          article: {
            id: '3jereirherherwrewre',
          },
        },
      },
    };
    wrapper.setProps({
      toastManager: {
        add: spyFunction,
      },
      createArticleSuccess: false,
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

  it('should fetch the article before updating if it has not been fetched',
    () => {
      wrapper.setProps({ response: null });
      wrapper.instance().componentDidMount();
    });

  it('should not fecth any article for creating articles',
    () => {
      const location = {
        pathname: 'selene/create-article',
      };
      wrapper.setProps({ location });
      wrapper.instance().componentDidMount();
    });

  it('should not update the image has not been uploaded', async () => {
    wrapper.setProps({ imageUploadedResponse: false });
    await wrapper.instance().updateArticle();
  });

  it('should update the image if an image has been selected', async () => {
    wrapper.setState({
      fileSelected: true,
      title: 'dav',
      body: html.deserialize('dav'),
    });
    wrapper.setProps({ imageUploadedResponse: true });
    await wrapper.instance().updateArticle();
  });

  it('should not update the image if an image has been selected', async () => {
    wrapper.setState({
      fileSelected: false,
      title: 'dav',
      body: html.deserialize('dav'),
    });
    wrapper.setProps({ imageUploadedResponse: true });
    await wrapper.instance().updateArticle();
  });

  it('should not update the body if no content was entered', async () => {
    wrapper.setState({
      body: null,
    });
    wrapper.setProps({ imageUploadedResponse: true });
    await wrapper.instance().updateArticle();
  });

  it('should not update the title if no content was entered', async () => {
    wrapper.setState({
      title: '',
    });
    await wrapper.instance().updateArticle();
  });

  it('should throw an error if the title is greater than 200', async () => {
    wrapper.setState({ title: bulkText, categoryId: '0970jkjeor89o0u' });
    await wrapper.instance().updateArticle();
  });
});
