import React from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';

import Select from '../../components/utilities/Select/Select';
import { Button } from '../../components/utilities';
import './spinner.scss';

const EditorHeader = props => (
  <div className="editorActions container">
    <Select
      name="category"
      classes="categorySelect"
      id="categorySelect"
      onChange={props.getCategorySelection}
    >{ props.categories }
    </Select>

    <input
      type="file"
      accept="image/*"
      id="featureImage"
      onChange={props.onFileChangeHandler}
    />
    {!props.createArticleSuccess && !props.editAction
  && <Button
    id="publish"
    classes="button-primary"
    onClick={props.submitArticle}
  >
    {
      !props.isUploadingImage
        && !props.isCreatingArticle
        && 'Publish'
    }
    <ClipLoader
      sizeUnit={'px'}
      size={15}
      color={'#fff'}
      loading={props.isCreatingArticle
          || props.isUploadingImage }
    />
  </Button>
    }
    {(props.createArticleSuccess || props.editAction)
  && <Button
    id="editArticle"
    classes="button-primary"
    onClick={props.updateArticle}
  >
    {
      !props.isUploadingImage
      && !props.isUpdatingArticle
      && 'Update'
    }
    <ClipLoader
      sizeUnit={'px'}
      size={15}
      color={'#fff'}
      loading={props.isUpdatingArticle
        || props.isUploadingImage }
    />
  </Button>
    }
  </div>

);

EditorHeader.propTypes = {
  isUpdatingArticle: PropTypes.bool.isRequired,
  isUploadingImage: PropTypes.bool.isRequired,
  categories: PropTypes.any.isRequired,
  updateArticle: PropTypes.func.isRequired,
  isCreatingArticle: PropTypes.bool.isRequired,
  createArticleSuccess: PropTypes.bool.isRequired,
  getCategorySelection: PropTypes.func.isRequired,
  onFileChangeHandler: PropTypes.func.isRequired,
  editAction: PropTypes.bool.isRequired,
  submitArticle: PropTypes.func.isRequired,
};

export default EditorHeader;
