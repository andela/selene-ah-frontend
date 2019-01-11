import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import robot from '../../../assets/images/avatars/robot.svg';
import bell from '../../../assets/images/bell.svg';
import './Navbar.scss';

/**
 *
 *
 * @class Navbar
 * @extends {React.Component}
 */

const Navbar = props => <Fragment>
    <div id="navbar" className="navbar__has-border">
      <div className="navbar--content wrapper">
      <div className="flex">
        <div>
          <span className="hide-on-large-only"
          onClick={() => props.changeSidenav()}>
            <i data-feather="menu" className="icon"></i>
            </span>
          <Link to='/' className="navbar--logo">AUTHORS HAVEN</Link>
        </div>
        <div className="navbar--left hide-on-med-and-down">
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
        </div>
        {props.isLoggedIn
          ? <div className="navbar--right">
          <div className="navbar--links bell">
            <li><img src={bell} className="icon bell" /></li>
            <li>
              <a href="#" className="hide-on-med-and-down">
              <img className="circle avar" src={robot}></img>
              </a>
            </li>
          </div>
        </div>
          : <div className="navbar--right">
         <div className="navbar--links">
           <li><Link to='/login'>Login</Link></li>
           <li>
             <a href="#"className="navbar--button
             button hide-on-med-and-down">Get Started</a>
           </li>
         </div>
       </div>}
        </div>
      </div>
  </Fragment>;

Navbar.propTypes = {
  isLoggedIn: PropTypes.any.isRequired,
  changeSidenav: PropTypes.func.isRequired,
};

export default Navbar;
