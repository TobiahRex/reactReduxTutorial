import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function CourseListRow({ course }) {
  return (
    <tr>
      <td><a href={course.watchHref}>Watch</a></td>
      <td><Link to={`/course/${course.id}`}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
}

CourseListRow.propTypes = { course: PropTypes.object.isRequired };

export default CourseListRow;
