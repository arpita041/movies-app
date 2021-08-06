import React, { useState } from "react";
import "../css/NavBar.scss";
import { NavLink} from "react-router-dom";
function NavBar() {

let a = window.location.pathname;
// console.log(a);
// let k = document.querySelector('.nav__dropbtn');
// if(a==='/deleteMovie' || a==='/update')
// {
//   console.log("true");
//   k.classList.add('active');
//   console.log(k);
// }
// else{
//   k.classList.remove('active');
// }


  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav__header">
          <div className="nav__title">
            <NavLink to="/home" className="nav__link--color" activeClassName="nav__link--active">CinemaWall
            </NavLink>
          </div>
        </div>
        <div className="nav__btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav__links">
          <div className="nav__link">
            <NavLink to="/forms" className="nav__link--color" activeClassName="nav__link--active">Add Cinema
            </NavLink>{" "}
          </div>
          <div className="nav__link">
            <NavLink to="/addDirector" className="nav__link--color" activeClassName="nav__link--active">Add Director
            </NavLink>
          </div>
          <div className="nav__link">
            <NavLink to="/showMovies" className="nav__link--color" activeClassName="nav__link--active">Movie List
            </NavLink>
          </div>
          <div className="nav__link">
            <NavLink to="/director" className="nav__link--color">Director List
            </NavLink>
          </div>
          <div className="nav__link">
            <div class="dropdown">
              <button className="nav__dropbtn">
                Other Options
              </button>
              <div className="dropdown-content">
                <a>
                  <NavLink to="/deleteMovie" activeClassName="nav__link--active">Delete a Movie</NavLink>
                </a>
                <a>
                  <NavLink to="/update" activeClassName="nav__link--active">Update Details</NavLink>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
