import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Cards.scss';

const CardParent = props => (
  <Fragment>
    <div className="section">
      <p className="article-by">Your Articles</p>
        </div>
          <div className="cards">
            <div className={`holder ${props.classname}`}>
              {props.children}
            </div>
      </div>
  </Fragment>
);

CardParent.propTypes = {
  children: PropTypes.any.isRequired,
  classname: PropTypes.string,
};

export default CardParent;
