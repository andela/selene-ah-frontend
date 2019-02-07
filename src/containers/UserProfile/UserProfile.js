import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { withToastManager } from 'react-toast-notifications';
import UserInfo from '../../components/userProfile/UserInfo/UserInfo';
import SideWidget from '../../components/userProfile/SideWidget/SideWidget';
import UserArticle from '../../components/userProfile/UserArticle/UserArticle';
import UpdateProfile
  from '../../components/userProfile/UpdateProfile/UpdateProfile';
import MyLoader from '../../components/userProfile/UserInfo/UserInfoLoader';
import Navbar from '../../components/utilities/Navbar/Navbar';
import SideNav from '../../components/utilities/SideNav/SideNav';
import UserStatistic from './UserStatistics';
import actionCreators from '../../actions/userAction/getProfile';
import * as actions from '../../actions/userStat/getUserStat';
import profileImage from '../../assets/images/user-icon.png';
import './scss/user-profile.scss';


/**
 * @class UserProfile
 * @extends {Component}
 */
export class UserProfile extends Component {
  /**
   * @returns {JSX} Html template
   * @memberof UserProfile
   */

  static propTypes = {
    toastManager: PropTypes.object.isRequired,
    response: PropTypes.any,
    error: PropTypes.bool,
    statError: PropTypes.bool,
    profileDispatcher: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    success: PropTypes.bool,
    userData: PropTypes.object,
    history: PropTypes.object,
    isProfileUpdate: PropTypes.bool,
    noUserFollowerStat: PropTypes.object,
    userArticleLike: PropTypes.number,
    userArticleStat: PropTypes.object,
    bookmarkStat: PropTypes.number,
    commentStat: PropTypes.number,
    getAllStat: PropTypes.func,
    fetchingData: PropTypes.bool,
    usersYouAreFollowing: PropTypes.number,
    user: PropTypes.object,
  };

  /**
   * @description - initails state
   */
  state = {
    token: '',
    modal: false,
    sidenav: false,
    isLoggedIn: this.props.user,
    initial: [],
    isUpdate: false,
    userStats: null,
    isActive: '',
    activeStat: null,
    activeArticle: true,
  };

  changeSidenav = () => {
    this.setState({ sidenav: !this.state.sidenav });
  };


  /**
   * @returns {UserProfile} - returns user profile
   */
  componentDidMount() {
    const isAuthenticated = this.props.user;
    if (!isAuthenticated) this.props.history.push('/login');
    const { profileDispatcher } = this.props;
    profileDispatcher();
  }

  openModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  /**
   * @description returns the selected tab
   * @param {string} selectedTab
   * @returns {string} selectedtab
   */
  getSelectedTab = (selectedTab) => {
    switch (selectedTab) {
      case 'Articles':
        return 'userArticlesTab';
      case 'Statistics':
        return 'userStatTab';
      default:
        return null;
    }
  }

  /**
   * @description returns the selected tab
   * @param {string} navLink
   * @returns {undefined} undefined
   */
  handleNavChange = async (navLink) => {
    const selectedTab = this.getSelectedTab(navLink);
    const token = localStorage.getItem('token');
    if (selectedTab === 'userArticlesTab') {
      this.setState({
        userStats: false,
        activeStat: false,
        activeArticle: true,
      });
    }
    if (selectedTab === 'userStatTab') {
      await this.props.getAllStat(token, this.props.user.id);
      this.setState({
        userStats: true,
        activeStat: true,
        activeArticle: false,
      });
    }
  }

  /**
   * @description Check for any error
   * @param {object} nextProps
   * @returns {bool} true/false
   */
  shouldComponentUpdate(nextProps) {
    if (this.props.statError !== nextProps.statError) {
      this.props.toastManager.add('Network Error', {
        appearance: 'error',
        autoDismiss: true,
      });
      return false;
    }
    return true;
  }

  /**
   * @description
   * @return {JSX} - returns the page JSX
   */
  render() {
    const {
      firstName,
      lastName,
      userName,
      bio,
      image,
      twitter,
      facebook,
      email,
    } = { ...this.props.userData };

    const links = {
      twitter,
      facebook,
      email,
      userName,
    };

    const fullname = `${firstName} ${lastName}`;
    let imageUrl;
    if (image) {
      imageUrl = image;
    } else {
      imageUrl = profileImage;
    }
    const { success } = this.props;
    return (
        <div className="row">

        { this.state.sidenav
          ? <div className="sidebar-overlay"
         onClick={() => this.changeSidenav() }>
         </div> : null}

        { this.state.sidenav
          ? <SideNav isLoggedIn={ this.state.isLoggedIn }
          changeSidenav={ this.changeSidenav} /> : null }
        <Navbar isLoggedIn={this.state.isLoggedIn}
        changeSidenav={this.changeSidenav} />
          { success
            ? <UserInfo

            name={fullname}
            SocialLinks={links}
            bio={bio}
            imageUrl={imageUrl}
            openModal={this.openModal}
          /> : <MyLoader />}
          {this.state.modal
            ? <UpdateProfile openModal={this.openModal} /> : null}
        <div className="row content-container">
          <SideWidget handleNavClick={this.handleNavChange}
          activeArticle={this.state.activeArticle}
          activeStat={this.state.activeStat}/>
          { this.state.userStats && !this.props.statError ? <UserStatistic
            followerStat={this.props.noUserFollowerStat}
            articleLikes={this.props.userArticleLike}
            articleStat={this.props.userArticleStat}
            bookmarkStat={this.props.bookmarkStat}
            commentStat={this.props.commentStat}
            yourFollowing={this.props.usersYouAreFollowing}
            />
            : null
          }
          {
            this.state.activeArticle ? <UserArticle name={fullname}/> : null
          }
          </div>
        </div>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.profile,
  ...state.statistics,
});

export const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...actionCreators,
    ...actions,
  },
  // eslint-disable-next-line
  dispatch
);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withToastManager(UserProfile));
