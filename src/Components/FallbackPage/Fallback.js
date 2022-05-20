import React from 'react'
import {Link } from 'react-router-dom'

function Fallback() {
  return (
    <div className='fallback'>
        <div className="fallback_bg">
    <img className="logo" src="/Images/logo.svg" alt="logo" />
    <Link to="/login">
      <button className="login-sigin-btn">Home</button>
    </Link>
  </div>
  <div className="fallback-Img-Bg"></div>

  </div>
  )
}

export default Fallback