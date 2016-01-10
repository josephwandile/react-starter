'use strict';

// React Dependecies
let React = window.React = require('react');
let ReactDOM = require("react-dom");

// Routing
import { Router, Route, Link, IndexRedirect } from 'react-router';

// Components
let Welcome = require('./components/Welcome');
let Page = require("./components/Page");

let mountNode = document.getElementById('view-container');

ReactDOM.render((
  <Router>
    <Route path="/" component={Welcome}/>
    <Route path="/page" component={Page}/>
  </Router>
), mountNode)
