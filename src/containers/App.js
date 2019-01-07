import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '../routes';

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(route => (
        <Route
          path={route.path}
          key={route.name}
          component={route.component}
          exact
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
