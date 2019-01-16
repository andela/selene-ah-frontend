import React, { Fragment, Component } from 'react';
import { withToastManager } from 'react-toast-notifications';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormWrapper, FormContainer } from '../../Form';
import { Input, Button, Label } from '../../../components/utilities';
import loginImage from '../../../assets/images/illustration_1.svg';
import Validations from '../SignUp/helpers/signupValidations';
import loginActions from '../../../actions/authAction/login';
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
    if (this.props.error !== nextProps.error && nextProps.errorMessage) {
      this.props.toastManager.add(`${nextProps.errorMessage}`, {
        appearance: 'error',
        autoDismiss: true,
      });
      return false;
    }
    return true;
  }

  /**
   * @description Our Login JSX template
   * @function
   * @returns {JSX} HTML Template
   */
  render() {
    return (
      <Fragment>
        <FormWrapper imageUrl={loginImage} displayImage={true}>
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
                  placeholder="fakeemail@gmail.com"
                  id="email"
                  required={true}
                  onChange={this.handleInputChange}
                />
             </div>
             <div className="input-group">
              <Label for="password">Password</Label>
              <Input
                  type="password"
                  placeholder="password"
                  id="password"
                  required={true}
                  onChange={this.handleInputChange}
                />
             </div>
            {!this.props.isLoading
              && <Button type="submit" classes="form-button">Login</Button>
            }
             <div className="text--center">
              <ClipLoader
                sizeUnit={'px'}
                size={30}
                color={'#fff'}
                loading={this.props.isLoading}
                />
             </div>
             <div className="or">
              <span className="line"></span>
              <p>OR</p>
              <span className="line"></span>
             </div>
            </FormContainer>
        </FormWrapper>
      </Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.login,
});

export const mapDispatchToProps = dispatch => bindActionCreators(
  loginActions,
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withToastManager(Login));