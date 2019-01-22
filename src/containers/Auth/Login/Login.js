import React, { Fragment, Component } from 'react';
import { withToastManager } from 'react-toast-notifications';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormWrapper, FormContainer } from '../../Form';
import {
  Input, Button, Label,
} from '../../../components/utilities';
import loginImage from '../../../assets/images/illustration_1.svg';
import Validations from '../SignUp/helpers/signupValidations';
import loginActions from '../../../actions/authAction/login';
import SocialButtons from '../SocialAuth/SocialButtons';
import './_login.scss';

/**
 * @class
 * @description Login JSX Component
 */
export class Login extends Component {
  state = {
    error: {},
    user: {
      email: '',
      password: '',
    },
  };

  static propTypes = {
    toastManager: PropTypes.object.isRequired,
    loginDispatcher: PropTypes.func,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    successMessage: PropTypes.string,
    isLoading: PropTypes.bool,
    history: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    loginError: PropTypes.bool,
  };

  /**
   * @param {object} e - The Event object
   * @returns {void} - No return
   * @memberof Login
   * @description Handles input changes
   */
  handleInputChange = (e) => {
    e.preventDefault();
    let errors;
    if (e.target.id === 'email') {
      const data = { type: e.target.id, content: e.target.value };
      errors = Validations(data, this.state.error);
    } else {
      errors = {};
    }
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [e.target.id]: e.target.value,
      },
      error: errors,
    });
  }

  /**
   * @param {object} e - The evernt object
   * @returns {bool} - Boolean
   * @memberof Login
   * @description Handles submittion of the form
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { loginDispatcher } = this.props;
    const { props: { toastManager }, state: { error } } = this;
    if (Object.keys(error).length > 0) {
      toastManager.add('The email field is invalid', {
        appearance: 'error',
        autoDismiss: true,
      });
      return false;
    }
    loginDispatcher(this.state.user, this.props.history);
  }

  /**
    * @description - Takes care of toast notifications when component updates
    * @param {object} nextProps - The next/new props of the component
    * @returns {bool} - Boolean
    */
  shouldComponentUpdate(nextProps) {
    // eslint-disable-next-line max-len
    if (this.props.loginError !== nextProps.loginError && nextProps.errorMessage) {
      this.props.toastManager.add(`${nextProps.errorMessage}`, {
        appearance: 'error',
        autoDismiss: true,
      });
      return false;
    }
    return true;
  }

  /**
    * @description - Takes care of toast notifications when component mounts
    * @returns {bool} - Boolean
    */
  componentDidMount() {
    if (this.props.isAuthenticated === false) {
      this.props.toastManager.add('Error Logging You in', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  }

  /**
   * @description Our Login JSX template
   * @function
   * @returns {JSX} HTML Template
   */
  render() {
    return (
      <Fragment>
        <FormWrapper imageUrl={loginImage} displayImage={true}
            flexWrapper='flex-wrapper' imageContainer='image-container'
            imageResponsive='img-responsive'>
            <FormContainer
              header="Welcome back! 👋"
              subHeader='“Today a reader, tomorrow a leader”'
              onSubmit={this.handleSubmit}
              containerId='login-container'
            >
             <div className="input-group">
              <Label for="email">Email Address</Label>
              <Input
                  type="text"
                  placeholder=""
                  id="email"
                  required={true}
                  onChange={this.handleInputChange}
                />
             </div>
             <div className="input-group">
              <Label for="password">Password</Label>
              <Input
                  type="password"
                  placeholder=""
                  id="password"
                  required={true}
                  onChange={this.handleInputChange}
                />
             </div>
            {!this.props.isLoading
              && <Button type="submit" classes="form-button">Login</Button>
            }
             <div className="text--center loader">
              <ClipLoader
                sizeUnit={'px'}
                size={30}
                color={'#fff'}
                loading={this.props.isLoading}
                />
             </div>
             <p className='center'>
            <Link to='password-reset' className='forget-password-text'>
              Forget Password?</Link></p>
             <div className="or">
              <span className="line"></span>
              <p>OR</p>
              <span className="line"></span>
             </div>
             <div className="social-group">
                <div className="social-btn-group">
                  <SocialButtons />
                </div>
             </div>
            <p className='center signup-text-position'>Not a member?
              <Link className="signup-text" to='signup'>Signup</Link>
            </p>

            </FormContainer>
        </FormWrapper>
      </Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.login,
  ...state.socialAuthReducer,
});

export const mapDispatchToProps = dispatch => bindActionCreators(
  loginActions,
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withToastManager(Login));
