import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './comment.scss';
import { ClipLoader } from 'react-spinners';
import * as Icon from 'react-feather';

/**
 * @returns {JSX} - The single comment box html
 * @param {object} props - The data that is passed in
 */
const WriteComment = props => (
  <Fragment>
    <div className='inner-container'>
      <div className='response-box'>
        <form className='comment-form'
          onSubmit={props.submitComment}>
          <div className='row first-layer'>
            <div className='col s1'>
              <Icon.MessageCircle className='comment-user-image'
                color='#5C5C5C'/>
            </div>
            <div className='comment-textareadiv col s11'>
              <textarea
                className='big-textarea'
                onClick={props.textFocus}
                value={props.content}
                onChange={props.inputChange} minLength='2'
                maxLength='150' placeholder='Write a comment' required>
              </textarea>
            </div>
            {
              props.postIsLoading ? (
                <div className='text-center'>
                  <ClipLoader
                    sizeUnit='px'
                    size={30}
                    color={'#2C2360'}
                    loading={true}
                  />
                </div>
              ) : (null)
            } {
              props.setWriteComment && !props.postIsLoading ? (
                <button className='post-comment-button'
                  id='postComment'>Comment</button>
              ) : (null) }
          </div>
        </form>
      </div>
    </div>
  </Fragment>
);
WriteComment.propTypes = {
  textFocus: PropTypes.func,
  submitComment: PropTypes.func,
  setWriteComment: PropTypes.bool,
  inputChange: PropTypes.func,
  postIsLoading: PropTypes.bool,
  content: PropTypes.string,
};
export default WriteComment;
