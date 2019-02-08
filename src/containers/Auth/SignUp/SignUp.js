import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withToastManager } from 'react-toast-notifications';
import { ClipLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import FormWrapper from '../../Form/FormWrapper';
import { FormContainer } from '../../Form';
import { Input, Button } from '../../../components/utilities';
import SocialButtons from '../SocialAuth/SocialButtons';
import validate from './helpers/signupValidations';
import validation from '../../../helpers/validationHelpers/validations';
import image from '../../../assets/images/book_woman.svg';
import './scss/signup.scss';


/* eslint no-unused-expressions: 0 */
/**
 * @class SignUp
 * @description - SignUp display component
 */
export class SignUp extends Component {
  static propTypes = {
    toastManager: PropTypes.object.isRequired,
    signUpUser: PropTypes.func,
    response: PropTypes.string,
    error: PropTypes.bool,
    history: PropTypes.object,
    isLoading: PropTypes.bool,
    user: PropTypes.any,
    success: PropTypes.bool,
  }

  /**
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      step: 1,
      error: {},
      user: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        userName: '',
        confirmPassword: '',
      },
    };
  }

  /**
   * @description - Stop component from re-rendering when error occurs while
   * user is been sign up. Display toast notification
   * @param {*} nextProps
   * @param {*} nextState
   * @returns {bool} - true or false
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
   * @param {*} e - event
   * @returns {object} - Changed state
   */
  handleChange = (e) => {
    const data = { type: e.target.id, content: e.target.value };
    const error = validate(data, this.state.error);
    const { user } = this.state;

    this.setState({
      user: {
        ...user,
        [e.target.id]: e.target.value,
      },
      error,
    }, () => {
      this.validateConfirmPassword();
    });
  }

  /**
   * @description - check if password and confirm password are equal
   * @returns {object} - Update state
   */
  validateConfirmPassword = () => {
    const { user: { password, confirmPassword }, error } = this.state;
    const perror = { ...error };
    if (!validation.verifyConfirmPassword(password, confirmPassword)) {
      perror.confirmPassword = true;
      this.setState({
        error: perror,
      });
    } else {
      delete perror.confirmPassword;
      this.setState({
        error: perror,
      });
    }
  }

  /**
   * @returns {void}
   */
  componentDidMount() {
    document.body.classList.add('overflow');
    if (this.props.user) this.props.history.push('/');
  }

  /**
   * @param {*} e - event
   * @returns {object} - handle submit
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { signUpUser } = this.props;
    const { props: { toastManager, history }, state: { error } } = this;
    if (Object.keys(error).length > 0) {
      toastManager.add('Some fields are Invalid', {
        appearance: 'error',
        autoDismiss: true,
      });
      return false;
    }
    signUpUser(this.state.user, history);
  }

  /**
   * @param {object} e
   * @returns {void} - Returns a new state
   * @memberof SignUp
   */
  nextStep = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = this.state.user;
    if (Object.keys(this.state.error).length > 1
        || email === ''
        || password === ''
        || confirmPassword === '') {
      this.props.toastManager.add('Some fields are invalid and required', {
        appearance: 'error',
        autoDismiss: true,
      });
      return;
    }

    this.setState({
      step: this.state.step + 1,
    });
  }

  /**
   * @param {object} e
   * @returns {void} - Returns a new state
   * @memberof SignUp
   */
  prevStep = (e) => {
    e.preventDefault();
    this.setState({
      step: this.state.step - 1,
    });
  }

  /**
   * @returns {JSX} - Sign up Template
   */
  render() {
    const header = 'Get started, It’s easy';
    const subHeader = '“Today a reader, tomorrow a leader”';
    const { state: { error }, props: { isLoading } } = this;
    return (
      <FormWrapper imageUrl={image}
        displayImage={true} imageId='img-responsive'>
        <FormContainer header={header} subHeader={subHeader}
          loginId='login-wrapper' onSubmit={this.handleSubmit}
          containerId='login-container'>
          <div id="signup-container">
            {
              this.state.step === 1
              && <div className='step-1'>
                <div className='input-group'>
                  <label>Email Address</label>
                  <Input
                    type='email'
                    placeholder=''
                    classes={error.email ? 'inValid' : ''}
                    id='email'
                    inputValue={this.state.user.email}
                    required={true}
                    onChange={this.handleChange} />
                </div>
                <div className='side_inpu'>
                  <div className='input-group flex-left'>
                    <label>Password</label>
                    <Input
                      type='password'
                      id='password'
                      classes={error.password ? 'inValid' : ''}
                      placeholder=''
                      inputValue={this.state.user.password}
                      required={true}
                      onChange={this.handleChange}/>
                  </div>
                  <p className='small-text mobile-text'>
                  *Password must contain at least a number and must
                    not be less than 8 characters</p>
                  <div className='input-group'>
                    <label>Confirm Password</label>
                    <Input
                      type='password'
                      id='confirmPassword'
                      placeholder=''
                      required={true}
                      inputValue={this.state.user.confirmPassword}
                      classes={error.confirmPassword ? 'inValid' : ''}
                      onChange={this.handleChange}/>
                  </div>
                </div>
                <p className='small-text'>
                  *Password must contain at least a number and must
                    not be less than 8 characters</p>
                <div className='text-center loader'>
                  {!isLoading && <Link
                    to='#'
                    onClick={this.nextStep}
                    className='form-button  d-block step-button'>
                        Next</Link>
                  }
                </div>
              </div>
            }
            {
              this.state.step === 2
              && <div className="step-2">
                <div className="side_inpu">
                  <div className='input-group flex-left'>
                    <label>First Name</label>
                    <Input
                      type='text'
                      placeholder=''
                      classes={error.firstName ? 'inValid' : ''}
                      id='firstName'
                      inputValue={this.state.user.firstName}
                      required={true}
                      onChange={this.handleChange} />
                  </div>
                  <div className='input-group'>
                    <label>Last Name</label>
                    <Input
                      type='text'
                      id='lastName'
                      classes={error.lastName ? 'inValid' : ''}
                      placeholder=''
                      required={true}
                      inputValue={this.state.user.lastName}
                      onChange={this.handleChange}/>
                  </div>
                </div>
                <div className='input-group'>
                  <label>Username</label>
                  <Input
                    type='text'
                    id='userName'
                    placeholder=''
                    classes={error.userName ? 'inValid' : ''}
                    inputValue={this.state.user.userName}
                    required={true}
                    onChange={this.handleChange} />
                </div>
                <div className='text-center loader'>
                  { !isLoading
                    && <div className="side-input">
                      <Link
                        to='#'
                        onClick={this.prevStep}
                        className='form-button d-block step-button'>
                        Previous</Link>
                      <Button type='submit' classes='form-button'>
                      Signup</Button>

                    </div>
                  }
                  <ClipLoader
                    sizeUnit='px'
                    size={30}
                    color='#fff'
                    loading={isLoading}
                  />
                </div>
              </div>
            }
            <div className='or'>
              <span className="line"></span>
              <p>OR</p>
              <span className="line"></span>
            </div>
            <div className="social-group">
              <div className="social-btn-group">
                <SocialButtons />
              </div>
            </div>
            <p className='center signup-text-position'>Already a member?
              <Link className="signup-text" to='login'>Signin</Link></p>
          </div>
        </FormContainer>
      </FormWrapper>
    );
  }
}

export default withToastManager(SignUp);
