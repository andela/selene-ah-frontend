import React, { Fragment } from 'react';
import AlmostDone from '../../../assets/images/almost_done.svg';
import './EmailVerification.scss';

const EmailVerification = () => (
    <Fragment>
      <div className="pr">
        <div id="emailVerification">
          <h2>Almost Done</h2>
          <img src={AlmostDone} className="responsive-img"/>
          <p>just click on the link sent to your email address.</p>
        </div>
      </div>
    </Fragment>
);

export default EmailVerification;
