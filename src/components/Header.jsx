import React from 'react'
import Navbar from './Navbar';


function Header() {
  return (
    <div id="main">
        <Navbar/>
        <div className="name">
        <h1>it's a <span>ReactJS</span> website</h1>
        <p className="details">most calendars are designed for teams. This is designed for freelancer who want a simple way to plan their school.</p>
        <div className="header-btns">
          <a href="" className="cv-btn">Hire me</a>
          <a href="" className="cv-btn1">Download app</a>
        </div>
        </div>
        <div className="arrow"></div>
    </div>
  )
}

export default Header