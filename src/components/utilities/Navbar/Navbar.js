import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => (
  <Fragment>
    <div id="navbar" className="navbar__has-border">
      <div className="navbar--content wrapper">
        <div className="navbar--left__small">
          <span><i data-feather="menu" className="icon"></i></span>
          <Link to='/' className="navbar--logo">AUTHORS HAVEN</Link>
        </div>
        <div className="navbar--left">
          <Link to='/' className="navbar--logo">AUTHORS HAVEN</Link>
          <div className="navbar--links">
            <li className="navbar__has-dropdown">
              <a href="#">Categories</a>
              <div>
                <ul>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Tech</a></li>
                  <li><a href="#">Politics</a></li>
                  <li><a href="#">Culture</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#">Something</a></li>
            <li><a href="#">Help</a></li>
          </div>
          <div className="searchbar">
            <form>
              <i data-feather="search" className="icon"></i>
              <input type="text" placeholder="Search" />
            </form>
          </div>
        </div>
        <div className="navbar--right">
          <div className="navbar--links">
            <li><a href="#">Login</a></li>
            <li>
              <a href="#" className="navbar--button button">Get Started</a>
            </li>
          </div>
        </div>
        </div>
      </div>
  </Fragment>
);

export default Navbar;
