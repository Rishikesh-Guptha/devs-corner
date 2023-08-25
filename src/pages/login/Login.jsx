import React, {useState} from 'react'
import './/Login.css';
import Landingpage from '../landingpage/Landingpage';
import Signup from '../signup/Signup';
import {  signInWithEmailAndPassword, signInWithPopup   } from 'firebase/auth';
import { Outlet, Link,NavLink, useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { auth, gprovider } from '../../firebase';
import Dashboard from '../dashboard/Dashboard';

//This is the login page
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signinwithgoogle=()=>{
        console.log("google auth button is clicked");
        signInWithPopup(auth, gprovider).then((result)=>{
            localStorage.setItem("isAuth",true);
            console.log(auth.currentUser.displayName);
            navigate("/Dashboard");

        })
    }
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/Dashboard")
            console.log(user);
            console.log(auth.currentUser.displayName);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }

  return (
		<div>
			<div className="back-btn">
				<button>
					{" "}
					<Link
						to="/"
						style={{ textDecoration: "none", color: "black" }}>
						Back
					</Link>
				</button>
			</div>
			<div className="containers">
				<div className="head">
					<p className="heading">LOGIN</p>
				</div>
				<div className="content">
					<form action="">
						<div className="emailid">
							<label htmlFor="email">Email Address:</label>
							<br />
							<input
								type="email"
								className="email"
								placeholder="Batman@gmail.com"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
						</div>

						<div className="passwords">
							<label htmlFor="password">Password:</label>
							<br />
							<input
								type="password"
								className="password"
								placeholder="IamBatman"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
							/>
						</div>
					</form>
					<button
						className="submit"
						onClick={onLogin}>
						Submit
					</button>
				</div>
				<div className="other-methods">
					<p className="or">---or---</p>
					<div className="icons">
						<button
							className="google-icon"
							onClick={signinwithgoogle}>
							<GoogleIcon fontsize="medium"></GoogleIcon>
						</button>
						<GitHubIcon
							className="github-icon"
							on></GitHubIcon>
					</div>
				</div>
				<div className="bottom">
					<p>
						First time? <Link to="/Signup">Signup</Link>
					</p>
				</div>
			</div>
			<Outlet />
		</div>
	);
}

export default Login