import React from 'react'
import '../dsa/Dsa.css'
import Navbar2 from '../navbar2/Navbar2'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const Dsa = () => {
  return (
    <div>
        <div className="main-container">
          <Navbar2/>
          <div className="main-content">
            <div className="text-content">
              <p className="title-text">
                Data Structure and Algorithms
              </p>
              <p className="text-title">
                This is the Briyani of Non-vegetarian Foods, its inevitable...
              </p>
            </div>
            <div className="tech-content">
              <div className="tech-content-structures">
                <p className="tech-content-structures-title">Structures</p>
                  
                <Accordion sx={{maxWidth:0.95, marginLeft:5,marginBottom:2}}>
                  {/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"   >
                    <Typography>Arrays</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ marginLeft:5, alignContent:'space-between', display:'flex'}}>
                    <Typography sx={{ marginLeft:5}}>
                      The contents for arrays lie here..
                    </Typography>
                    <Link to="/Array"><button>Click here</button></Link>
                  </AccordionDetails>
                </Accordion>

                <Accordion sx={{maxWidth:0.95, marginLeft:5,marginBottom:2}}>
                  {/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"   >
                    <Typography>Linked List</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ marginLeft:5}}>
                    <Typography sx={{ marginLeft:5}}>
                      The contents for Linked Lists lie here..
                    </Typography>
                    <Link to="/Linked_list"><button>Click here</button></Link>
                  </AccordionDetails>
                </Accordion>

                <Accordion sx={{maxWidth:0.95, marginLeft:5,marginBottom:2}}>
                  {/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"   >
                    <Typography>Stack</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ marginLeft:5}}>
                    <Typography sx={{ marginLeft:5}}>
                      The contents for Stack lie here..
                    </Typography>
                    <Link to="/Stack"><button>Click here</button></Link>
                  </AccordionDetails>
                </Accordion>

                <Accordion sx={{maxWidth:0.95, marginLeft:5,marginBottom:2}}>
                  {/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"   >
                    <Typography>Queue</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ marginLeft:5}}>
                    <Typography sx={{ marginLeft:5}}>
                      The contents for Queue lie here..
                    </Typography>
                    <Link to="/Queue"><button>Click here</button></Link>
                  </AccordionDetails>
                </Accordion>

                <Accordion sx={{maxWidth:0.95, marginLeft:5,marginBottom:2}}>
                  {/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"   >
                    <Typography>Tree</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ marginLeft:5}}>
                    <Typography sx={{ marginLeft:5}}>
                      The contents for Tree lie here..
                    </Typography>
                    <Link to="/Array"><button>Click here</button></Link>
                  </AccordionDetails>
                </Accordion>

                <Accordion sx={{maxWidth:0.95, marginLeft:5,marginBottom:2}} >
                  {/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"  >
                    <Typography>Graph</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ marginLeft:10}}>
                    <Typography sx={{ marginLeft:10}}>
                      The contents for Graph lie here..
                    </Typography>
                    <Link to="/Array"><button>Click here</button></Link>
                  </AccordionDetails>
                </Accordion>

              </div>
              <div className="tech-content-algorithms">
                <p className="tech-content-algorithms-title">Algorithms</p>

                <Accordion sx={{maxWidth:0.95, marginLeft:5,marginBottom:2}}>
                  {/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"   >
                    <Typography>Sorting Algorithms</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ marginLeft:5}}>
                    <Typography sx={{ marginLeft:5}}>
                      The contents for sorting algorithms lie here..
                    </Typography>
                    <Link to="/Array"><button>Click here</button></Link>
                  </AccordionDetails>
                </Accordion>

                <Accordion sx={{maxWidth:0.95, marginLeft:5,marginBottom:2}}>
                  {/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"   >
                    <Typography>Searching Algorithms</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ marginLeft:5}}>
                    <Typography sx={{ marginLeft:5}}>
                      The contents for searching algorithms lie here..
                    </Typography>
                    <Link to="/Array"><button>Click here</button></Link>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="tech-content-dsa-sheets">
                <p className="tech-content-dsa-sheets-title">DSA sheets</p>

                <Accordion sx={{maxWidth:0.95, marginLeft:5,marginBottom:2}}>
                  {/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"   >
                    <Typography>Sheets</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ marginLeft:5}}>
                    <Typography sx={{ marginLeft:5}}>
                      The contents for DSA sheets  lie here..
                    </Typography>
                    <Link to="/Array"><button>Click here</button></Link>
                  </AccordionDetails>
                </Accordion>

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dsa