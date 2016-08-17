import * as types from './actionTypes';
import courseAPI from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return {
    courses,
    type: 'LOAD_COURSES_SUCCESS',
  };
}

export function loadCourses() {
  return (dispatch) => courseAPI.getAllCourses()
    .then(courses => dispatch(loadCoursesSuccess(courses)))
    .catch(error => { throw error; });
}
