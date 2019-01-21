import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withToastManager } from 'react-toast-notifications';
import { bindActionCreators } from 'redux';
import { ClipLoader } from 'react-spinners';
import FormContainer from '../../Form/FormContainer';
import FormWrapper from '../../Form/FormWrapper';
import { Button, Input } from '../../../components/utilities';
import image from '../../../assets/images/sendemail.svg';
import './ResetPassword.scss';
import actionCreators from '../../../actions/authAction/resetPassword';


/**
 * @class ResetPassword
 * @description Component to send reset password link to users.
 */
export class ResetPassword extends Component {
  static propTypes = {
    toastManager: PropTypes.object.isRequired,
    response: PropTypes.string,
    error: PropTypes.bool,
    sendResetLink: PropTypes.func,
    isLoading: PropTypes.bool,
    success: PropTypes.bool,
  }

  /**
   * @constructor
   * @description holds the state;
   */
  constructor() {
    super();
    this.state = {
      error: {},
      email: '',
    };
  }

  /**
   * @description Handle event that should happen on input change
   * @param {object} e - event that is acted upon
   * @returns {object} - The changed state
   */
  handleInputChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  /**
   * @description - decides if component should throw error or update
   * @param {object} nextProps - react next prop to target next prop
   * @returns {bool} - if the component should be updated or not
   */
  shouldComponentUpdate(nextProps) {
    if (this.props.error !== nextProps.error && nextProps.error === true) {
      this.props.toastManager.add(`${nextProps.response}`, {
        appearance: 'error',
        autoDismiss: true,
      });
      return false;
    }
    return true;
  }

  /**
   * @returns {void}
   */
  componentDidMount() {
    document.body.classList.add('overflow');
  }

  /**
   * @description Handles the form submit
   * @param {object} e The event that is to be submitted
   * @returns {void} - calls the send email function
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { sendResetLink } = this.props;
    sendResetLink(this.state.email);
  }

  /**
   * @description renders the page component
   * @returns {JSX} The reset password form
   * or the reset password email successfully sent
   */
  render() {
    return (
      <Fragment>
        <FormWrapper imageUrl={image} flexWrapper='reset-flex-wrapper'
        imageId='sideImage' displayImage={false} changeClass='remove-arc'
        changeForm='inner-form-reset-password' >
            {
          !this.props.success
            ? (<FormContainer
            header="Forgot Password?"
            containerId='resetContainer'
            formContainer='form-container reset-form-container'
            loginId='resetFormWrapper'
            onSubmit={this.handleSubmit}>
              <div className="input-group">
                  <label className='reset-password-label'
                  id='resetLabel'>Email Address</label>
                  <Input
                      type="email"
                      placeholder="example@example.com"
                      id="email"
                      classes='reset-password-tbx'
                      required={true}
                      onChange={this.handleInputChange}
                    />
                </div>
                <div className='text-center' id='clipLoader'>
                {!this.props.isLoading
                  && <Button
                  type={'submit'} buttonId='submitButton'
                  classes='form-button' >
                  Send Reset Password Link</Button>}

                  <ClipLoader
                    sizeUnit='px'
                    size={30}
                    color={'#2C2360'}
                    loading={this.props.isLoading}
                  />
              </div>
            </FormContainer>)
            : (<FormContainer
              header="Email Sent"
              containerId='resetContainer'
            loginId='resetFormWrapper'
              container='reset-container' wrapper='reset-wrapper'
              formContainer='form-container reset-form-container'
              onSubmit={this.handleSubmit}>
                <div className="text-center">
                    <p className='sent-response'>
                    Please Check your email for a link to reset your password.
                    If it doesn’t appear within a few minutes, check your spam
                    folder.</p>
                  </div>
                  <div className='text-center'>
                </div>
              </FormContainer>)
      }
          </FormWrapper>
    </Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.resetPassword,
});
export const mapDispatchToProps = dispatch => bindActionCreators(actionCreators,
  dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withToastManager(ResetPassword));
