import React from 'react';
import './Dashboard.css';
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
       <Box sx={{display: 'flex',flexDirection: 'column','& > :not(style)': {m: 5,width: 1400,height: 280,},}}>
      {/* <Paper variant="outlined" /> */}
      
      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'#bdbdbd', borderRadius:5, i:100, display:'flex'}} >
      <img src={DSAPIC} alt='dsaa pic' width={320} height={270} />
      <Paper variant="outlined" square sx={{alignItems:'stretch', backgroundColor:'#bdbdbd', height:260, width:1000, m:1, border:'none'}} >
        <div className="dsa">
          <div className="dsa-title">
            Data Structures and Algorithms
          </div>
          <Paper sx={{width:1000, height:2, backgroundColor:'black'}}></Paper>
          <div className="content">
            This course has all the necessary contents to give you the real power to tackle the long and hedious dsa rounds, and also to give some dsa knowledge.
          </div>
        </div>
      </Paper>
      </Paper>

      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'#bdbdbd', borderRadius:5, i:100, display:'flex'}} >
      <img src={DEVELOPMENTPIC} alt='dsaa pic' width={320} height={270} />
      <Paper variant="outlined" square sx={{alignItems:'stretch', backgroundColor:'#bdbdbd', height:260, width:1000, m:1, border:'none'}} >
      <div className="dsa">
          <div className="dsa-title">
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
      <img src={OPENSOURCEPIC} alt='dsaa pic' width={320} height={270} />
      <Paper variant="outlined" square sx={{alignItems:'stretch', backgroundColor:'#bdbdbd', height:260, width:1000, m:1, border:'none'}} >OPEN SOURCE</Paper>
      </Paper>

      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'#bdbdbd', borderRadius:5, i:100, display:'flex'}} >
      <img src={FINANCEPIC} alt='dsaa pic' width={320} height={270} />
      <Paper variant="outlined" square sx={{alignItems:'stretch', backgroundColor:'#bdbdbd', height:260, width:1000, m:1, border:'none'}} >FINANCE</Paper>
      </Paper>
      
    </Box>
    

      </div>
    </div>
  )
}

export default Dashboard