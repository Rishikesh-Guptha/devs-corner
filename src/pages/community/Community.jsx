import React from 'react';
import './Community.css';
import Navbar2 from '../navbar2/Navbar2';
import { Link } from 'react-router-dom';

const Community = () => {
  return (
    <div>
        <Navbar2/>
        <div className="main-content">
            <p>Community</p>
            <Link to="/Create_posts"><p className="create-posts">Create post</p></Link>
            
        </div>
    </div>
  )
}

export default Community