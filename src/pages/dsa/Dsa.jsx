import React from 'react'
import '../dsa/Dsa.css'
import Navbar2 from '../navbar2/Navbar2'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Dsa = () => {
  return (
    <div>
        <div className="main-container">
          <Navbar2/>
          <div className="main-content">
            <div className="text-content">
              <p className="text-title">
                Data Structure and Algorithms
              </p>
              <p className="title-text">
                This is the Briyani of Non-vegetarian Foods, its inevitable...
              </p>
            </div>
            <div className="tech-content">

              <Accordion sx={{maxWidth:0.95, marginLeft:5}}>
                {/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"   >
                  <Typography>Arrays</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ marginLeft:5}}>
                  <Typography sx={{ marginLeft:5}}>
                    The contents for arrays lie here..
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{maxWidth:0.95, marginLeft:5}}>
                {/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"   >
                  <Typography>Linked List</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ marginLeft:5}}>
                  <Typography sx={{ marginLeft:5}}>
                    The contents for Linked Lists lie here..
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{maxWidth:0.95, marginLeft:5}}>
                {/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"   >
                  <Typography>Stack</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ marginLeft:5}}>
                  <Typography sx={{ marginLeft:5}}>
                    The contents for Stack lie here..
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{maxWidth:0.95, marginLeft:5}}>
                {/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"   >
                  <Typography>Queue</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ marginLeft:5}}>
                  <Typography sx={{ marginLeft:5}}>
                    The contents for Queue lie here..
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{maxWidth:0.95, marginLeft:5}}>
                {/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"   >
                  <Typography>Tree</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ marginLeft:5}}>
                  <Typography sx={{ marginLeft:5}}>
                    The contents for Tree lie here..
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{maxWidth:0.95, marginLeft:5}} >
                {/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"  >
                  <Typography>Graph</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ marginLeft:10}}>
                  <Typography sx={{ marginLeft:10}}>
                    The contents for Graph lie here..
                  </Typography>
                </AccordionDetails>
              </Accordion>

              

            </div>
          </div>
        </div>
    </div>
  )
}

export default Dsa