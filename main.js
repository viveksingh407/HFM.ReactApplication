import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import store from "./stores/itemstore.js";
import routes from "./router/router.js";
import 'bootstrap/dist/css/bootstrap.css';
import './content/styles/content.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app'));