import React, {PropTypes} from 'react';
import SignupListRow from './SignupListRow';

const SignupList = ({signups, deleteSignup}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
        {signups.map(signup =>
          <SignupListRow key={signup.id} signup={signup} />
        )}
      </tbody>
    </table>
  );
};

SignupList.propTypes = {
  signups: PropTypes.array.isRequired,
  deleteSignup: PropTypes.func.isRequired
};

export default SignupList;
