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
  
  
 const Stocks = () => {
    try {
        const response =  axios.request(options);
        console.log(response.data);
        return (<div> ${response.data} </div>)
    } catch (error) {
        console.error(error);
        return(<div>Nothing here</div>)
    }
  
}




export default Stocks