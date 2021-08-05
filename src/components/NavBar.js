
import React, { useState } from 'react'
import '../css/NavBar.scss'
import {Link} from 'react-router-dom'
function NavBar() {
 

    return (
        <div>
    <div class="nav">
    <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
     <Link to='/home'> <b className="color">CinemaWall</b></Link>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
      <div className="ok" ><Link to='/forms'> <b className="color">Add Cinema</b></Link> </div>
                            <div className="ok"><Link to='/addDirector'><b className="color">Add Director</b></Link></div>
                            <div className="ok"><Link to='/showMovies'><b className="color">Movie List</b></Link></div>
                            <div className="ok"><Link to='/director'><b className="color">Director List</b></Link></div>
                            <div className="ok">
                            <div class="dropdown">
  <button class="dropbtn"><b>Other Options</b></button>
  <div class="dropdown-content">
  <a><Link to='/deleteMovie'>Delete a Movie</Link></a>
  <a><Link to='/update'>Update Details</Link></a>
  </div>
</div> 
                            </div>

  </div>
</div>
        </div>
    )
}

export default NavBar
