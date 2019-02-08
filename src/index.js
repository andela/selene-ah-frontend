import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import decodeToken from './helpers/validationHelpers/decodeToken';
import './assets/scss/base.scss';

const user = decodeToken();
render(<App user={user} />, document.querySelector('#root'));
