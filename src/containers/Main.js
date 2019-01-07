import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';

import Home from './Home';

const mapStateToProps = state => ({
  articles: state.articles,
});

const
  mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const Main = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default Main;
