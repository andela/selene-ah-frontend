import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastProvider } from 'react-toast-notifications';
import routes from '../routes';
import store from '../store';
import Home from './Home/Home';


const App = ({ user }) => (
  <Provider store={store}>
    <ToastProvider>
      <BrowserRouter>
        <Switch>
          <Route
            exact path='/'
            render={props => <Home {...props} user={user} />}
          />
        {routes.map(route => (
            <Route
            path={route.path}
            key={route.name}
            render={props => <route.component {...props} user={user} />}
            />
        ))}
        </Switch>
      </BrowserRouter>
    </ToastProvider>
  </Provider>
);

App.propTypes = {
  user: PropTypes.any,
};

export default App;
