import React from 'react'


function Navbar() {
  return (
    <div style={{color:"Red", backgroundColor: "black" , display: "flex"}}> 
      <h2>Food meals</h2>
      <a style={{margin:"20px", color: "white"}}>Home </a>
      <a  style={{margin:"20px", color: "white"}}>Order </a>
      <a  style={{margin:"20px", color: "white"}}>Contact Us</a>
    </div>
  )
}

export default Navbar
