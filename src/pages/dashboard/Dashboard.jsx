import React from 'react';
import './Dashboard.css';
import Navbar2 from '../navbar2/Navbar2';
import Login from '../login/Login';
import Dsa from '../dsa/Dsa.jsx';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Dashboard = () => {
  return (
    <div>
      <Navbar2/>
      <div className="main_content">
        <p className="headings">
          Courses
        </p>
       <Box sx={{display: 'flex',flexDirection: 'column','& > :not(style)': {m: 3.5,width: 1400,height: 280,},}}>
      {/* <Paper variant="outlined" /> */}
      
      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'#bdbdbd', borderRadius:5, i:100}} >
      <Paper variant="outlined" square sx={{backgroundColor:'white',width:375, height: 240 ,m:2.5, borderRadius:5 }}>DSA</Paper>
      
      </Paper>

      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'#bdbdbd', borderRadius:5, i:100}} >
      <Paper variant="outlined" square sx={{backgroundColor:'white',width:375, height: 240 ,m:2.5,borderRadius:5 }}>Development</Paper>
      </Paper>

      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'#bdbdbd', borderRadius:5, i:100}} >
      <Paper variant="outlined" square sx={{backgroundColor:'white',width:375, height: 240 ,m:2.5,borderRadius:5 }}>Open Source</Paper>
      </Paper>

      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'#bdbdbd', borderRadius:5, i:100}} >
      <Paper variant="outlined" square sx={{backgroundColor:'white',width:375, height: 240 ,m:2.5,borderRadius:5 }}>Finance Managment</Paper>
      </Paper>
      
    </Box>
    

      </div>
    </div>
  )
}

export default Dashboard