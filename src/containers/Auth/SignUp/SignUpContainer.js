import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../../actions/authAction/signup';
import Signup from './SignUp';

const mapStateToProps = state => ({
  ...state.signup,
});

const
  mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);

export default SignUpContainer;
