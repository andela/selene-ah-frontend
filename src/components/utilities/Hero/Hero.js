import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../../assets/images/hero_img.svg';
import './hero.scss';

/**
 * @description - Hero Component
 * @param {object} props
 * @returns {JSX} - Hero JSX template
 */
const Hero = () => (
  <Fragment>
    <div className="hero hide-on-medium">
      <div className="hero--content">
        <div className="hero--image">
          <img className="image hide-on-med-and-down" src={heroImage} />
        </div>
        <div className="hero--box">
          <h3 className="hero--heading">AUTHORS HAVEN</h3>
          <p className="tagline">Where writers meet readers</p>
          <Link
            to="/login"
            className="button button--primary"
          >Start Reading</Link>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Hero;
