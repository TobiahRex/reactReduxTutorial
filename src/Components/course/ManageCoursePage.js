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
      errors: {},
    };
  }

  render() {
    return (
      <CourseForm
        allAuthors={[]}
        course={this.state.course}
        errors={this.state.errors}
      />
    );
  }
}

ManageCoursePage.PropTypes = {
  course: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  const course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
  return { course };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(courseActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
