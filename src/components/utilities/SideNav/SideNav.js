/* eslint-disable max-len */
import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import robot from '../../../assets/images/avatars/robot.svg';
import './sidenav.scss';

/**
 * @class
 * @description Class implements sidenav feature
 */
export default class SideNav extends Component {
  /**
   * @function
   * @returns {JSX} SideNav JSX
   */
  render() {
    return (
      <Fragment>
        <div id="sidenav" className="sidenav--show">
        <div className="side">
            <div className="side--logo">
            <a href="#!">Authors Haven</a>
            { this.props.isLoggedIn
              ? <div><img className="circle avat" src={robot} /></div>
              : null }
              </div>
            <div className="side-items">
              <a href="#">Categories</a>
            </div>
            {this.props.isLoggedIn ? <div className="side-items"><Link to='/create-article' className="waves-effect" href="#!">Write an article</Link></div>
              : <div className="side-items"><Link to='/signup' className="waves-effect" href="#!">Become a writer</Link></div>}
            <div className="side-items"><a className="waves-effect" href="#!">Help</a></div>
          </div>
          </div>
      </Fragment>
    );
  }
}

SideNav.propTypes = {
  isLoggedIn: PropTypes.any.isRequired,
};
