import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function CourseListRow({ course }) {
  return (
    <tr>
      <td><a href={course.watchHref}>Watch</a></td>
      <td><a href={course.watchHref}>{course.title}</a></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
}

CourseListRow.propTypes = { course: PropTypes.object.isRequired };

export default CourseListRow;
