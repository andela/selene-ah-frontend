import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.scss';

/**
 * @class
 */
class Navbar extends Component {
  /**
   * @function
   * @returns {JSX} Navbar JSX
   */
  render() {
    return (
      <Fragment>
        <div id="navbar" className="navbar navbar__has-border">
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
  }
}

Navbar.propTypes = {
  onClick: PropTypes.func,
};

export default Navbar;
