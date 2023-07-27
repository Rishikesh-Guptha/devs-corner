import React from 'react';
import './Dashboard.css';
import Navbar2 from '../navbar2/Navbar2';
import Login from '../login/Login';
// import Dsa from '../dsa/Dsa.jsx';

const Dashboard = () => {
  return (
    <div>
      <Navbar2/>
      
      <div className="content">
        <p className='abc'>This is the page where the users get redirected after authentication</p>
        <p>This is the place where we display all the dsa, development etc...</p>
      </div>
    </div>
  )
}

export default Dashboard