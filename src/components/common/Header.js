import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import {Link, IndexLink} from 'react-router';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/">Home</IndexLink>
      {" | "}
      <Link to="/about">About</Link>
      {" | "}
      <Link to="/signups">Signups</Link>
      {" | "}
      {loading && <span>Loading</span>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool
};

export default Header;
