import React from 'react'
import './/Login.css';
import Landingpage from '../landingpage/Landingpage';
import Signup from '../signup/Signup';
import { Outlet, Link } from "react-router-dom";

//This is the login page
const Login = () => {
  return (
    <div>
        <div className="back-btn">
            <button> <Link to="/">Back</Link></button>
        </div>
        <div className="container">
            <div className="head">
                <p className="heading">LOGIN</p>
            </div>
            <div className="content">
                <form action="">
                    <div className="emailid">
                        <label htmlFor="email">Email Address:</label><br />
                        <input type="email" className="email" placeholder='IamBatman@gmail.com'/>
                    </div>

                    <div className="passwords">
                        <label htmlFor="password">Password:</label><br />
                        <input type="password" className="password" placeholder='IamBatman'/>
                    </div>
                </form>
                <button className="submit">Submit</button>
            </div>
            <div className="bottom">
                <p>First time? <Link to="/Signup">Signup</Link></p>
            </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default Login