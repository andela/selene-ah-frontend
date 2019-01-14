import Login from './containers/Auth/Login/Login';
import SignUp from './containers/Auth/SignUp/SignUpContainer';
// import Main from ./components/Main';


const routes = [
  {
    path: '/login', component: Login, name: 'login', exact: false,
  },
  {
    path: '/signup', component: SignUp, name: 'signup', exact: false,
  },
];
export default routes;
