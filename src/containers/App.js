import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from '../routes';
import store from '../store';
import Main from './Main';


const App = () => (
  <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main} />
        {routes.map(route => (
            <Route
            path={route.path}
            key={route.name}
            component={route.component}
            />
        ))}
        </Switch>
      </BrowserRouter>
    </Provider>
);

export default App;
