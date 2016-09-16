import React from 'react';
import 'normalize.css/normalize.css';
import './app.scss';
import { render } from 'react-dom';
import Dashboard from './containers/Dashboard.js';

render(<Dashboard/>, document.getElementById('app'));
