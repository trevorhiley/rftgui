import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as signupActions from '../../actions/authorActions';
import SignupForm from './SignupForm';

class ManageSignupPage  extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      signup: Object.assign({}, props.signup),
      errors: {}
    };

  }

  render() {
    return (
      <SignupForm
        errors={this.state.errors}
        signup={this.state.signup}
        allAuthors={this.props.authors}/>
    );
  }
}

ManageSignupPage.propTypes = {
  signup: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
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
