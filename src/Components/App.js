import React, { PropTypes } from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header here...</p>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = { // this is called 'prop type validation'
  children: PropTypes.object.isRequired,
};

export default App;
