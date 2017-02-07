import React from 'react';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import Main from '../components/Main.js'



const routes = (
    <Route path="/" component={Main}>
    </Route>
)

export default routes;
