import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Cards.scss';

const CardParent = props => (
  <Fragment>
    <div className="section">
      <div className="container">
      <p className="article-by"><strong>Articles by you</strong></p>
        </div>
          <div className="cards">
            <div className={`holder ${props.classname}`}>
              {props.children}
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
