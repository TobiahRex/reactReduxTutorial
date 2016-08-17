import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function CourseListRow({ course }) {
  return (
    <tr>
      <td><a href={course.watchHref}>Watch</a></td>
      <td><a href={course.watchHref}>{course.title}</a></td>
      <td><a href={course.watchHref}>{course.authorId}</a></td>
      <td><a href={course.watchHref}>{course.category}</a></td>
      <td><a href={course.watchHref}>{course.length}</a></td>
    </tr>
  );
}

CourseListRow.propTypes = { course: PropTypes.object.isRequired };

export default CourseListRow;
