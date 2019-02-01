import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Article from './Article';
import articleViewActions from '../../actions/articleAction/articleView';
import './ArticleView.scss';
import ArticleLoader from '../../components/misc/ArticleLoader/ArticleLoader';
import fetchAverageRating
  from '../../actions/Ratings/AverageRatingActionCreators';
import postRating from '../../actions/Ratings/postRatingActionCreators';
import fetchUserRatings from '../../actions/Ratings/userRatingActionCreators';

/**
 * @description Handles our articleView functionality
 * @class
 */
export class ArticleView extends Component {
  static propTypes = {
    fetchArticle: PropTypes.func,
    isFetchingArticle: PropTypes.bool,
    response: PropTypes.object,
    location: PropTypes.object,
    fetchFollowers: PropTypes.func,
    isFetchingFollowers: PropTypes.bool,
    isUserLoading: PropTypes.bool,
    isAverageLoading: PropTypes.bool,
    fetchAverageRating: PropTypes.func,
    fetchUserRating: PropTypes.func,
    user: PropTypes.object,
  };

  /**
   * @param {object} props
   * @returns {void}
   */
  async componentDidMount() {
    document.body.classList.add('bg-green');
    const slug = this.props.location.pathname.split('/')[2];
    await this.props.fetchFollowers();
    await this.props.fetchArticle(slug, this.props.history);
    await this.props.fetchAverageRating(this.props.response.article.id);
    this.props.user
    && await this.props.fetchUserRating(this.props.response.article.id);
  }

  static propTypes = {
    history: PropTypes.object,
  }

  /**
   * @description Renders the Article Component
   * @returns {JSX} Article View JSX
   */
  render() {
    const {
      isFetchingFollowers,
      isFetchingArticle,
      isAverageLoading,
    } = this.props;
    return (
  <Fragment>
        { (isFetchingArticle
          || isFetchingFollowers)
          && <ArticleLoader />}
        { (this.props.response)
          && (!isFetchingArticle || !isAverageLoading || !isFetchingFollowers)
          && <Article {...this.props}/> };
     </Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.articleViewReducer,
  ...state.fetchAverageRating,
  ...state.postRating,
  ...state.fetchUserRatings,
});

export const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...fetchAverageRating,
    ...postRating,
    ...fetchUserRatings,
    ...articleViewActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleView);
