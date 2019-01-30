import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import * as actions from '../../../actions/authAction/socialAuth';

/**
 * @class Home
 * @extends {Component}
 */
export class VerifyAuth extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
  }

  /**
   *  @description checks for type of social auth
   *  @param {string} urlString
   * @memberof VerifyAuth
   * @returns {string} null
   */
  checkAuthType = (urlString) => {
    if (urlString.includes('twitter')) return 'twitter';
    if (urlString.includes('facebook')) return 'facebook';
    if (urlString.includes('google')) return 'google';
    return 'false';
  }

  /**
   *  @description get the base url from the url
   *  @param {string} urlType
   * @memberof VerifyAuth
   * @returns {string} null
   */
  getBaseUrl = (urlType) => {
    const url = process.env.BASE_URL;
    switch (urlType) {
      case 'twitter':
        return `${url}twitter/callback`;
      case 'facebook':
        return `${url}facebook/callback`;
      case 'google':
        return `${url}google/callback`;
      default:
        return null;
    }
  }

  /**
   * @method componentDidMount
   * @returns {boolean} changed state
   */
  componentDidMount() {
    const { history: { location: { search, pathname } } } = this.props;
    const socialToken = `${search}`;
    if (this.checkAuthType(pathname) === 'twitter') {
      this.props.socialAuth(this.getBaseUrl('twitter'), socialToken, 'twitter');
    }

    if (this.checkAuthType(pathname) === 'facebook') {
      this.props
        .socialAuth(this.getBaseUrl('facebook'), socialToken, 'facebook');
    }

    if (this.checkAuthType(pathname) === 'google') {
      this.props.socialAuth(this.getBaseUrl('google'), socialToken, 'google');
    }
  }


  /**
   * @returns {JSX} Html template
   * @memberof Home
   */
  render() {
    return (
      <Fragment>
        {this.props.isAuthenticated
          ? <Redirect to='/' /> : <Redirect to='/login' />}
      </Fragment>
    );
  }
}

VerifyAuth.propTypes = {
  socialAuth: PropTypes.func,
  history: PropTypes.object,
};

export const mapStateToProps = state => (
  {
    ...state.socialAuthReducer,
  }
);

export const
  mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VerifyAuth);
