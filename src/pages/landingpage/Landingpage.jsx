import React from 'react';
import ".//Landingpage.css";
import { Outlet, Link } from "react-router-dom";

//This page currently only has the navbar like structure .
//This is the first page that appears when the application is loaded
const Landingpage = () => {
	return (
		<div>
			<div className="navbar">
				<div className="nav-left">
					<p className="title">
						<Link
							className="nav-title"
							to="/"
							style={{ textDecoration: "none", color: "white" }}>
							Dev's Corner
						</Link>
					</p>
				</div>

				<div className="nav-right">
					<div className="login">
						<Link
							className="login"
							to="Login"
							style={{ textDecoration: "none", color: "white" }}>
							Login
						</Link>
					</div>
					<div className="signup">
						<Link
							className="signup"
							to="Signup"
							style={{ textDecoration: "none", color: "white" }}>
							Signup
						</Link>
					</div>
				</div>
			</div>
			<div className="main-text">
				<div className="main-text-content">
					<p className="main-title">
						The only Developers Incubation Base you will need..
					</p>
					<p className="wanna">Wanna hop in?</p>
					<Link to="Login">
						<button className="get-started">Get started</button>
					</Link>
				</div>
			</div>
			{/* <Navbar2/> */}
			<Outlet />
		</div>
	);
};

export default Landingpage