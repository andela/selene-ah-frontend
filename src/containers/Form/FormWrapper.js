import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PurpleImage from '../../assets/images/purple circle.svg';

/**
 * @description FormWrapper JSX Component
 * @class
 */
export default class FormWrapper extends Component {
  static propTypes = {
    prop: PropTypes.string,
    imageUrl: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string]).isRequired,
    children: PropTypes.any.isRequired,
    displayImage: PropTypes.bool.isRequired,
  }

  /**
   * @function
   * @returns {JSX} JSX
   * @description JSX Template
   */
  render() {
    return (
      <Fragment>
        <div className='form-nav'>
          <Link className='navbar--logo' to='/'>AUTHORS HAVEN</Link>
        </div>
        { this.props.displayImage
          && <img src={PurpleImage} className="background-image"/>
        }
        <div className="flex-wrapper">
          <div className="image-container">
            <img className="img-responsive" src={`${this.props.imageUrl}`} />
          </div>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}
