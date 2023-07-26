import React from 'react';
import './Navbar2.css';
import { Outlet, Link } from "react-router-dom";
import FaceIcon from '@mui/icons-material/Face';

const Navbar2 = () => {
  return (
    <div>
        <div className="navbar"> 
        <div className="nav-left">
        <p className="title"> <Link to="/" style={{textDecoration: 'none', color: 'black'}}>Dev's Corner</Link></p>
        </div>
        
        <div className="nav-right">
          {/* <p className="login"> <Link to="Login" style={{textDecoration: 'none', color: 'black'}}>Login</Link> </p>
          <p className="signup"><Link to="Signup" style={{textDecoration: 'none', color: 'black'}}>Signup</Link></p> */}
          <FaceIcon></FaceIcon>
        </div>
        
        </div>
        <div className="main-text">
          <div className="text-space1">
            
          </div>
            
        </div>
    </div>
  )
}

export default Navbar2