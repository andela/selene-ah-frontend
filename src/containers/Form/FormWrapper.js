import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import PurpleImage from '../../assets/images/purple circle.svg';

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
    imageId: PropTypes.string,
    changeClass: PropTypes.string,
    changeForm: PropTypes.string,
  }

  /**
   * @function
   * @returns {JSX} JSX
   * @description JSX Template
   */
  render() {
    return (
      <div className="row">
      <div className={`
          ${this.props.changeClass || 'img-container-form'} row`}></div>
      <div className="row">
        <div className='form-nav'>
          <Link className='navbar--logo' to='/'>AUTHORS HAVEN</Link>
        </div>
      </div>
      <div className="row">
          <div className="content col s12">
            <div className="img-container col m6">
              <div className="flex-wrapper">
                <div className="image-container"
                  style={
                    {
                      background: `url(${this.props.imageUrl})
                        no-repeat center center / contain`,
                    }
                    }>
                </div>
              </div>
            </div>
          <div className="col m6 s12" id="adjust-container">
            <div className={`
          ${this.props.changeForm || 'inner-form-container'}`}
          >
            <div className="form-content">
            {this.props.children}
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
