import React, { Fragment } from 'react';
import heroImage from '../../../assets/images/hero_img.svg';
import './Hero.scss';

const Hero = () => (
  <Fragment>
    <div className="hero hide-on-medium">
      <div className="hero--content">
          <div className="hero--image">
            <img className="image" src={heroImage} />
            </div>
          <div className="hero--box">
            <h3 className="hero--heading">AUTHORS HAVEN</h3>
            <p className="tagline">Where writers meet readers</p>
            <a href="#" className="button button--primary">Start Reading</a>
          </div>
      </div>
    </div>
  </Fragment>
);

export default Hero;
