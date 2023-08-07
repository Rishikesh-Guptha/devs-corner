import React, {useState} from 'react';
import './/Signup.css';
import Landingpage from '../landingpage/Landingpage';
import Login from '../login/Login';
import Dashboard from '../dashboard/Dashboard.jsx';
import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
// import { auth } from '.../firebase.js';
// import { auth } from 'firebase.js';
import { auth } from '../../firebase';

//This is the signup page
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/Dashboard")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
    }

  return (
    <div>
        <div className="back-btn">
            <button> <Link to="/" style={{textDecoration: 'none', color: 'black'}}>Back</Link></button>
        </div>
         <div className="container">
            <div className="head">
                <p className="heading">SIGNUP</p>
            </div>
            <div className="content">
                <form action="">
                    <div className="emailid">
                        <label htmlFor="email">Email Address:</label><br />
                        <input type="email" className="email" placeholder='IamBatman@gmail.com' onChange={(e) => setEmail(e.target.value)}  value={email} required/>
                    </div>

                    <div className="passwords">
                        <label htmlFor="password">Password:</label><br />
                        <input type="password" className="password" placeholder='IamBatman' onChange={(e) => setPassword(e.target.value)} value={password} required/>
                    </div>

                    <div className="confirm-passwords">
                        <label htmlFor="password">Confirm Password:</label><br />
                        <input type="password" className="password" placeholder='OfcourseIamBatman'/>
                    </div>
                </form>
                <button className="submit" onClick={onSubmit}>Submit</button>
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