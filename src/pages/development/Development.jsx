import React from 'react'
import './Development.css'
import Navbar2 from '../navbar2/Navbar2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Outlet, Link } from "react-router-dom";
import aipic from "../../assets/ai.jpeg";
import blockchainpic from "../../assets/blockchain.jpeg";
import cloudpic from "../../assets/cloud.jpeg";
import mobilepic from "../../assets/mobile.jpeg";
import webpic from "../../assets/web.jpeg";
import datasci from "../../assets/datasci.jpeg";

const Development = () => {
	return (
		<div>
			<div className="development-index-container">
				<Navbar2 />
				<div className="development-main-content">
					<div className="development-text-content">
						<p
							className="title-text"
							style={{ color: "white" }}>
							Development
						</p>
						<p
							className="text-title"
							style={{ color: "white" }}>
							This is junction where u choose u r path.. Do it wisely..
						</p>
					</div>
					<div className="development-content">
						<div className="row1">
							<Card
								sx={{
									maxWidth: 345,
									marginLeft: 8,
									height: 240,
									width: 325,
									boxShadow: 5,
								}}>
								<Link
									to="/Web_dev"
									style={{ textDecoration: "none", color: "black" }}>
									<CardActionArea>
										<CardMedia
											component="img"
											height="140"
											image={webpic}
											alt="web development pic"
											sx={{ backgroundRepeat: "none" }}
										/>
										<CardContent>
											<Typography
												gutterBottom
												variant="h5"
												component="div"
												sx={{ textAlign: "center" }}>
												Web Development
											</Typography>
											{/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography> */}
										</CardContent>
									</CardActionArea>
								</Link>
							</Card>

							<Card
								sx={{
									maxWidth: 345,
									marginLeft: 8,
									height: 240,
									width: 325,
									boxShadow: 5,
								}}>
								<Link
									to="/App_dev"
									style={{ textDecoration: "none", color: "black" }}>
									<CardActionArea>
										<CardMedia
											component="img"
											height="140"
											image={mobilepic}
											alt="app development pic"
										/>
										<CardContent>
											<Typography
												gutterBottom
												variant="h5"
												component="div"
												sx={{ textAlign: "center" }}>
												App Development
											</Typography>
											{/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography> */}
										</CardContent>
									</CardActionArea>
								</Link>
							</Card>

							<Card
								sx={{
									maxWidth: 345,
									marginLeft: 8,
									height: 240,
									width: 325,
									boxShadow: 5,
								}}>
								<Link
									to="/Cloud"
									style={{ textDecoration: "none", color: "black" }}>
									<CardActionArea>
										<CardMedia
											component="img"
											height="140"
											image={cloudpic}
											alt="cloud computing pic"
										/>
										<CardContent>
											<Typography
												gutterBottom
												variant="h5"
												component="div"
												sx={{ textAlign: "center" }}>
												Cloud Computing
											</Typography>
											{/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography> */}
										</CardContent>
									</CardActionArea>
								</Link>
							</Card>
						</div>

						<div className="row2">
							<Card
								sx={{
									maxWidth: 345,
									marginLeft: 8,
									height: 240,
									width: 325,
									boxShadow: 5,
								}}>
								<Link
									to="/Blockchain"
									style={{ textDecoration: "none", color: "black" }}>
									<CardActionArea>
										<CardMedia
											component="img"
											height="140"
											image={blockchainpic}
											alt="Blockchain pic"
										/>
										<CardContent>
											<Typography
												gutterBottom
												variant="h5"
												component="div"
												sx={{ textAlign: "center" }}>
												Blockchain
											</Typography>
											{/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography> */}
										</CardContent>
									</CardActionArea>
								</Link>
							</Card>

							<Card
								sx={{
									maxWidth: 345,
									marginLeft: 8,
									height: 240,
									width: 325,
									boxShadow: 5,
								}}>
								<Link
									to="/Ai"
									style={{ textDecoration: "none", color: "black" }}>
									<CardActionArea>
										<CardMedia
											component="img"
											height="140"
											image={aipic}
											alt="AI pic"
										/>
										<CardContent>
											<Typography
												gutterBottom
												variant="h5"
												component="div"
												sx={{ textAlign: "center" }}>
												Artificial Intelligence
											</Typography>
											{/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography> */}
										</CardContent>
									</CardActionArea>
								</Link>
							</Card>

							<Card
								sx={{
									maxWidth: 345,
									marginLeft: 8,
									height: 240,
									width: 325,
									boxShadow: 5,
								}}>
								<Link
									to="/Data_science"
									style={{ textDecoration: "none", color: "black" }}>
									<CardActionArea>
										<CardMedia
											component="img"
											height="140"
											image={datasci}
											alt="Data science"
										/>
										<CardContent>
											<Typography
												gutterBottom
												variant="h5"
												component="div"
												sx={{ textAlign: "center" }}>
												Data Science
											</Typography>
											{/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography> */}
										</CardContent>
									</CardActionArea>
								</Link>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Development