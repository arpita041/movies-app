import React, { useState } from "react";
import {
  Dropdown,
  NavDropdown,
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/navv.css";

const NavBarrr = (props) => {
  const [state, setState] = useState({
    searchVal: "",
    name: "movie",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // var btns=document.getElementsByClassName('color')
  // console.log(btns)
  // for( var i=0;i<btns.length;i++){
  //     btns[i].addEventListener('click',function(){
  //         var curr=document.getElementsByClassName('active')
  //         curr[0].class=curr[0].class.replace('active')
  //     })
  // }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">
            <b className="colorr">CinemaWall</b>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <span className="nav-link active">
              <Link to="/forms">
                {" "}
                <b className="color active">Add Cinema</b>
              </Link>{" "}
            </span>
            <span className="nav-link">
              <Link to="/addDirector">
                <b className="color">Add Director</b>
              </Link>
            </span>
            <span className="nav-link">
              <Link to="/showMovies">
                <b className="color">Movie List</b>
              </Link>
            </span>
            <span className="nav-link">
              <Link to="/director">
                <b className="color">Director List</b>
              </Link>
            </span>
            <NavDropdown
              title="Other Options"
              id="collasible-nav-dropdown"
              style={{ color: "white " }}
            >
              <NavDropdown.Item>
                <Link to="/deleteMovie">
                  <b className="colorB">Delete a Movie</b>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/update">
                  <b className="colorB">Update Data</b>
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline id="form1">
            <div>
              <FormControl
                type="text"
                name="searchVal"
                onChange={handleInputChange}
                placeholder="Search"
                className="mr-sm-2"
              />
            </div>
            <div style={{ marginLeft: "5px" }}>
              <Dropdown>
                <Dropdown.Toggle className="btnClass" id="dropdown-basic">
                  Search
                </Dropdown.Toggle>

                <Dropdown.Menu id="drop">
                  <Link
                    to={{
                      pathname: "/movies",
                      state,
                    }}
                  >
                    Movie
                  </Link>
                  <br /> <hr />
                  <Link
                    to={{
                      pathname: "/directors",
                      state,
                    }}
                  >
                    Director
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarrr;
