import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import { Navbar } from '../../components/utilities';
import config from '../../config';
import convertTS from '../../helpers/dateStamp';

/**
 * @description Returns article based on the this.props given
 * @param {object} this.props
 * @returns {JSX} Article JSX
 */
class Article extends React.Component {
  state = {
    sidenav: false,
    isLoggedIn: localStorage.getItem('token') || false,
    initial: [],
  };

  changeSidenav = () => {
    this.setState({ sidenav: !this.state.sidenav });
  };

  /**
   * @returns {JSX} HTML template
   * @memberof Article
   */
  render() {
    return (
      <div id="article">
        <Navbar isLoggedIn={this.state.isLoggedIn}
        changeSidenav={this.changeSidenav} />
        <section className="author-section container">
          <div className="author-box">
            <div className="author-img">
              <Link to='#' className="author-avatar">
                <img src={!this.props.response.article.author.imageUrl
                  ? config.defaultImageUrl
                  : this.props.response.article.author.imageUrl} />
              </Link>
            </div>
            <div className="author-bio">
              <div>
                <Link to="#" className="author-name">{
                    this.props.response.article.author.userName
                  }</Link>
                <span><button>Follow</button></span>
              </div>
              <div className="article-stat">
                <span>
                  { convertTS(this.props.response.article.createdAt) }
                </span>
                <span>-</span>
                <span>{
                  this.props.response.article.readTime === 1
                    ? `${this.props.response.article.readTime} min read`
                    : `${this.props.response.article.readTime} mins read`
                }</span>
              </div>
            </div>
          </div>
        </section>
        <section className="body container">
        {
          this.props.response.article.imageUrl
          && <div className="article-img"
          style={{
            backgroundImage:
            `url(${this.props.response.article.imageUrl})`,
          }}
          ></div>
        }
        <div className="text-center">
          <h1 className="article-title">{this.props.response.article.title}</h1>
        </div>
        {renderHTML(this.props.response.article.body)}
        </section>
      </div>
    );
  }
}

Article.propTypes = {
  response: PropTypes.object,
};

export default Article;
