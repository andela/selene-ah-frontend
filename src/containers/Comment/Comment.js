import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withToastManager } from 'react-toast-notifications';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './comment.scss';
import actionCreators from '../../actions/commentAction/commentView';
import EachComment from './EachComment';
import ShowCommentButton from './ShowCommentButton';
import WriteComment from './WriteComment';


/**
 * @description The comments of an article
 * @class
 */
export class Comment extends Component {
  static propTypes = {
    toastManager: PropTypes.object.isRequired,
    response: PropTypes.any,
    getArticleComments: PropTypes.func,
    isLoading: PropTypes.bool,
    getSuccess: PropTypes.bool,
    user: PropTypes.any,
    articleId: PropTypes.string.isRequired,
    postComment: PropTypes.func,
    setWriteComment: PropTypes.bool,
    error: PropTypes.any,
    postIsLoading: PropTypes.bool,
    postResponse: PropTypes.any,
    handleCommentButton: PropTypes.func,
  }


  /**
   * @description holds the initial state;
   */
  state = {
    error: {},
    onCommentClick: false,
    content: '',
    setWriteComment: null,
    viewComment: false,
    id: this.props.user ? this.props.user.id : null,
    checkSuccess: false,
    showOthers: false,
  };


  /**
   * @description - Sets viewcomment state to false when leaving page and
   * @returns {void} - only set state without returning any.
   */
  componentWillUnmount() {
    this.setState({
      viewComment: false,
    });
  }

  /**
   * @description - The functions to submit a comment
   * @param {object} e - The event that is acted upon
   * @returns {void}- submits the new comment
   */
  commentSubmit = (e) => {
    const {
      props: { articleId }, state: { content },
    } = this;
    e.preventDefault();
    this.setState({
      content: '',
    }, () => {
      this.props.postComment(articleId, content, this.props.user);
    });
  }

  /**
   * @description Handle event that should happen on textarea input change
   * validate password
   * @param {object} e - event that is acted upon
   * @returns {object} - The changed state
   */
  handleInputChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  }

  /**
   * @description- Gets all the comments of an article
   * @returns {object} - return the comment object
   */
  handleCommentButton = () => {
    const { getArticleComments } = this.props;
    this.setState({
      viewComment: true,
    });
    getArticleComments(this.props.articleId);
  }

  /**
   * @description- Handles the text area focus
   * @returns {object} - return the comment object
   */
  onTextFocus = () => {
    const {
      props: { toastManager }, state: { id },
    } = this;
    if (!id) {
      toastManager.add('Kindly login to respond to article', {
        appearance: 'info',
        autoDismiss: true,
      });
      return false;
    }
    this.setState({
      setWriteComment: true,
    });
  }

  /**
   * @description - decides if component should throw error or update
   * @param {object} nextProps - react next prop to target next prop
   * @returns {bool} - if the component should be updated or not
   */
  shouldComponentUpdate(nextProps) {
    const { toastManager } = this.props;
    if (this.props.error !== nextProps.error && nextProps.error === true) {
      toastManager.add(`${nextProps.postResponse || nextProps.response}`, {
        appearance: 'info',
        autoDismiss: true,
      });
      return false;
    }
    return true;
  }


  /**
     * @returns {JSX} The article comment page html
     */
  render() {
    return (
      <div className='container'>
        <section className='comment-section' style={{ boxShadow: 'none' }}>
          <ShowCommentButton
            loading={this.state.isLoading}
            viewComment={this.state.viewComment}
            showResponse={this.handleCommentButton}/>

          {
            this.props.getSuccess
            && this.state.viewComment
            && !this.props.isLoading ? (
                <div>
                  <label className='comment-response-label'>Comments</label>
                  <WriteComment
                    inputChange={this.handleInputChange}
                    setWriteComment={this.state.setWriteComment}
                    postIsLoading={this.props.postIsLoading}
                    submitComment={this.commentSubmit}
                    textFocus={this.onTextFocus}
                    content={this.state.content}
                  />
                  {Array.isArray(this.props.response)
              && this.props.response.map(comment => (
                <EachComment key={comment.id} commentDetails={comment} />
              ))}
                </div>
              ) : (null)}
        </section>
      </div>
    );
  }
}
export const mapStateToProps = state => ({
  ...state.commentReducers,
});
export const mapDispatchToProps = dispatch => bindActionCreators(actionCreators,
  dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withToastManager(Comment));
