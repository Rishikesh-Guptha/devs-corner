import React from 'react';
import './Dashboard.css';
import Navbar2 from '../navbar2/Navbar2';

const Dashboard = () => {
  return (
    <div>
      <Navbar2/>
      <div className="content">
        <p>This is the page where the users get redirected after authentication</p>
        <p>This is the place where we display all the dsa, development etc...</p>
      </div>
    </div>
  )
}

export default Dashboard