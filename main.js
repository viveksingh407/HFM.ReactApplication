import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './App.jsx';
import Content from './components/content.jsx';
import TransactionManager from './components/transactions/transactionmanager.jsx';
import BudgetManager from './components/budget/budgetmanager.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './content/styles/content.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route component={Content} >
                <IndexRoute component={TransactionManager}/>
                <Route path="/transactionmanager" component={TransactionManager}/>
                <Route path="/budgetmanager" component={BudgetManager}/>
            </Route>
        </Route>
    </Router>), document.getElementById('app'));