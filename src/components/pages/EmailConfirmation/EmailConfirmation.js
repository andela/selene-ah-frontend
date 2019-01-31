import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AlmostDone from '../../../assets/images/confirm.svg';
import './emailConfirmation.scss';

const EmailConfirmation = () => (
    <Fragment>
      <div className="pr">
        <div id="emailVerification">
          <h2>Thanks for confirming your email</h2>
          <img src={AlmostDone} className="responsive-img email-confirm"/>
        <Link to='/' className='btn'>
          GO HOME!
        </Link>
        </div>
      </div>
    </Fragment>
);

export default EmailConfirmation;
