import React from 'react'
import { Route, IndexRoute } from 'react-router';
import App from './Components/App';
import HomePage from './Components/home/HomePage';
import About from './Components/about/AboutPage';
import CoursesPage from './Components/course/CoursesPage';
import ManageCoursePage from './Components/course/ManageCoursePage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={About} />
  </Route>
);
