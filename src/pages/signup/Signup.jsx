import React, {useState} from 'react';
import './/Signup.css';
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, gprovider } from "../../firebase";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";

//This is the signup page
const Signup = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const signinwithgoogle = () => {
		console.log("google auth button is clicked");
		signInWithPopup(auth, gprovider).then((result) => {
			localStorage.setItem("isAuth", true);
			console.log(auth.currentUser.displayName);
			navigate("/Dashboard");
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		await createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				const usercollectionref = collection(db, "users");
				addDoc(usercollectionref, {
					email: user.email,
					array: {},
					linkedlist: {},
					stack: {},
					queue: {},
					tree: {},
					graph: {},
					sorting: {},
					searching: {},
					webdev: {},
					appdev: {},
					ai: {},
					cloud: {},
					blockchain: {},
					datascience: {},
					github: {},
				});
				const userid = user.uid;

				navigate("/Dashboard");
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
				// ..
			});
	};

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
					<p className="heading">SIGNUP</p>
				</div>
				<div className="content-signup">
					<form action="">
						<div className="emailid-signup">
							<label htmlFor="email">Email Address:</label>
							<br />
							<input
								type="email"
								className="email"
								placeholder="IamBatman@gmail.com"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								required
							/>
						</div>

						<div className="passwords-signup">
							<label htmlFor="password">Password:</label>
							<br />
							<input
								type="password"
								className="password"
								placeholder="IamBatman"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								required
							/>
						</div>

						<div className="confirm-passwords">
							<label htmlFor="password">Confirm Password:</label>
							<br />
							<input
								type="password"
								className="password"
								placeholder="OfcourseIamBatman"
							/>
						</div>
					</form>
					<button
						className="submit"
						onClick={onSubmit}>
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
						If this page is Familiar,you already have an account{" "}
						<Link
							to="/Login"
							style={{
								textDecoration: "none",
								fontSize: "1.4rem",
								color: "blue",
								fontWeight: "bold",
							}}>
							Login
						</Link>
					</p>
				</div>
			</div>
			<Outlet />
		</div>
	);
};

export default Signup