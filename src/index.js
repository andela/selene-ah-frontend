import React from 'react';
import {render} from 'react-dom';

import App from './containers/App';
import './assets/scss/base.scss';


render(<App/>, 
  document.querySelector("#root"));
