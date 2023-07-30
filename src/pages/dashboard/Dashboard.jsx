import React from 'react';
import './Dashboard.css';
import { Outlet, Link } from "react-router-dom";
import Navbar2 from '../navbar2/Navbar2';
import Login from '../login/Login';
import Dsa from '../dsa/Dsa.jsx';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Image } from 'mui-image'
import { Avatar, CardMedia } from '@mui/material';
import DSAPIC from'../../assets/data_structure.jpg';
import DEVELOPMENTPIC from '../../assets/development.jpg';
import OPENSOURCEPIC from '../../assets/open_source.jpg';
import FINANCEPIC from '../../assets/finance.jpg';

const Dashboard = () => {
  return (
    <div>
      <Navbar2/>
      <div className="main_content">
        <p className="headings">
          Courses
        </p>
       <Box sx={{display: 'flex',flexDirection: 'column','& > :not(style)': {m: 4,width: 1400,height: 280,},}}>
      {/* <Paper variant="outlined" /> */}
      
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

      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'#bdbdbd', borderRadius:5, i:100, display:'flex'}} >
      <img src={OPENSOURCEPIC} alt='dsaa pic' width={300} height={270} />
      <Paper variant="outlined" square sx={{alignItems:'stretch', backgroundColor:'#bdbdbd', height:260, width:1000, m:1, border:'none'}} >
      <div className="dsa">
          <div className="titles">
            Development
          </div>
          <Paper sx={{width:1000, height:2, backgroundColor:'black'}}></Paper>
          <div className="content">
            This is where a person transitions into a software developer from a guy who just solves CP problems.
          </div>
        </div>
      </Paper>
      </Paper>

      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'#bdbdbd', borderRadius:5, i:100, display:'flex'}} >
      <img src={DEVELOPMENTPIC} alt='dsaa pic' width={300} height={270} />
      <Paper variant="outlined" square sx={{alignItems:'stretch', backgroundColor:'#bdbdbd', height:260, width:1000, m:1, border:'none'}} >
      <div className="dsa">
          <div className="titles">
            Open Source
          </div>
          <Paper sx={{width:1000, height:2, backgroundColor:'black'}}></Paper>
          <div className="content">
            This is not exactly a course , but a portal to a whole new world of oppurtunities not just for jobs but also to change the world... It really does.
          </div>
        </div>
      </Paper>
      </Paper>

      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'#bdbdbd', borderRadius:5, i:100, display:'flex'}} >
      <img src={FINANCEPIC} alt='dsaa pic' width={300} height={270} />
      <Paper variant="outlined" square sx={{alignItems:'stretch', backgroundColor:'#bdbdbd', height:260, width:1000, m:1, border:'none'}} >
      <div className="dsa">
          <div className="titles">
            Finance Managment
          </div>
          <Paper sx={{width:1000, height:2, backgroundColor:'black'}}></Paper>
          <div className="content">
            It is not necessarily needed to get a Tech job, but very much needed to not need anymore job in the future, wanna know why?? Hop in
          </div>
        </div>
      </Paper>
      </Paper>
      
    </Box>
    

      </div>
    </div>
  )
}

export default Dashboard