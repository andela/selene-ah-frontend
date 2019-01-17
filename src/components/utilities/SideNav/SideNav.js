/* eslint-disable max-len */
import React, { Fragment, Component } from 'react';
import './SideNav.scss';

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
          <ul>
            <li>
              <div className="user-view">
                <div className="background">
                  Image
                </div>
                <a href="#user">User</a>
                <a href="#name"><span className="white-text name">John Doe</span></a>
                <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
              </div>
            </li>
            <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
            <li><a href="#!">Second Link</a></li>
            <li><div className="divider"></div></li>
            <li><a className="subheader">Subheader</a></li>
            <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
          </ul>
          <a href="#" className="sidenav--close">X</a>
        </div>
      </Fragment>
    );
  }
}
