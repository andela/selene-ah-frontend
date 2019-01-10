import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * @class
 */
export default class FormContainer extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
    children: PropTypes.any,
    onSubmit: PropTypes.func.isRequired,
  }

  /**
   * @function
   * @returns {JSX} JSX
   */
  render() {
    return (
      <Fragment>
        <div className="login-container">
          <div className="login-wrapper">
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
