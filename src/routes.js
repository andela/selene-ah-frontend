import Login from './containers/Auth/Login/Login';
import SignUp from './containers/Auth/SignUp/SignUpContainer';
import NoMatch from './components/pages/NoMatch/NoMatch';


const routes = [
  {
    path: '/login', component: Login, name: 'login', exact: false,
  },
  {
    path: '/signup', component: SignUp, name: 'signup', exact: false,
  },
  {
    component: NoMatch, name: 'no-match',
  },
];
export default routes;
