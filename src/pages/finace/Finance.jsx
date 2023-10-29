import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Navbar2 from '../navbar2/Navbar2'
import './Finance.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Finance = () => {
  return (
		<div className="finance-content">
			<Navbar2 />
			<div className="main-content-finance">
				<div className="head">
					<p className="title-text">Finance Managment</p>
					<p className="text-title">
						This is the place where you learn , earning is only a part of the
						process...
					</p>
				</div>
				<div className="finance-content">
					<p className="finance-content-title">Investments</p>

					<Accordion sx={{ maxWidth: 0.95, marginLeft: 5, marginBottom: 2 }}>
						{/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content">
							<Typography>Why Invest?</Typography>
						</AccordionSummary>
						<AccordionDetails sx={{ marginLeft: 5 }}>
							<Typography sx={{ marginLeft: 5 }}>
								The contents for why to invest lie here..
							</Typography>
						</AccordionDetails>
					</Accordion>

					<p className="finance-content-title">Latest News</p>
					<Accordion sx={{ maxWidth: 0.95, marginLeft: 5, marginBottom: 2 }}>
						{/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content">
							<Typography>Finance News</Typography>
						</AccordionSummary>
						<AccordionDetails sx={{ marginLeft: 5 }}>
							<Typography sx={{ marginLeft: 5 }}>
								<Link to="/Stocks">Stocks</Link>
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
		</div>
	);
}

export default Finance