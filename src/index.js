import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import './assets/scss/base.scss';
import decodeToken from './helpers/validationHelpers/decodeToken';

const user = decodeToken();
render(<App user={user} />, document.querySelector('#root'));
