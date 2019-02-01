import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withToastManager } from 'react-toast-notifications';
import * as actionCreators from
  '../../actions/reactionActions/likeArticleActions';
import './scss/reaction.scss';

/**
 * @description - a class to like an article
 * @class
 */
export class LikeArticle extends Component {
  static propTypes = {
    success: PropTypes.bool,
    error: PropTypes.bool,
    response: PropTypes.string,
    toastManager: PropTypes.object.isRequired,
    likeArticle: PropTypes.func,
    status: PropTypes.number,
    articleId: PropTypes.string.isRequired,
    isLiked: PropTypes.bool.isRequired,
    classes: PropTypes.string,
    likeCount: PropTypes.number,
    loading: PropTypes.bool,
    id: PropTypes.any,
  }

  /**
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      cssclassToggle: false,
      likeCount: null,
      id: null,
    };
  }

  /**
   * @description - mount likecount and isLiked state
   * @method
   * @returns {void}
   */
  componentDidMount() {
    this.setState({
      cssclassToggle: this.props.isLiked,
      likeCount: this.props.likeCount,
      id: this.props.id,
    });
  }

  /**
   *@description - setstate when like button is clicked
   * @memberof LikeArticle
   * @returns {void} - update state
   */
  handleClick = () => {
    let vote;
    const { likeArticle, articleId, toastManager } = this.props;
    const { cssclassToggle, likeCount, id } = this.state;
    let count;
    if (id) {
      cssclassToggle ? count = likeCount - 1 : count = likeCount + 1;
    } else {
      toastManager.add('Kindly login to like an article', {
        appearance: 'info',
        autoDismiss: true,
        autoDismissTimeout: '8000',
      });
      return false;
    }
    this.setState({
      cssclassToggle: !cssclassToggle,
      likeCount: count,
    });
    cssclassToggle === true ? vote = 0 : vote = 1;
    likeArticle(vote, articleId);
  }

  /**
    * @description - Takes care of toast notifications when component updates
    * @param {object} nextProps - The next/new props of the component
    * @returns {bool} - Boolean
    */
  shouldComponentUpdate(nextProps) {
    const { cssclassToggle, likeCount } = this.state;
    if (this.props.error !== nextProps.error
      && nextProps.error === true && nextProps.status === 401) {
      this.props.toastManager.add('Kindly login to like this article', {
        appearance: 'info',
        autoDismiss: true,
        autoDismissTimeout: '8000',
      });
      let count;
      cssclassToggle ? count = likeCount - 1 : count = likeCount + 1;
      this.setState({
        cssclassToggle: !cssclassToggle,
        likeCount: count,
      });
      return false;
    }
    return true;
  }

  /**
 * @returns {JSX} - Html template for like button
 * @memberof LikeArticle
 */
  render() {
    const { cssclassToggle, likeCount } = this.state;
    return (
      <div className={`${this.props.classes}`}>
        <div className={`reaction ${cssclassToggle
          ? 'like_reaction_clicked' : 'like_reaction'}`}
        onClick={ () => !this.props.loading && this.handleClick() } >
        </div>
        <p className= {`like--count ${likeCount === 0
          ? 'hide--like--count' : ''}`}>
          {this.state.likeCount === 1
            ? `${this.state.likeCount} like`
            : `${this.state.likeCount} likes`} </p>
    </div>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.likeArticleReducer,
});

export const
  mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const LikeArticleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withToastManager(LikeArticle));

export default LikeArticleContainer;
