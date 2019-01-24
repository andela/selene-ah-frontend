import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import { Navbar } from '../../components/utilities';
import config from '../../config';
import convertTS from '../../helpers/dateStamp';
import LikeReaction from '../Reaction/LikeReaction';
import isLikedByUser from '../Reaction/helpers';
import decodeToken from '../../helpers/validationHelpers/decodeToken';

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

  static propTypes = {
    response: PropTypes.object,
  }

  /**
   * @returns {JSX} HTML template
   * @memberof Article
   */
  render() {
    let id;
    decodeToken() === null ? id = '' : { id } = decodeToken();
    return (
      <div id="article">
        <Navbar isLoggedIn={this.state.isLoggedIn}
        changeSidenav={this.changeSidenav} />
        <section className="author-section container"
          style={{ boxShadow: 'none' }}>
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
        <section className="body container" style={{ boxShadow: 'none' }} >
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
        <div className='like-icon container' >
          <LikeReaction
            isLiked={isLikedByUser(
              this.props.response.article.likedUsers, id,
            )}
            articleId={this.props.response.article.id}
            likeCount={this.props.response.vote.voteCount.likeCount}
          />
        </div>
      </div>
    );
  }
}

export default Article;
