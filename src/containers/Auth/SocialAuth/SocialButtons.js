import React, { Fragment } from 'react';
import {
  SocialButton,
} from '../../../components/utilities';

const SocialButtons = () => {
  const socialMediaLogin = [{
    className: 'google-btn',
    key: 'google',
    url: process.env.GOOGLE_URL,
  },
  {
    className: 'facebook-btn',
    key: 'facebook',
    url: process.env.FACEBOOK_URL,

  },
  {
    className: 'twitter-btn',
    key: 'twitter',
    url: process.env.TWITTER_URL,
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
