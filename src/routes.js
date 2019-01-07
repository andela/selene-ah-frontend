import Hello from './containers/Hello';
// import Main from ./components/Main';


const routes = [
  {
    path: '/hello', component: Hello, name: 'hello', exact: false,
  },
];
export default routes;
