import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from '../App.jsx';
import Content from '../components/content.jsx';
import ItemsManager from '../components/items/itemsmanager.jsx';
import BudgetManager from '../components/budget/budgetmanager.jsx';

const routes = (
    <Route path="/" component={App}>
        <Route component={Content} >
            <IndexRoute component={ItemsManager}/>  
            <Route path="/itemsmanager" component={ItemsManager}/>
            <Route path="/budgetmanager" component={BudgetManager}/>
        </Route>
    </Route>);

export default routes;