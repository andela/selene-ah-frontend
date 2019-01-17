import React, { Fragment } from 'react';
import noMatchImage from '../../../assets/images/undraw_navigation_lytx.svg';
import './NoMatch.scss';

const NoMatch = () => (
  <Fragment>
      <main className="pr fixed-body">
      <div className="box pa">
        <div className="message">
          <p>Seems like you are <br /> lost!</p>
          <a
            className="color-primary"
            href="#">
              <span>&#8592;</span>Back Home
          </a>
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
