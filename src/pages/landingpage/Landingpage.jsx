import React from 'react'
import './/Landingpage.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Login from '../login/Login';
import Signup from '../signup/Signup';
import Navbar2 from '../navbar2/Navbar2';



//This page currently only has the navbar like structure .
//This is the first page that appears when the application is loaded
const Landingpage = () => {
  return (
    <div>
        <div className="navbar"> 
        <div className="nav-left">
        <p className="title"> <Link to="/" style={{textDecoration: 'none', color: 'black'}}>Dev's Corner</Link></p>
        </div>
        
        <div className="nav-right">
          <p className="login"> <Link to="Login" style={{textDecoration: 'none', color: 'black'}}>Login</Link> </p>
          <p className="signup"><Link to="Signup" style={{textDecoration: 'none', color: 'black'}}>Signup</Link></p>
        </div>
        
        </div>
        <div className="main-text">
          <div className="text-space1">
            <p>Let's make a new world</p>
          </div>
            
        </div>
        {/* <Navbar2/> */}
        <Outlet/>
    </div>
  )
}

export default Landingpage