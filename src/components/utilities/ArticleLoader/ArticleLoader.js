import React from 'react';

/**
 * @description - Article Loader Component
 * @returns {JSX} - Article Loader JSX template
 */
const ArticleLoader = () => (
  <div className="skeleton">
    <div className="navbar navbar__has-shadow">
      <div className="navbar--content wrapper">
        <div className="navbar--left">
          <span className="skeleton--rect"></span>
          <div className="navbar--links">
            <div className="flex-wrapper">
              <span className="skeleton--rect skeleton--rect__small"></span>
              <span className="skeleton--rect skeleton--rect__small"></span>
              <span className="skeleton--rect skeleton--rect__small"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hero mb-5"></div>
    <div className="container">
      <div className="body-line body-line__long"></div>
      <div className="body-line body-line__long"></div>
      <div className="body-line body-line__short"></div>
      <div className="mt-5">
        <div className="body-line body-line__short"></div>
        <div className="body-line body-line__long"></div>
      </div>
    </div>
  </div>
);

export default ArticleLoader;
