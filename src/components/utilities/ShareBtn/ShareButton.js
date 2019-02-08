import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import './share-button.scss';

/**
 * @description - ShareButton Component
 * @param {object} props
 * @returns {JSX} - ShareButton JSX template
 */
const ShareButton = props => (
  <div className="share-button">
    <p>Share</p>
    <div className="social">
      <li>
        <FacebookShareButton url={
          `${process.env.FRONTEND_API}${props.url}`
        }
        quote={props.title}
        >
          <FacebookIcon size={32} round={true}/>
        </FacebookShareButton>
      </li>
      <li>
        <TwitterShareButton url={
          `${process.env.FRONTEND_API}${props.url}`
        }
        title={props.title}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </li>
      <li>
        <EmailShareButton
          subject={props.title}
          url={`${process.env.FRONTEND_API}${props.url}`}
          body={`Have a look at this great article!!!🎉
                ${process.env.FRONTEND_API}${props.url}`}>
          <EmailIcon size={32} round={true}/>
        </EmailShareButton>
      </li>
    </div>
  </div>
);

ShareButton.propTypes = {
  url: PropTypes.any,
  title: PropTypes.string,
};

export default ShareButton;
