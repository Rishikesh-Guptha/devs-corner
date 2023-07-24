import React from 'react';
import './/Signup.css';
import Landingpage from '../landingpage/Landingpage';
import Login from '../login/Login';
import { Outlet, Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
        <div className="back-btn">
            <button> <Link to="/">Back</Link></button>
        </div>
         <div className="container">
            <div className="head">
                <p className="heading">SIGNUP</p>
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

                    <div className="confirm-passwords">
                        <label htmlFor="password">Confirm Password:</label><br />
                        <input type="password" className="password" placeholder='OfcourseIamBatman'/>
                    </div>
                </form>
                <button className="submit">Submit</button>
            </div>
            <div className="bottom">
                <p>If this page is Familiar,you already have an account <Link to="/Login">Login</Link></p>
            </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default Signup