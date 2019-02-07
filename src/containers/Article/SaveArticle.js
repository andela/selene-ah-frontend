import React, { Fragment, Component } from 'react';
import { withToastManager } from 'react-toast-notifications';
import PropTypes from 'prop-types';
import { Input, Navbar, SideNav } from '../../components/utilities';
import './article.scss';
import {
  INVALID_TITLE,
  INVALID_ARTICLE_CONTENT,
  NO_CATEGORY,
  CREATE_ARTICLE_ERROR,
  IMAGE_UPLOAD_ERROR,
  ARTICLE_SUCCESS,
  INVALID_UPDATE_TITLE,
  INVALID_ARTICLE_UPDATE_CONTENT,
  ARTICLE_UPDATE_SUCCESS,
  TOAST_ERROR_OBJECT,
  TOAST_SUCCESS_OBJECT,
  UPDATE_ARTICLE_ERROR,
} from '../../helpers/articleHelpers/articleConstants';
import TextEditor from './TextEditor';
import EditorHeader from './EditorHeader';

/**
 * @description Class for creating an article
 * @extends {Component}
 */
export class SaveArticle extends Component {
  state = {
    title: null,
    body: null,
    featuredImage: null,
    categoryId: null,
    uploadedImageFile: null,
    imageVisibility: null,
    fileSelected: false,
    sidenav: false,
    editAction: false,
  }

  static propTypes = {
    fetchCategories: PropTypes.func,
    postArticle: PropTypes.func,
    fetchCategoriesResponse: PropTypes.any,
    uploadImageAction: PropTypes.func,
    imageUploadedResponse: PropTypes.any,
    isFetchingCategories: PropTypes.bool,
    fetchCategoriesError: PropTypes.bool,
    fetchCategoriesSuccess: PropTypes.bool,
    isCreatingArticle: PropTypes.bool,
    isUpdatingArticle: PropTypes.bool,
    createArticleResponse: PropTypes.any,
    createArticleError: PropTypes.bool,
    createArticleSuccess: PropTypes.bool,
    updateArticleSuccess: PropTypes.bool,
    toastManager: PropTypes.object.isRequired,
    imageUploadError: PropTypes.bool,
    history: PropTypes.object,
    isUploadingImage: PropTypes.bool,
    user: PropTypes.any,
    location: PropTypes.object,
    response: PropTypes.object,
    fetchArticle: PropTypes.func,
    postUpdatedArticle: PropTypes.func,
    updateArticleError: PropTypes.bool,
  };

  /**
 * @memberof CreateArticle
 * @param { object } e - event object
 * @returns { null } just updates the state
 */
  titleChangeHander = (e) => {
    e.preventDefault();
    const title = e.target.value;
    this.setState({ title });
  }

  /**
   *@description - method to toggle the sideNav
   * @memberof CreateArticle
   * @returns { undefined }
   */
  changeSidenav = () => this.setState({ sidenav: !this.state.sidenav });

  /**
 * @memberof CreateArticle
 * @param { object } event - event object
 * @returns { null } just updates the state
 */
  getCategorySelection = (event) => {
    event.preventDefault();
    if (!this.props.fetchCategoriesSuccess) { this.props.fetchCategories(); }
    const categoryId = event.target.options[event.target.selectedIndex].value;
    this.setState({ categoryId });
  }

  /**
 * @description - function to handle the submission of an article
 * @memberof CreateArticle
 * @param { object } e object
 * @returns { null } does not return anything
 */
  submitArticle = async () => {
    if (this.state.fileSelected) await this.uploadImageHandler();
    if (!this.state.title || this.state.title.length < 5
      || this.state.title.length > 200) {
      this.props.toastManager.add(INVALID_TITLE, TOAST_ERROR_OBJECT);
      return false;
    }

    if (!this.state.body || this.state.body.length < 5) {
      this.props.toastManager.add(INVALID_ARTICLE_CONTENT, TOAST_ERROR_OBJECT);
      return false;
    }

    if (!this.state.categoryId) {
      this.props.toastManager.add(NO_CATEGORY, TOAST_ERROR_OBJECT);
      return false;
    }

    const articleObject = {
      body: this.state.body,
      categoryId: this.state.categoryId,
      imageUrl: this.props.imageUploadedResponse,
      title: this.state.title,
    };

    this.props.postArticle(articleObject);
  }

  /**
 * @description - function to handle the submission of an article
 * @memberof CreateArticle
 * @param { object } e object
 * @returns { null } does not return anything
 */
updateArticle = async () => {
  const articleObject = { id: this.state.articleId };
  if (this.state.fileSelected) await this.uploadImageHandler();
  if ((this.state.title && this.state.title.length < 5)
    || this.state.title.length > 200) {
    this.props.toastManager.add(INVALID_UPDATE_TITLE, TOAST_ERROR_OBJECT);
    return false;
  }

  if (this.state.body && this.state.body.length < 12) {
    this.props.toastManager.add(INVALID_ARTICLE_UPDATE_CONTENT,
      TOAST_ERROR_OBJECT);
    return false;
  }

  this.props.imageUploadedResponse
    ? articleObject.imageUrl = this.props.imageUploadedResponse : null;

  this.state.body ? articleObject.body = this.state.body : null;
  this.state.title ? articleObject.title = this.state.title : null;
  this.state.categoryId
    ? articleObject.categoryId = this.state.categoryId : null;

  this.props.postUpdatedArticle(articleObject);
}

/**
 * @static
 * @memberof CreateArticle
 * @description - method to convert an uploaded file to readable format
 * @param { object } file - file object
 * @returns { undefined } - returns nothing
 */
readUploadedFile = (file) => {
  if (file) {
    const fileReader = new FileReader();
    fileReader.addEventListener('load', () => {
      this.setState({
        featuredImage: fileReader.result,
      });
    });
    fileReader.readAsDataURL(file);
  }
}

/**
 *
 *@description - method to get the uploaded file from the form field
 * @memberof CreateArticle
 * @param { object } event - the event object
 * @returns { undefined } - just updates the state
 */
onFileChangeHandler = (event) => {
  event.preventDefault();
  const uploadedImage = event.target.files[0];
  if (uploadedImage) {
    this.setState({ fileSelected: true });
    this.setState({ uploadedImageFile: uploadedImage });
    this.setState({ imageVisibility: true });
    this.readUploadedFile(uploadedImage);
  }
}

