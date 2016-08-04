/**
 * App entry point
 */

// Polyfill
import 'babel-polyfill';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, browserHistory } from 'react-router';

// Routes
import Routes from './common/components/Routes';

// Base styling
import './common/base.css';


// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';

const App = () => (
    <MuiThemeProvider>
        <Router history={browserHistory}>
            {Routes}
        </Router>
    </MuiThemeProvider>
);

// Render the router
ReactDOM.render(
    <App />,
    document.getElementById(DOM_APP_EL_ID)
);

