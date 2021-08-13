import React, { useState } from "react";
import "../css/NavBar.scss";
import { NavLink } from "react-router-dom";
function NavBar() {
  let a = window.location.pathname;

  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav__header">
          <div className="nav__title">
            <NavLink
              to="/home"
              className="nav__link--color"
              activeClassName="nav__link--active"
            >
              CinemaWall
            </NavLink>
          </div>
        </div>
        <div className="nav__btn">
          <label for="nav-check">
            <span>...</span>
            <span>...</span>
            <span>...</span>
          </label>
        </div>

        <div className="nav__links">
          <div className="nav__link">
            <NavLink
              to="/forms"
              className="nav__link--color"
              activeClassName="nav__link--active"
            >
              Add Cinema
            </NavLink>{" "}
          </div>
          <div className="nav__link">
            <NavLink
              to="/addDirector"
              className="nav__link--color"
              activeClassName="nav__link--active"
            >
              Add Director
            </NavLink>
          </div>
          <div className="nav__link">
            <NavLink
              to="/showMovies"
              className="nav__link--color"
              activeClassName="nav__link--active"
            >
              Movie List
            </NavLink>
          </div>
          <div className="nav__link">
            <NavLink to="/director" className="nav__link--color">
              Director List
            </NavLink>
          </div>
          <div className="nav__link">
            <div className="dropdown">
              <button className="nav__dropbtn">Other Options</button>
              <div className="dropdown-content">
                <span className="dropdown__link">
                  <NavLink
                    className="nav__link--color"
                    to="/deleteMovie"
                    activeClassName="nav__link--active"
                  >
                    Delete a Movie
                  </NavLink>
                </span>
                <span className="dropdown__link">
                  <NavLink
                    to="/update"
                    className="nav__link--color"
                    activeClassName="nav__link--active"
                  >
                    Update Details
                  </NavLink>
                </span>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
