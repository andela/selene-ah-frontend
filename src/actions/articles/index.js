import fetchCategories from './categoryActions';
import { postArticle, postUpdatedArticle } from './articleActions';
import uploadImageAction from './imageUploadActions';
import articleViewActions from '../articleAction/articleView';

export default {
  fetchCategories,
  postArticle,
  uploadImageAction,
  postUpdatedArticle,
  ...articleViewActions,
};
