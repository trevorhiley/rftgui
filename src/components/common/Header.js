import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/">Home</IndexLink>
      {" | "}
      <Link to="/about">About</Link>
      {" | "}
      <Link to="/signups">Signups</Link>
    </nav>
  );
};

export default Header;
