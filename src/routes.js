import Login from './containers/Auth/Login/Login';
import SignUp from './containers/Auth/SignUp/SignUpContainer';
import VerifyAuth from './containers/Auth/SocialAuth/VerifyAuth';
import NoMatch from './components/pages/NoMatch/NoMatch';
import ResetPassword from './containers/Auth/ResetPassword/ResetPassword';
import UpdatePassword from './containers/Auth/ResetPassword/UpdatePassword';
import ArticleView from './containers/Article/ArticleView';


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
    path: '/password-reset',
    component: ResetPassword,
    name: 'reset-password',
    exact: true,
  },
  {
    path: '/password-update',
    component: UpdatePassword,
    name: 'update-password',
    exact: true,
  },
  {
    path: '/a/:slug',
    component: ArticleView,
    name: 'article page',
    exact: true,
  },
  {
    component: NoMatch, name: 'no-match',
  },
];
export default routes;
