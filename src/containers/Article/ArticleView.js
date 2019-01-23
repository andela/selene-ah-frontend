import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Article from './Article';
import articleViewActions from '../../actions/articleAction/articleView';
import './ArticleView.scss';
import ArticleLoader from '../../components/misc/ArticleLoader/ArticleLoader';

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
  }

  static propTypes = {
    history: PropTypes.object,
  }

  /**
   * @description Renders the Article Component
   * @returns {JSX} Article View JSX
   */
  render() {
    return (
     <Fragment>
        { (this.props.isFetchingArticle || this.props.isFetchingFollowers)
          && <ArticleLoader />}
        { (this.props.response)
          && (!this.props.isFetchingArticle)
          && <Article {...this.props}/> };
     </Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.articleViewReducer,
});

export const mapDispatchToProps = dispatch => bindActionCreators(
  articleViewActions,
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleView);
