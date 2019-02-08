import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Signup from './SignUp';
import * as actionCreators from '../../../actions/authAction/signup';

export const mapStateToProps = state => ({
  ...state.signup,
});

export const
  mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);

export default SignUpContainer;
