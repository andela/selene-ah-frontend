import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withToastManager } from 'react-toast-notifications';
import PropTypes from 'prop-types';
import FormWrapper from '../../Form/FormWrapper';
import image from '../../../assets/images/book_woman.svg';
import './signup.scss';
import { FormContainer } from '../../Form';
import { Input, Button } from '../../../components/utilities';
import validate from './signupValidations';
import validation from '../../../helpers/validationHelpers/validations';

/* eslint no-unused-expressions: 0 */
/**
 * @class
 */
class SignUp extends Component {
  static propTypes = {
    toastManager: PropTypes.func.isRequired,
  }

  /**
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      error: {},
      user: {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        username: '',
        confirmPassword: '',
      },
    };
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
   * @param {*} e - event
   * @returns {object} - handle submit
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { props: { toastManager }, state: { error } } = this;
    if (Object.keys(error).length > 0) {
      toastManager.add('Some fields are Invalid', {
        appearance: 'error',
        autoDismiss: true,
      });
      return false;
    }
    // console.log('I am up');
  }

  /**
   * @returns {JSX} - Sign up Template
   */
  render() {
    const header = 'Get started, It’s easy';
    const subHeader = '“Today a reader, tomorrow a leader”';
    const { error } = this.state;
    return (
      <FormWrapper imageUrl={image}>
        <FormContainer header={header} subHeader={subHeader}
          onSubmit={this.handleSubmit}>
          <div className="signup-container">
            <label>Email Address</label>
            <Input type={'email'} placeholder={'fakeemail@email.com'}
              classes={error.email ? 'inValid' : ''}
                id={'email'} required={true} onChange={this.handleChange} />
            <div className="side_input flex-name">
              <div>
                <label>First Name</label>
                <Input type={'text'} placeholder={'first name'}
                  classes={error.firstname ? 'inValid' : ''}
                    id={'firstname'}required={true}
                      onChange={this.handleChange} />
              </div>
              <div>
                <label>Last Name</label>
                <Input type={'text'} id={'lastname'}
                  classes={error.lastname ? 'inValid' : ''}
                  placeholder={'last name'} required={true}
                    onChange={this.handleChange}/>
              </div>
            </div>
            <div className='side_input'>
              <div>
                <label>Password</label>
                <Input type={'password'} id={'password'}
                  classes={error.password ? 'inValid' : ''}
                  placeholder={'password'} required={true}
                    onChange={this.handleChange}/>
              </div>
              <div>
                <label>Confirm Password</label>
                <Input type={'password'} id={'confirmPassword'}
                  placeholder={'password'} required={true}
                  classes={error.confirmPassword ? 'inValid' : ''}
                    onChange={this.handleChange}/>
              </div>
            </div>
            <p className='small-text'>
              *Password must contain at least a number and a symbol</p>
            <div>
              <label>User Name</label>
              <Input type={'text'} id={'username'} placeholder={'username'}
                classes={error.username ? 'inValid' : ''}
                required={true} onChange={this.handleChange} />
            </div>
            <Button type={'submit'} classes='form-button'>Register</Button>
          <div className='or'>
            <span className="line"></span>
            <p>OR</p>
            <span className="line"></span>
          </div>
          <p className='center'>Already a member?
            <Link to='login'>Register then.</Link></p>
          </div>
        </FormContainer>
      </FormWrapper>
    );
  }
}

export default withToastManager(SignUp);
