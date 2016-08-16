import * as types from './actionTypes';

export function createCourse(course) {
  return {
    course,
    type: 'CREATE_COURSE',
  };
}
