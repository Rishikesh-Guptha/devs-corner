import React from 'react'
import './Opensource.css'
import Navbar2 from '../navbar2/Navbar2'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Opensource = () => {
  return (
		<div className="opensource-container">
			<Navbar2 />
			<div className="main-container-opensource">
				<div className="text-content">
					<p
						className="title-text"
						style={{ color: "white" }}>
						Open Source
					</p>
					<p
						className="text-title"
						style={{ color: "white" }}>
						This is the Space stone that opens a portal to great jobs for
						developers...
					</p>
				</div>
				<div className="tech-content">
					<div className="tech-content-opensource">
						<p
							className="tech-content-opensource-title"
							style={{ color: "white" }}>
							Basics
						</p>

						<Accordion sx={{ maxWidth: 0.95, marginLeft: 5, marginBottom: 2 }}>
							{/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content">
								<Typography>Git and Github</Typography>
							</AccordionSummary>
							<AccordionDetails sx={{ marginLeft: 5 }}>
								<Typography sx={{ marginLeft: 5 }}>
									The contents for how to use git and github lie here..
								</Typography>
							</AccordionDetails>
						</Accordion>

						<p
							className="tech-content-opensource-issues"
							style={{ color: "white" }}>
							Issues
						</p>

						<Accordion sx={{ maxWidth: 0.95, marginLeft: 5, marginBottom: 2 }}>
							{/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content">
								<Typography>Good First Issues</Typography>
							</AccordionSummary>
							<AccordionDetails sx={{ marginLeft: 5 }}>
								<Typography sx={{ marginLeft: 5 }}>
									The links for good first issues lie here...
								</Typography>
							</AccordionDetails>
						</Accordion>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Opensource