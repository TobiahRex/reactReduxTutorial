import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <h1>Manage Course</h1>
    );
  }
}

ManageCoursePage.PropTypes = {

};

function mapStateToProps(state, ownProps) {
  return { state }
}

function mapDispatchToProps(courseActions, dispatch) {
  return { actions: bindActionCreators(courseActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
