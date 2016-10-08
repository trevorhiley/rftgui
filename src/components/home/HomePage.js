import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render () {
    return (
      <div className="jumbotron">
        <h1>RFTG</h1>
        <p>Welcome to RFTG Online</p>
        <Link to="about" className="btn btn-primary">Start Playing</Link>
      </div>

    );
  }
}

export default HomePage;
