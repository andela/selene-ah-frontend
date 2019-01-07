import Main from './components/Main';
import Home from './containers/Home';

const routes = [
  { path: '/main', component: Main, name: 'main' },
  { path: '/', component: Home, name: 'home' },
];
export default routes;
