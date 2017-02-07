import React from 'react';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import Main from 'Main'
import Timer from 'Timer'
import Countdown from 'Countdown'



const routes = (
    <Route path="/" component={Main}>
        <IndexRoute component={Timer}/>
        <Route path="/countdown" component={Countdown}/>
    </Route>
)

export default routes;
