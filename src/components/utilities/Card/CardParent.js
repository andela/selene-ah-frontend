import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './card-parent.scss';

/**
 * @description - CardParent Component
 * @param {object} props
 * @returns {JSX} - CardParent JSX template
 */
const CardParent = props => (
  <Fragment>
    <div className="section">
      <div className="wrapper">
        <div className="section--header">
        <h3>Popular Today</h3>
        </div>
          <div className="cards">
            <div className={`holder ${props.classname}`}>
              {props.children}
            </div>
        </div>
      </div>
    </div>
  </Fragment>
);

CardParent.propTypes = {
  children: PropTypes.any.isRequired,
  classname: PropTypes.string,
};

export default CardParent;
