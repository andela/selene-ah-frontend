import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import renderHtml from 'react-render-html';
import { withToastManager } from 'react-toast-notifications';
import getArticleActions from '../../../actions/userAction/getArticle';
import './user-article.scss';
import ArticleParent from '../../utilities/Card/ArticleParent';
import Card from '../../utilities/Card/Card';
import trimBody from '../../../helpers/trimArticleTitle';

/**
 * @class userArticle
 * @extends {Component}
 */
export class UserArticle extends Component {
  static propTypes = {
    articleDispatcher: PropTypes.func,
    articleData: PropTypes.array,
  };

  /**
   * @returns {articles} - get the user's article
   */
  componentDidMount() {
    const { articleDispatcher } = this.props;
    articleDispatcher();
  }

  /**
   * @description
   * @return {JSX} - returns the page JSX
   */
  render() {
    const articles = (this.props.articleData || []).map(article => (
      <Card key={article.id} title={article.title.slice(0, 40)}
      body={renderHtml(trimBody(article.body))} imageUrl={article.imageUrl}
      readTime={article.readTime} slug={article.slug}
      author={article.author} name={article.author}></Card>
    ));
    return (
      <div className="article-container">
      <ArticleParent classname="fix-holder">
        {articles.length < 1
          ? <p className='article-by'>You have no articles.
            <Link to="/create-article">
              <span>&nbsp; Start Writing</span></Link></p>
          : articles}
      </ArticleParent>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.profile,
});

export const mapDispatchToProps = dispatch => bindActionCreators(
  getArticleActions,
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withToastManager(UserArticle));
