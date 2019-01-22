import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import { Navbar } from '../../components/utilities';
import config from '../../config';
import convertTS from '../../helpers/dateStamp';

/**
 * @description Returns article based on the props given
 * @param {object} props
 * @returns {JSX} Article JSX
 */
const Article = props => (
  <div id="article">
    <Navbar />
    <section className="author-section container">
      <div className="author-box">
        <div className="author-img">
          <Link to='#' className="author-avatar">
            <img src={!props.response.article.author.imageUrl
              ? config.defaultImageUrl
              : props.response.article.author.imageUrl} />
          </Link>
        </div>
        <div className="author-bio">
          <div>
            <Link to="#" className="author-name">{
                props.response.article.author.userName
              }</Link>
            <span><button>Follow</button></span>
          </div>
          <div className="article-stat">
            <span>
              { convertTS(props.response.article.createdAt) }
            </span>
            <span>-</span>
            <span>{
              props.response.article.readTime === 1
                ? `${props.response.article.readTime} min read`
                : `${props.response.article.readTime} mins read`
            }</span>
          </div>
        </div>
      </div>
    </section>
    <section className="body container">
    {
      props.response.article.imageUrl
      && <div className="article-img"
      style={{ backgroundImage: `url(${props.response.article.imageUrl})` }}
      ></div>
    }
    <div className="text-center">
      <h1 className="article-title">{props.response.article.title}</h1>
    </div>
    {renderHTML(props.response.article.body)}
    </section>
  </div>
);

Article.propTypes = {
  response: PropTypes.object,
};

export default Article;
