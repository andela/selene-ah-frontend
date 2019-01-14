import React, { Fragment } from 'react';
import {
  SocialButton,
} from '../../../components/utilities';

const SocialButtons = () => {
  const socialMediaLogin = [{
    className: 'google-btn',
    key: 'google',
    url: 'https://selene-ah-staging.herokuapp.com/api/v1/auth/google',
  },
  {
    className: 'facebook-btn',
    key: 'facebook',
    url: 'https://selene-ah-staging.herokuapp.com/api/v1/auth/facebook',

  },
  {
    className: 'twitter-btn',
    key: 'twitter',
    url: 'https://selene-ah-staging.herokuapp.com/api/v1/auth/twitter',
  },
  ].map(socialIcon => (
      <a href={socialIcon.url} key={socialIcon.key} className="social-btn">
        <SocialButton classes={socialIcon.className}/>
      </a>
  ));

  return (
    <Fragment>
      {socialMediaLogin}
    </Fragment>
  );
};

export default SocialButtons;
