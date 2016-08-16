import React from 'react'
import { Route, IndexRoute } from 'react-router';
import App from './Components/App';
import HomePage from './Components/home/HomePage';
import About from './Components/about/AboutPage';
import CoursesPage from './Components/course/CoursesPage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="about" component={About} />
  </Route>
);
