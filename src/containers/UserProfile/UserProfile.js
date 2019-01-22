import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { withToastManager } from 'react-toast-notifications';
import UserInfo from '../../components/UserProfile/UserInfo/UserInfo';
import SideWidget from '../../components/UserProfile/SideWidget/SideWidget';
import UserArticle from '../../components/UserProfile/UserArticle/UserArticle';
import UpdateProfile
  from '../../components/UserProfile/UpdateProfile/UpdateProfile';
import profileImage from '../../assets/images/user-icon.png';
import actionCreators from '../../actions/userAction/getProfile';
import MyLoader from '../../components/UserProfile/UserInfo/UserInfoLoader';
import ArticlesLoader
  from '../../components/UserProfile/UserArticle/ArticlesLoader';
import Navbar from '../../components/utilities/Navbar/Navbar';
import SideNav from '../../components/utilities/SideNav/SideNav';
import decodeToken from '../../helpers/validationHelpers/decodeToken';

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
    response: PropTypes.object,
    error: PropTypes.bool,
    profileDispatcher: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    success: PropTypes.bool,
    userData: PropTypes.object,
    history: PropTypes.object,
    isProfileUpdate: PropTypes.bool,
  };

  /**
   * @description - initails state
   */
  state = {
    token: '',
    modal: false,
    sidenav: false,
    isLoggedIn: localStorage.getItem('token') || false,
    initial: [],
    isUpdate: false,
  };

  changeSidenav = () => {
    this.setState({ sidenav: !this.state.sidenav });
  };


  /**
   * @returns {UserProfile} - returns user profile
   */
  componentDidMount() {
    const isAuthenticated = decodeToken();
    if (!isAuthenticated) this.props.history.push('/login');
    const { profileDispatcher } = this.props;
    profileDispatcher();
  }

  openModal = () => {
    this.setState({ modal: !this.state.modal });
  };

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
      <Fragment>
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
          <SideWidget />
          { success
            ? <UserArticle name={fullname}/>
            : <Fragment>
              <ArticlesLoader />
              <ArticlesLoader />
              <ArticlesLoader />
            </Fragment>
          }
        </div>
      </Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.profile,
});


export const mapDispatchToProps = dispatch => bindActionCreators(actionCreators,
  dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withToastManager(UserProfile));
