import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withToastManager } from 'react-toast-notifications';
import { bindActionCreators } from 'redux';
import { ClipLoader } from 'react-spinners';
import FormContainer from '../../Form/FormContainer';
import FormWrapper from '../../Form/FormWrapper';
import { Button, Input } from '../../../components/utilities';
import image from '../../../assets/images/updatepassword.svg';
import actionCreators from '../../../actions/authAction/updatePassword';
import './ResetPassword.scss';
import validate from '../SignUp/helpers/signupValidations';


/**
 * @class UpdatePassword
 * @description The class represent the update password logic
 */
export class UpdatePassword extends Component {
  static propTypes = {
    toastManager: PropTypes.object.isRequired,
    response: PropTypes.string,
    error: PropTypes.bool,
    updatePassword: PropTypes.func,
    isLoading: PropTypes.bool,
    token: PropTypes.string,
    history: PropTypes.object,
    passwordChanged: PropTypes.bool,
  }

  /**
   * @constructor
   * @description holds the state;
   */
  constructor() {
    super();
    this.state = {
      error: {},
      token: '',
      data: {
        password: '',
        confirmPassword: '',
      },
    };
  }

  /**
   * @description checks if token is present in url
   * @returns{void} - redirect user to password-reset page
   */
  componentDidMount = () => {
    const { history: { location: { search } } } = this.props;
    if (!search) {
      this.props.history.push('/password-reset');
    }
  }

  /**
   * @description Handle event that should happen on input change
   * validate password
   * @param {object} e - event that is acted upon
   * @returns {object} - The changed state
   */
  handleInputChange = (e) => {
    const password = { type: e.target.id, content: e.target.value };
    const errorState = this.state.error;
    const isError = validate(password, errorState);
    this.setState({
      data: {
        ...this.state.data,
        [e.target.id]: e.target.value,
      },
      error: isError,
    });
  }


  /**
   * @description - decides if component should throw error or update
   * @param {object} nextProps - targets the next props
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
   *@description submit the form and handles the submit events
   * @param {object} e The event that is to be submitted
   * @returns {bool|void} - return false or call update password function
   */
  handleSubmit = (e) => {
    const { history: { location: { search } } } = this.props;
    const userToken = search.split('?')[1];
    e.preventDefault();
    const {
      props: { toastManager }, state: { error, password, confirmPassword },
    } = this;
    if (error.password) {
      toastManager.add('Invalid password supplied', {
        appearance: 'error',
        autoDismiss: true,
      });
      return false;
    }
    if (password !== confirmPassword) {
      toastManager.add('Password must be equal to confirm password', {
        appearance: 'error',
        autoDismiss: true,
      });
      return false;
    }
    const { data } = this.state;
    this.setState({
      ...data,
      token: userToken,
    }, () => {
      this.props.updatePassword(this.state.data, this.state.token);
    });
  }

  /**
   * @description renders the update password component
   * @returns {JSX} The update password form
   * or the update password successful
   */
  render() {
    return (
        <FormWrapper imageUrl={image}
        imageId='updateSideImage' displayImage={false}>
        {
          !this.props.passwordChanged
            ? (
            <FormContainer
           header="Change Password"
           onSubmit={this.handleSubmit}
           containerId='updateContainer'
            loginId='updateFormWrapper'
          >
          <div className="input-group" id='inputGroup'>
          <label className='reset-password-label'
          id='resetLabel'>Password:</label>
              <Input
                  type="password"
                  classes='reset-password-tbx'
                  id='password'
                  required={true}
                  onChange={this.handleInputChange}
                />
              <label className='reset-password-label'
              id='resetLabel'>Confirm Password:</label>
              <Input
                type='password'
                classes='reset-password-tbx'
                id='confirmPassword'
                required={true}
                onChange={this.handleInputChange}
              />
             </div>
             <div className='text-center'>
             {!this.props.isLoading && <Button type={'submit'}
             buttonId='updateButton'
                classes='form-button' >
                  Change Password</Button>}
                  <p className='password-inst'>
              *Password must contain at least a number and must
                not be less than 8 characters</p>
                  <ClipLoader
                    sizeUnit='px'
                    size={30}
                    color={'#2C2360'}
                    loading={this.props.isLoading}
              />
               </div>
            </FormContainer>
            )
            : (
            <FormContainer
              header="Password Changed"
              containerId='updateContainer'
            loginId='resetFormWrapper'>
                <div className="text-center">
                    <p className='sent-response'>
                    You have successfully changed your password</p>
                  </div>
                  <Link to='/login'><Button type={'submit'}
             buttonId='updateButton'
                classes='form-button'>Return to Login</Button></Link>
              </FormContainer>)
          }

        </FormWrapper>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.updatePassword,
});
export const mapDispatchToProps = dispatch => bindActionCreators(actionCreators,
  dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withToastManager(UpdatePassword));
