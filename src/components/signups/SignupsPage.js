import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as signupActions from '../../actions/signupActions';

class SignupsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      signup: {name: ""}
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onNameChange(event) {
    const signup = this.state.signup;
    signup.name = event.target.value;
    this.setState({signup});
  }

  onClickSave(event) {
    const signup = this.state.signup;
    this.props.actions.createSignup(this.state.signup);
    signup.name = "";
    this.setState({signup});
  }

  signupRow(signup, index) {
    return (<div key={index}>{signup.name}</div>);
  }

  render() {
    return (
      <div className="container">
        <h1>Signups</h1>
        {this.props.signups.map(this.signupRow)}
        <h2>Signup</h2>
        <input
          type="text"
          onChange={this.onNameChange}
          value={this.state.signup.name}
        />
        <input
          type="submit"
          value="save"
          onClick={this.onClickSave}
        />
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
