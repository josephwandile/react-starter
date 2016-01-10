'use strict';

// React Dependecies
let React = window.React = require('react');
let ReactDOM = require("react-dom");

// Routing
import { Router, Route, Link, IndexRedirect } from 'react-router';

// Components
let PageZero = require('./components/PageZero');
let PageOne = require("./components/PageOne");
let PageTwo = require("./components/PageTwo");

let mountNode = document.getElementById('view-container');

ReactDOM.render((
  <Router>
    <Route path="/" component={PageZero}/>
    <Route path="/pageone" component={PageOne}/>
    <Route path="/pagetwo" component={PageTwo}/>
  </Router>
), mountNode)
