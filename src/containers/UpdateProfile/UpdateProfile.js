import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { ClipLoader } from 'react-spinners';
import { withToastManager } from 'react-toast-notifications';
import FormContainer from '../Form/FormContainer';
import { Button, Input } from '../../components/utilities/index';
import actionCreators from '../../actions/userAction/updateProfile';
import './update-profile.scss';
import uploadImage from '../../helpers/imageUpload';

/**
 * @param {object} e
 * @class UpdateProfile
 * @description The class represent the update profile logic
 */
export class UpdateProfile extends Component {
  /**
   * @param {object} props - this.props
   * @constructor
   * @description holds the state;
   */

  state = {
    facebook: this.props.userData.facebook,
    twitter: this.props.userData.twitter,
    bio: this.props.userData.bio,
    firstName: this.props.userData.firstName,
    lastName: this.props.userData.lastName,
    email: this.props.userData.email,
    userName: this.props.userData.userName,
    image: this.props.userData.image,
    isLoading: this.props.isLoading,
    getFile: null,
    textAreaLength: this.props.userData.bio
      ? (200 - this.props.userData.bio.length)
      : 200,
  };

  /**
   * @returns {JSX} update value
   * @param {params} e
   */
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    if (e.target.id === 'bio') {
      const newLength = 200 - e.target.value.length;
      this.setState({
        textAreaLength: newLength,
      });
    }
  };

  getImageUrl = (e) => {
    this.setState({ getFile: e.target.files[0] });
  };

  static propTypes = {
    toastManager: PropTypes.object.isRequired,
    response: PropTypes.object,
    error: PropTypes.bool,
    profileDispatcher: PropTypes.func,
    isLoading: PropTypes.bool,
    token: PropTypes.string,
    success: PropTypes.bool,
    userData: PropTypes.object,
    isProfileUpdate: PropTypes.bool,
    updateProfileDispatcher: PropTypes.func,
    openModal: PropTypes.func,
  };

  /**
   * @returns {JSX} -  return update profile
   * @param {*} e
   */
  onSubmit = async (e) => {
    e.preventDefault();
    await this.handleImageUpload(this.state.getFile);
    const post = {
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      bio: this.state.bio,
      lastName: this.state.lastName,
      firstName: this.state.firstName,
      image: this.state.image,
      userName: this.state.userName,
      email: this.state.email,
    };
    this.props.updateProfileDispatcher(post);
  };

  /**
   * @param {object} imgUrl
   * @description - function for uploading an image
   * @returns {void}
   */
  handleImageUpload = async (imgUrl) => {
    this.setState({ isLoading: !this.state.isLoading });
    if (!this.state.getFile) return;
    const response = await uploadImage(imgUrl);
    return this.setState({ image: response.data.secure_url });
  };

  /**
   * @description renders the update profile Modal
   * @returns {JSX} The update profile form
   * or the update profile successful
   */
  render() {
    return (
      <div>
        <div className="modal">
          <div className="modal-content">
            <span onClick={() => this.props.openModal()} className="close">
              &times;
            </span>
            {!this.props.isProfileUpdate ? (
              <FormContainer
                header="Update Profile"
                onSubmit={this.onSubmit}
                containerId="updateContainer"
                loginId="updateFormWrapper"
              >
                <div className="input-group" id="inputGroup">
                  <label className="reset-password-label" id="resetLabel">
                    First Name
                  </label>
                  <Input
                    type="text"
                    classes="reset-password-tbx"
                    id="firstName"
                    value={this.state.firstName}
                    onChange={this.onChange}
                    placeholder={this.props.userData.firstName}
                    required={false}
                    minLength="2"
                    maxLength="50"
                  />
                  <label className="reset-password-label" id="resetLabel">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    classes="reset-password-tbx"
                    id="lastName"
                    value={this.state.lastName}
                    onChange={this.onChange}
                    placeholder={this.props.userData.lastName}
                    required={false}
                    minLength="2"
                    maxLength="50"
                  />
                  <label className="reset-password-label" id="resetLabel">
                    Email Address
                  </label>
                  <Input
                    type="text"
                    classes="reset-password-tbx disabled"
                    id="email"
                    value={this.state.email}
                    placeholder={this.props.userData.email}
                    disabled={true}
                    required={false}
                  />
                  <label className="reset-password-label" id="resetLabel">
                    Facebook Url
                  </label>
                  <Input
                    type="text"
                    classes="reset-password-tbx"
                    id="facebook"
                    value={this.state.facebook}
                    onChange={this.onChange}
                    placeholder={this.props.userData.facebook}
                    required={false}
                    minLength="2"
                    maxLength="50"
                  />
                  <label className="reset-password-label" id="resetLabel">
                    Twitter Url
                  </label>
                  <Input
                    type="text"
                    classes="reset-password-tbx"
                    id="twitter"
                    value={this.state.twitter}
                    onChange={this.onChange}
                    placeholder={this.props.userData.twitter}
                    required={false}
                    minLength="2"
                    maxLength="100"
                  />
                  <label className="reset-password-label" id="resetLabel">
                    Bio <span className="textarea-length">
                      {this.state.textAreaLength}
                    </span>
                  </label>
                  <textarea
                    value={this.state.bio}
                    onChange={this.onChange}
                    id="bio"
                    minLength="2"
                    maxLength="200"
                  />
                  <Input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={this.getImageUrl}
                    required={false}
                  />
                </div>
                <div className="text-center">
                  {!this.state.isLoading && (
                    <Button
                      type={'submit'}
                      buttonId="updateButton"
                      classes="form-button"
                    >
                      Update Profile
                    </Button>
                  )}
                  <ClipLoader
                    sizeUnit="px"
                    size={30}
                    color={'#2C2360'}
                    loading={this.state.isLoading}
                  />
                </div>
              </FormContainer>
            ) : (
              <FormContainer
                header="Profile updated successfully"
                containerId="updateContainer"
                loginId="resetFormWrapper"
              >
              </FormContainer>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.profile,
});

export const mapDispatchToProps = dispatch => bindActionCreators(
  actionCreators,
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withToastManager(UpdateProfile));
