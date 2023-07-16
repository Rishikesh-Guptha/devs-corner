import React from 'react'
import Navbar1 from '../navbar1/Navbar1'
import './/Landingpage.css'

const Landingpage = () => {
  return (
    <div>
        <div className="navbar"> 
        <Navbar1 />
        </div>
        <div className="main-text">
            <h1 className="heading">Dev's Corner</h1>
        </div>
    </div>
  )
}

export default Landingpage