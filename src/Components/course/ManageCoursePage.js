import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      error: {},
    };
  }

  render() {
    return (
      <div>
        <h1>Manage Course</h1>
        <CourseForm
          allAuthors={[]}
          errors={this.state.errors}
          course={this.state.course} />
      </div>
    );
  }
}

ManageCoursePage.PropTypes = {
  course: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  const course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
  return { course };
}

function mapDispatchToProps(courseActions, dispatch) {
  return { actions: bindActionCreators(courseActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
