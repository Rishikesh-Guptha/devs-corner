import React from 'react'
const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://mboum-finance.p.rapidapi.com/ne/news',
    headers: {
      'X-RapidAPI-Key': 'e153357261msh4a591fafe82aacfp1c540djsn327150702a6c',
      'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com'
    }
  };
  //We have to subscribe for the rapidapi , otherwise it is working..
  
 const Stocks = () => {
   
    fetch('https://mboum-finance.p.rapidapi.com/ne/news',{
        headers: {
            'X-RapidAPI-Key': 'e153357261msh4a591fafe82aacfp1c540djsn327150702a6c',
            'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com'
          } 
    })
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data);
    })
  return(
    <div></div>
  )
}




export default Stocks