import React from 'react'
import { Route, IndexRoute } from 'react-router';
import App from './Components/App';
import HomePage from './Components/home/HomePage';
import About from './Components/about/About';

export default(
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='about' component={About} />
  </Route>
);