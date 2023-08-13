import React from 'react';
import './Dashboard.css';
import { Outlet, Link } from "react-router-dom";
import { auth } from "../../firebase";
import Navbar2 from '../navbar2/Navbar2';
import Login from '../login/Login';
import Dsa from '../dsa/Dsa.jsx';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import DSAPIC from'../../assets/data_structure.jpg';
import DEVELOPMENTPIC from '../../assets/development.jpg';
import OPENSOURCEPIC from '../../assets/open_source.jpg';
import FINANCEPIC from '../../assets/finance.jpg';

const Dashboard = () => {
  auth.onAuthStateChanged(user => {
    if (user) {
      console.log(user.email + " is logged in!");
    } else {
      console.log('User is logged out!');
    }
  });
  return (
    <div>
      <Navbar2/>
      <div className="main_content">
        <p className="headings">
          Courses
        </p>
       <Box sx={{display: 'flex',flexDirection: 'column','& > :not(style)': {m: 4,width: 1400,height: 280,},}}>
      {/* <Paper variant="outlined" /> */}
      
      {/* Data Structure and Algorithms  */}
      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'#bdbdbd', borderRadius:5, i:100, display:'flex'}} >
      <img src={DSAPIC} alt='dsaa pic' width={300} height={270} />
      <Link to="/Dsa" style={{textDecoration: 'none', color: 'black'}}>
      <Paper variant="outlined" square sx={{alignItems:'stretch', backgroundColor:'#bdbdbd', height:260, width:1000, m:1, border:'none'}} >
        <div className="dsa">
          <div className="titles">
            Data Structures and Algorithms
          </div>
          <Paper sx={{width:1000, height:2, backgroundColor:'black'}}></Paper>
          <div className="content">
            This course has all the necessary contents to give you the real power to tackle the long and hedious dsa rounds, and also to give some dsa knowledge.
          </div>
        </div>
      </Paper>
      </Link>
      </Paper>

      {/* Development  */}
      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'#bdbdbd', borderRadius:5, i:100, display:'flex'}} >
      <img src={OPENSOURCEPIC} alt='development pic' width={300} height={270} />
      <Link to="/Development" style={{textDecoration: 'none', color: 'black'}}>
      <Paper variant="outlined" square sx={{alignItems:'stretch', backgroundColor:'#bdbdbd', height:260, width:1000, m:1, border:'none'}} >
      <div className="development">
          <div className="titles">
            Development
          </div>
          <Paper sx={{width:1000, height:2, backgroundColor:'black'}}></Paper>
          <div className="content">
            This is where a person transitions into a software developer from a guy who just solves CP problems.
          </div>
        </div>
      </Paper>
      </Link>
      </Paper>

      {/* Opensource  */}
      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'#bdbdbd', borderRadius:5, i:100, display:'flex'}} >
      <img src={DEVELOPMENTPIC} alt='open source pic' width={300} height={270} />
      <Link to="/Opensource" style={{textDecoration: 'none', color: 'black'}}>
      <Paper variant="outlined" square sx={{alignItems:'stretch', backgroundColor:'#bdbdbd', height:260, width:1000, m:1, border:'none'}} >
      <div className="opensource">
          <div className="titles">
            Open Source
          </div>
          <Paper sx={{width:1000, height:2, backgroundColor:'black'}}></Paper>
          <div className="content">
            This is not exactly a course , but a portal to a whole new world of oppurtunities not just for jobs but also to change the world... It really does.
          </div>
        </div>
      </Paper>
      </Link>
      </Paper>

      {/* Finance Managment  */}
      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'#bdbdbd', borderRadius:5, i:100, display:'flex'}} >
      <img src={FINANCEPIC} alt='finance pic' width={300} height={270} />
      <Link to="/Finance" style={{textDecoration: 'none', color: 'black'}}>
      <Paper variant="outlined" square sx={{alignItems:'stretch', backgroundColor:'#bdbdbd', height:260, width:1000, m:1, border:'none'}} >
      <div className="finance">
          <div className="titles">
            Finance Management
          </div>
          <Paper sx={{width:1000, height:2, backgroundColor:'black'}}></Paper>
          <div className="content">
            It is not necessarily needed to get a Tech job, but very much needed to not need anymore job in the future, wanna know why?? Hop in
          </div>
        </div>
      </Paper>
      </Link>
      </Paper>

      {/* Tech jobs and others  */}
      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'#bdbdbd', borderRadius:5, i:100, display:'flex'}} >
      <img src={FINANCEPIC} alt='finance pic' width={300} height={270} />
      <Link to="/Jobs" style={{textDecoration: 'none', color: 'black'}}>
      <Paper variant="outlined" square sx={{alignItems:'stretch', backgroundColor:'#bdbdbd', height:260, width:1000, m:1, border:'none'}} >
      <div className="finance">
          <div className="titles">
            Jobs and Others
          </div>
          <Paper sx={{width:1000, height:2, backgroundColor:'black'}}></Paper>
          <div className="content">
            Here you will be updated with all job oppourtunities and other initial steps to be followed to get familier with the tech world..
          </div>
        </div>
      </Paper>
      </Link>
      </Paper>
      
    </Box>
    
      </div>
      <Outlet/>
    </div>
  )
}

export default Dashboard