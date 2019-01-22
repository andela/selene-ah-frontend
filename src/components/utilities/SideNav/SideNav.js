/* eslint-disable max-len */
import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SideNav.scss';

/**
 * @class
 * @description Class implements sidenav feature
 */
export default class SideNav extends Component {
  state = {
    open: false,
  }

  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  /**
   * @param {event} e
   * @returns {void}
   * @memberof SideNav
   */
  handleCloseClick = (e) => {
    e.preventDefault();
    this.setState({
      open: false,
    });
  }

  /**
   * @function
   * @returns {JSX} SideNav JSX
   */
  render() {
    return (
      <Fragment>
        <div id="sidenav" className={this.state.open ? 'sidenav--show' : ''}>
          <ul>
            {this.props.children}
          </ul>
          <Link to="/" onClick={this.handleCloseClick} className="sidenav--close">X</Link>
        </div>
      </Fragment>
    );
  }
}
