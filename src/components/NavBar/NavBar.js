import React, { Fragment } from 'react';
import './_navbar.scss';
import PropTypes from 'prop-types';

const NavBar = () => (
  <Fragment>
    <div className="navbar navbar__has-border">
      <div className="navbar--content wrapper">
        <div className="navbar--left__small">
          <span>
            <i data-feather="menu" className="icon" />
          </span>
          <div className="navbar--logo">AUTHORS HAVEN</div>
        </div>
        <div className="navbar--left">
          <div className="navbar--logo">AUTHORS HAVEN</div>
          <div className="navbar--links">
            <li className="navbar__has-dropdown">
              <a href="#">Categories</a>
              <div>
                <ul>
                  <li>
                    <a href="#">Design</a>
                  </li>
                  <li>
                    <a href="#">Tech</a>
                  </li>
                  <li>
                    <a href="#">Politics</a>
                  </li>
                  <li>
                    <a href="#">Culture</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Donate</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </div>
          <div className="searchbar">
            <form>
              <i data-feather="search" className="icon" />
              <input type="text" placeholder="Search" />
            </form>
          </div>
        </div>
        <div className="navbar--right">
          <div className="navbar--links">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#" className="navbar--button button">
                Get Started
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

NavBar.propTypes = {
  children: PropTypes.node,
  onPublishButtonClick: PropTypes.func,
};

export default NavBar;
