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

  componentWillReceiveProps(nextProps) {
    if (this.props.signup.id != nextProps.signup.id) {
      this.setState({signup: Object.assign({}, nextProps.signup)});
    }
  }

  updateSignupState(event) {
    const field = event.target.name;
    let signup = this.state.signup;
    signup[field] = event.target.value;
    return this.setState({signup: signup});
  }

  redirect () {
    this.context.router.push('/signups');
  }

  saveSignup(event) {
    event.preventDefault();
    this.props.actions.saveSignup(this.state.signup).then(() => {
      this.redirect();
    });

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

ManageSignupPage.contextTypes = {
  router: PropTypes.object
};

function getSignupFromState (signups, signupId) {
  const signup = signups.filter( signup => signup.id === signupId );
  if (signup.length === 1) return signup[0];
  return null;
}

function mapDispatchToProps(dispatch) {
  return ({
    actions: bindActionCreators(signupActions, dispatch)
  });
}

function mapStateToProps(state, ownProps) {
  const signupId = ownProps.params.id;
  let signup = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (signupId && state.signups.length > 0) {
    signup = getSignupFromState(state.signups, signupId);
  }

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
