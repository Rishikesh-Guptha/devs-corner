import React from 'react';
import './Dashboard.css';
import Navbar2 from '../navbar2/Navbar2';
import Login from '../login/Login';
import Dsa from '../dsa/Dsa.jsx';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// or
import { Image } from 'mui-image'

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
      
      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'#bdbdbd', borderRadius:5, i:100, display:'flex'}} >
      {/* <Paper variant="outlined" component={'image'} alt="DSA pic" src='../assets/data_structure.jpg' square sx={{backgroundColor:'white',width:375, height: 240 ,m:2.5, borderRadius:5 }}></Paper> */}
      <img src='../../assets/data_structure.jpg'alt='dsa pic' width={375} height={240}/>
      {/* <Image src="../../assets/data_structure.jpg" alt='dsa pic' width={375} height={240}   /> */}
      <Paper variant="outlined" square sx={{alignItems:'stretch', backgroundColor:'#bdbdbd', height:260, width:1000, m:1, border:'none'}} >DSA</Paper>
      </Paper>

      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'#bdbdbd', borderRadius:5, i:100, display:'flex'}} >
      <Paper variant="outlined" square sx={{backgroundColor:'white',width:375, height: 240 ,m:2.5,borderRadius:5 }}></Paper>
      <Paper variant="outlined" square sx={{alignItems:'stretch', backgroundColor:'#bdbdbd', height:260, width:1000, m:1, border:'none'}} >DEVELOPMENT</Paper>
      </Paper>

      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'#bdbdbd', borderRadius:5, i:100, display:'flex'}} >
      <Paper variant="outlined" square sx={{backgroundColor:'white',width:375, height: 240 ,m:2.5,borderRadius:5 }}></Paper>
      <Paper variant="outlined" square sx={{alignItems:'stretch', backgroundColor:'#bdbdbd', height:260, width:1000, m:1, border:'none'}} >OPEN SOURCE</Paper>
      </Paper>

      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'#bdbdbd', borderRadius:5, i:100, display:'flex'}} >
      <Paper variant="outlined" square sx={{backgroundColor:'white',width:375, height: 240 ,m:2.5,borderRadius:5 }}></Paper>
      <Paper variant="outlined" square sx={{alignItems:'stretch', backgroundColor:'#bdbdbd', height:260, width:1000, m:1, border:'none'}} >FINANCE</Paper>
      </Paper>
      
    </Box>
    

      </div>
    </div>
  )
}

export default Dashboard