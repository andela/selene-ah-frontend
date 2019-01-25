import React from 'react';
import './HomeLoader.scss';

const HomeLoader = () => (
  <div className="skeleton" id="home--skeleton">
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
    <div className="hero article-hero mb-5"></div>
    <div>
      <div className="cards">
        <div className="holder">
          <div className="held">
            <div className="card-content">
              <div className="card card__has-shadow">
                <div className="skeleton--image skeleton--animate"></div>
              </div>
            </div>
          </div>
          <div className="held">
            <div className="card-content">
              <div className="card card__has-shadow">
                <div className="skeleton--image skeleton--animate"></div>
              </div>
            </div>
          </div>
          <div className="held">
            <div className="card-content">
              <div className="card card__has-shadow">
                <div className="skeleton--image skeleton--animate"></div>
              </div>
            </div>
          </div>
          <div className="held">
            <div className="card-content">
              <div className="card card__has-shadow">
                <div className="skeleton--image skeleton--animate"></div>
              </div>
            </div>
          </div>
          <div className="held">
            <div className="card-content">
              <div className="card card__has-shadow">
                <div className="skeleton--image skeleton--animate"></div>
              </div>
            </div>
          </div>
          <div className="held">
            <div className="card-content">
              <div className="card card__has-shadow">
                <div className="skeleton--image skeleton--animate"></div>
              </div>
            </div>
          </div>
          <div className="held">
            <div className="card-content">
              <div className="card card__has-shadow">
                <div className="skeleton--image skeleton--animate"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomeLoader;
