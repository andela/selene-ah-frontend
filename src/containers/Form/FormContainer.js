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
            <h3>{this.props.header}</h3>
            <p>{this.props.subHeader}</p>
              <div className="form-container">
                <form onSubmit={this.props.onSubmit}>
                  {this.props.children}
                </form>
              </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
