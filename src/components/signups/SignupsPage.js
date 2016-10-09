import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SignupList from './SignupList';
import * as signupActions from '../../actions/signupActions';
import {browserHistory} from 'react-router';

class SignupsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddSignupPage = this.redirectToAddSignupPage.bind(this);
  }

  redirectToAddSignupPage() {
    browserHistory.push('signup');
  }

  render() {
    const {signups} = this.props;
    return (
      <div>
        <h1>Signups</h1>
        <input type="submit"
          value="Add Signup"
          className="btn btn-primary"
          onClick={this.redirectToAddSignupPage}/>
        <SignupList signups={signups}/>
      </div>
    );
  }
}

SignupsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  signups: PropTypes.array.isRequired
};

function mapDispatchToProps(dispatch) {
  return ({
    actions: bindActionCreators(signupActions, dispatch)
  });
}

function mapStateToProps(state, ownProps) {
  return {signups: state.signups};
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupsPage);