  /**
 * @description - function to upload image to cloudinary
 * @param { object } e
 * @memberof CreateArticle
 * @returns { null }- returns nothing
 */
  uploadImageHandler = async () => {
    const formData = new FormData();
    formData.append('file', this.state.uploadedImageFile);
    formData.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET);
    await this.props.uploadImageAction(formData);
  }

  /**
 * @memberof CreateArticle
 * @param { object } body - article body
 * @returns { null } just updates the state
 */
getArticleBody = body => this.setState({ body });

/**
   * @memberof CreateArticle
   * @description - function to be executed once the component mounts
   * @returns { undefined }
   */
async componentDidMount() {
  if (!this.props.user) this.props.history.push('/login');
  await this.props.fetchCategories();
  if (this.props.location.pathname.split('/')[1] === 'create-article') {
    return false;
  }
  if (!this.props.response) {
    const slug = this.props.location.pathname.split('/')[2];
    await this.props.fetchArticle(slug, this.props.history);
  }
  this.setState({
    title: this.props.response.article.title,
    articleId: this.props.response.article.id,
    body: this.props.response.article.body,
    editAction: true,
  });

  if (this.props.response.article.imageUrl) {
    this.setState({
      featuredImage: this.props.response.article.imageUrl,
      imageVisibility: true,
    });
  }
}

/**
 *
 * @param {object} nextProps
 * @param {object} nextState
 * @memberof CreateArticle
 * @returns { boolean } false
 */
shouldComponentUpdate(nextProps) {
  if (this.props.createArticleError !== nextProps.createArticleError
      && nextProps.createArticleError === true) {
    this.props.toastManager.add(CREATE_ARTICLE_ERROR, TOAST_ERROR_OBJECT);
  }

  if (this.props.imageUploadError !== nextProps.imageUploadError
      && nextProps.imageUploadError === true) {
    this.props.toastManager.add(IMAGE_UPLOAD_ERROR, TOAST_ERROR_OBJECT);
  }

  if (this.props.createArticleSuccess !== nextProps.createArticleSuccess
      && nextProps.createArticleSuccess === true) {
    this.setState({
      articleId: nextProps.createArticleResponse.data.article.id,
    });
    this.props.toastManager.add(ARTICLE_SUCCESS, TOAST_SUCCESS_OBJECT);
    const articleUrl = `article/${nextProps
      .createArticleResponse.data.article.slug}`;
    this.props.history.push(articleUrl);
  }

  if (this.props.updateArticleError !== nextProps.updateArticleError
      && nextProps.updateArticleError === true) {
    this.props.toastManager.add(UPDATE_ARTICLE_ERROR, TOAST_ERROR_OBJECT);
  }

  if (this.props.updateArticleSuccess !== nextProps.updateArticleSuccess
      && nextProps.updateArticleSuccess === true) {
    this.props.toastManager.add(ARTICLE_UPDATE_SUCCESS, TOAST_SUCCESS_OBJECT);
    const slug = this.props.location.pathname.split('/')[2];
    this.props.history.push(`/article/${slug}`);
  }
  return true;
}

/**
   * @description - function to render the component
   * @returns { JSX } - the JSX for the Create article component
   * @memberof CreateArticle
   */
render() {
  let categories = [<option key={'cat_select'}>Select a category</option>];
  if (this.props.fetchCategoriesResponse) {
    const categoriesObject = this.props.fetchCategoriesResponse.categories;
    if (categoriesObject) {
      categories = categories.concat(categoriesObject.map(category => (
        <option value={category.id} key={category.id}>{category.title}</option>
      )));
    }
  }
  const editorProps = {
    isUpdatingArticle: this.props.isUpdatingArticle,
    isUploadingImage: this.props.isUploadingImage,
    categories,
    updateArticle: this.updateArticle,
    isCreatingArticle: this.props.isCreatingArticle,
    createArticleSuccess: this.props.createArticleSuccess,
    getCategorySelection: this.getCategorySelection,
    onFileChangeHandler: this.onFileChangeHandler,
    editAction: this.state.editAction,
    submitArticle: this.submitArticle,
  };
  return (
    <Fragment>
      { this.state.sidenav ? <div className="sidebar-overlay"
        onClick={() => this.changeSidenav() }> </div> : null}

      { this.state.sidenav ? <SideNav isLoggedIn={ true }
        changeSidenav={ this.changeSidenav} /> : null }

      <Navbar isLoggedIn={true} changeSidenav={this.changeSidenav}/>
      <EditorHeader {...editorProps}/>
      <div className="editorContainer">
        <Input type="text" id="articleTitle"
          placeholder="Title"
          onChange={this.titleChangeHander}
          inputValue={this.state.title || ''}
          required />
        <div className={this.state.imageVisibility
          ? 'featuredImageContainer' : 'hiddenDisplay' }>
          <img src={this.state.featuredImage} alt="featured image" />
        </div>
        <TextEditor
          setArticleBody={this.getArticleBody} body={this.state.body}/>
      </div>
    </Fragment>
  );
}
}

export default withToastManager(SaveArticle);
