import React from 'react';
import './Navbar2.css';
import Error from '../error/Error.jsx';
import { auth } from '../../firebase';
import {signOut} from 'firebase/auth'
import { Outlet, Link } from "react-router-dom";
import FaceIcon from '@mui/icons-material/Face';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


const Navbar2 = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleclose_logout=(e)=>{
    setAnchorEl(null);
    e.preventDefault();
    // auth.signOut();
    signOut(auth);
    localStorage.setItem("isAuth",false);
    console.log('User signed out!');
  }
  return (
		<div>
			<div className="navbar">
				<div className="nav-left">
					<p className="title">
						{" "}
						<Link
							to="/Dashboard"
							style={{ textDecoration: "none", color: "white" }}>
							Dev's Corner
						</Link>
					</p>
					<p className="dashboard">
						<Link
							to="/Dashboard"
							style={{ textDecoration: "none", color: "white" }}>
							Dashboard
						</Link>
					</p>
					<p className="community">
						<Link
							to="/Community"
							style={{ textDecoration: "none", color: "white" }}>
							Community
						</Link>
					</p>
				</div>

				<div className="nav-right">
					<p style={{ color: "white" }}>
						Hello{" "}
						{auth.currentUser.email !== null ? (
							auth.currentUser.email
						) : (
							<Error />
						)}{" "}
						!!
					</p>
					{/* There is error in the above line, when someone tries to enter into the website without loggin in, type /dashboard in the url directly */}
					<Tooltip title="Account settings">
						<IconButton
							onClick={handleClick}
							size="small"
							sx={{ ml: 2 }}
							aria-controls={open ? "account-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}>
							{/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
							<FaceIcon
								sx={{ fontSize: 40, opacity: 1, color: "white" }}></FaceIcon>
						</IconButton>
					</Tooltip>
					<Menu
						anchorEl={anchorEl}
						id="account-menu"
						open={open}
						onClose={handleClose}
						onClick={handleClose}
						PaperProps={{
							elevation: 0,
							sx: {
								overflow: "visible",
								filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
								mt: 1.5,
								"& .MuiAvatar-root": {
									width: 32,
									height: 32,
									ml: -0.5,
									mr: 1,
								},
								"&:before": {
									content: '""',
									display: "block",
									position: "absolute",
									top: 0,
									right: 14,
									width: 10,
									height: 10,
									bgcolor: "background.paper",
									transform: "translateY(-50%) rotate(45deg)",
									zIndex: 0,
								},
							},
						}}
						transformOrigin={{ horizontal: "right", vertical: "top" }}
						anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
						<Link to="/ProfilePage">
							<MenuItem>
								<Avatar /> Profile
							</MenuItem>
						</Link>

						<Divider />

						<MenuItem onClick={handleClose}>
							<ListItemIcon>
								<Settings fontSize="small" />
							</ListItemIcon>
							Settings
						</MenuItem>
						<MenuItem onClick={handleclose_logout}>
							<Link
								to="/"
								style={{ textDecoration: "none", color: "black" }}>
								<ListItemIcon>
									<Logout fontSize="small" />
								</ListItemIcon>
								Logout
							</Link>
						</MenuItem>
					</Menu>
				</div>
			</div>
			<div className="main-text">
				<div className="text-space1"></div>
			</div>
			<Outlet />
		</div>
	);
}

export default Navbar2