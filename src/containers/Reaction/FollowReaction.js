import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withToastManager } from 'react-toast-notifications';
import * as actionCreators from '../../actions/reactionActions/follow';

/**
 * @export
 * @class FollowReaction
 * @extends {Component}
 */
export class FollowReaction extends Component {
  static propTypes = {
    prop: PropTypes.any,
    followUser: PropTypes.func.isRequired,
    followerId: PropTypes.string,
    unFollowUser: PropTypes.func,
    error: PropTypes.bool,
    unfollowError: PropTypes.bool,
    toastManager: PropTypes.object,
    response: PropTypes.string,
    unfollowSuccess: PropTypes.bool,
    success: PropTypes.bool,
    isFollowingAuthor: PropTypes.bool.isRequired,
    unloading: PropTypes.bool,
    loading: PropTypes.bool,
    id: PropTypes.any,
  }

  /**
 *Creates an instance of FollowReaction.
 * @memberof FollowReaction
 */
  constructor() {
    super();
    this.state = {
      isFollowingAuthor: true,
      id: null,
    };
  }

  /**
   * @memberof FollowReaction
   * @returns {void}
   */
  componentDidMount() {
    this.setState({
      isFollowingAuthor: this.props.isFollowingAuthor,
      id: this.props.id,
    });
  }

  /**
   * @description - Handle button click to follow an author
   * @memberof FollowReaction
   * @returns {void}
   */
  handleClick = () => {
    const {
      state: { isFollowingAuthor, id },
      props: {
        followUser,
        followerId,
        unFollowUser,
        toastManager,
      },
    } = this;
    if (!id) {
      toastManager.add('Kindly login to follow this user', {
        appearance: 'info',
        autoDismiss: true,
      });
      return;
    }
    isFollowingAuthor
      ? unFollowUser('unfollow', followerId)
      : followUser(followerId, 'follow');
    this.setState({ isFollowingAuthor: !isFollowingAuthor });
  }

  /**
    * @description - Takes care of toast notifications when component updates
    * @param {object} nextProps - The next/new props of the component
    * @returns {bool} - Boolean
    */
  shouldComponentUpdate(nextProps) {
    const {
      props: {
        error, unfollowError, toastManager,
      },
      state: { isFollowingAuthor },
    } = this;
    if ((error !== nextProps.error || unfollowError !== nextProps.unfollowError)
      && (nextProps.error || nextProps.unfollowError)) {
      toastManager.add('Kindly login to follow this user', {
        appearance: 'info',
        autoDismiss: true,
      });
      this.setState({
        isFollowingAuthor: !isFollowingAuthor,
      });
      return false;
    }
    return true;
  }

  /**
 * @returns {JSX} - Html template for follow button
 * @memberof FollowReaction
 */
  render() {
    const {
      state: { isFollowingAuthor, id },
      props: { unloading, loading, followerId },
    } = this;
    return id !== followerId && (
      <Fragment>
        <span>
          <button
            className={isFollowingAuthor ? 'following' : 'follow'}
            onClick={() => (!unloading || !loading) && this.handleClick()}>
            {isFollowingAuthor ? 'following' : 'follow'}
          </button>
        </span>
      </Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.follow,
});

export const
  mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(
  mapStateToProps, mapDispatchToProps,
)(withToastManager(FollowReaction));
