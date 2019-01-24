import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import robot from '../../../assets/images/avatars/robot.svg';

const Card = props => (
  <Fragment>
    <div className="held">
      <div className="card-content">
        <div className="card card__has-shadow">
          <div className="card--image"
          style={{ backgroundImage: `url(${props.imageUrl})` }}>
            <a href="#" className="card--link">
              <div className="hero-image">
              </div>
            </a>
          </div>
        </div>
        <div className="card--footer">
          <h4>{ props.title }</h4>
          <p>{ props.body }</p>
          <div className="card--info">
            <p className="card--avatar">
              <a href="#">
                <span><img className="circle"
                src={ props.author.imageUrl || robot }
                alt="Robot" /></span>
                <span>{props.author.userName}</span>
              </a>
            </p>
            <span className="card--time">
              <p>
                <i data-feather="clock" className="icon"></i>
                { props.readTime } mins
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  readTime: PropTypes.number.isRequired,
};

export default Card;
