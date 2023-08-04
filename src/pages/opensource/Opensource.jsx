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
        <div className="tech-content"></div>
      </div>
    </div>
  )
}

export default Opensource