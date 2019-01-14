import Login from './containers/Auth/Login/Login';
import SignUp from './containers/Auth/SignUp/SignUpContainer';
import VerifyAuth from './containers/Auth/SocialAuth/VerifyAuth';
import Home from './containers/Home';


const routes = [
  {
    path: '/signup', component: SignUp, name: 'signup', exact: false,
  },
  {
    path: '/login', component: Login, name: 'login', exact: true,
  },
  {
    path: '/auth/twitter',
    component: VerifyAuth,
    name: 'authTwitter',
    exact: true,
  },
  {
    path: '/auth/facebook',
    component: VerifyAuth,
    name: 'authFacebook',
    exact: true,
  },
  {
    path: '/auth', component: VerifyAuth, name: 'auth', exact: true,
  },

  {
    path: '/', component: Home, name: 'home',
  },

];
export default routes;
