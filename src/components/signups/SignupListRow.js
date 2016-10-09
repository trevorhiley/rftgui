import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const SignupListRow = ({signup}) => {
  return (
    <tr>
      <td><a href={signup.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/signup/' + signup.id}>{signup.title}</Link></td>
      <td>{signup.authorId}</td>
      <td>{signup.category}</td>
      <td>{signup.length}</td>
    </tr>
  );
};

SignupListRow.propTypes = {
  signup: PropTypes.object.isRequired
};

export default SignupListRow;
