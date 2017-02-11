import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import routes from './Routes/Routes'

//Load Foundation
$(document).foundation();

//App Styles
require('style!css!sass!applicationStyles');

ReactDOM.render((
    <Router history={hashHistory} routes={routes}/>
), document.getElementById("app") );