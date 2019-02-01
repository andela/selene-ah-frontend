import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * @class formContainer
 */
export default class FormContainer extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string,
    children: PropTypes.any,
    onSubmit: PropTypes.func,
    loginId: PropTypes.string,
    containerId: PropTypes.string,
    formContainer: PropTypes.string,
  }

  /**
   * @function
   * @returns {JSX} JSX
   */
  render() {
    return (
      <Fragment>
        <div className="login-container" id={this.props.containerId}>
          <div className="login-wrapper" id={this.props.loginId}>
              <div className={`${this.props.formContainer
                || 'form-container'}`}>
                <form onSubmit={this.props.onSubmit}>
                <div className="header-group">
                  <h3 className="header-text">{this.props.header}</h3>
                  <p className="subheader-text">{this.props.subHeader}</p>

                </div>
                  {this.props.children}
                </form>
              </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
