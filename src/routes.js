import Login from './containers/Auth/Login/Login';
import SignUp from './containers/Auth/SignUp/SignUpContainer';


const routes = [
  {
    path: '/login', component: Login, name: 'login', exact: false,
  },
  {
    path: '/signup', component: SignUp, name: 'signup', exact: false,
  },
];
export default routes;
