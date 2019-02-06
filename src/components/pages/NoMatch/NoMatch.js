import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import noMatchImage from '../../../assets/images/undraw_navigation_lytx.svg';
import './no-match.scss';

/**
 * @description - 404 page
 * @returns {JSX} - 404 page template
 */
const NoMatch = () => (
  <Fragment>
      <main className="pr fixed-body">
      <div className="box pa">
        <div className="message">
          <p>Seems like you are <br /> lost!</p>
          <Link
            className="color-primary"
            to="/">
              <span>&#8592;</span>Back Home
          </Link>
        </div>
        <div className="image">
          <img
            src={noMatchImage}
            alt="Woman in location 404"
            width="600"
          />
        </div>
      </div>
      <h1 className="noMatch pa">404</h1>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </main>
  </Fragment>
);

export default NoMatch;
