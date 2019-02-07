import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './comment.scss';
import likesImage from '../../assets/images/thumbs-up.svg';
import userFace from '../../assets/images/user-icon.png';
import convertTS from '../../helpers/dateStamp';


/**
     * @returns {JSX} The single comment box html
     * @param {object} props - The data that is passed in.
     */
const EachComment = props => (
  <Fragment>
    <div>
      <div className='user-comments'>
        <div className='user-details'>
          <div>
            <img className='user-image'
              src={props.commentDetails.author.imageUrl || userFace} />
          </div>
          <div className='user-info'>
            <h6>{props.commentDetails.author.userName}</h6>
            <p className='comment-date'>
              {convertTS(props.commentDetails.createdAt)}</p>
          </div>
        </div>
        <div className='user-comment-text'>
          <p>{props.commentDetails.content}</p>
        </div>
        <div className='liked-section'>
          <img className='like-image' src={ likesImage } />
          <p className='comment-likes'>
            {props.commentDetails.likesCount === 0
              ? '' : props.commentDetails.likesCount }</p>
        </div>
      </div>
    </div>
  </Fragment>
);

EachComment.propTypes = {
  commentDetails: PropTypes.object,
};
export default EachComment;
