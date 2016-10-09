import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from './common/Header';

class App extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <Header loading={this.props.ajaxLoading}/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  ajaxLoading: PropTypes.bool
};


function mapStateToProps(state, ownProps) {
  console.log(`Ajax loading is ${state.ajaxStates}`);
  let ajaxLoading = state.ajaxStates > 0;
  return {
    ajaxLoading: ajaxLoading
  };
}
export default connect(mapStateToProps)(App);
