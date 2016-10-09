import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as signupActions from '../../actions/signupActions';
import SignupForm from './SignupForm';

class ManageSignupPage  extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      signup: Object.assign({}, props.signup),
      errors: {}
    };

    this.updateSignupState = this.updateSignupState.bind(this);
    this.saveSignup = this.saveSignup.bind(this);

  }

  updateSignupState(event) {
    const field = event.target.name;
    let signup = this.state.signup;
    signup[field] = event.target.value;
    return this.setState({signup: signup});
  }

  saveSignup(event) {
    event.preventDefault();
    this.props.actions.saveSignup(this.state.signup);
  }

  render() {
    return (
      <SignupForm
        errors={this.state.errors}
        signup={this.state.signup}
        allAuthors={this.props.authors}
        onChange={this.updateSignupState}
        onSave={this.saveSignup}/>
    );
  }
}

ManageSignupPage.propTypes = {
  signup: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return ({
    actions: bindActionCreators(signupActions, dispatch)
  });
}

function mapStateToProps(state, ownProps) {
  let signup = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
  return {
    signup,
    authors: authorsFormattedForDropdown
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageSignupPage);
