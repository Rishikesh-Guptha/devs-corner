import React from 'react'
import Navbar2 from '../navbar2/Navbar2'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Opensource = () => {
  return (
    <div>
      <div className="main-container">
        <div className="text-content">
          <p className="text-title">Open Source</p>
          <p className="title-text">This is the Space stone that opens a portal to great jobs for developers...</p>
        </div>
        <div className="tech-content">
          <div className="tech-content-opensource">
            <p className="tech-content-opensource-title">Basics</p>

            <Accordion sx={{maxWidth:0.95, marginLeft:5,marginBottom:2}}>
                  {/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"   >
                    <Typography>Git and Github</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ marginLeft:5}}>
                    <Typography sx={{ marginLeft:5}}>
                      The contents for how to use git and github lie here..
                    </Typography>
                  </AccordionDetails>
                </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Opensource