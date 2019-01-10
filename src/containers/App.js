import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import routes from '../routes';
import store from '../store';
import Home from './Home';


const App = () => (
  <Provider store={store}>
    <ToastProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        {routes.map(route => (
            <Route
            path={route.path}
            key={route.name}
            component={route.component}
            />
        ))}
        </Switch>
      </BrowserRouter>
    </ToastProvider>
  </Provider>
);

export default App;
