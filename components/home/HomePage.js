import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render(){
    return <div className="jumbotron">
        <h1>My First React Project</h1>
        <p>Hi This is my first react router in Es6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>;
  }
}
export  default HomePage;
