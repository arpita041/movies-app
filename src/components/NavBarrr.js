import React, { useState } from 'react'
import { Dropdown, NavDropdown, Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './navv.css'
const NavBarrr = props => {
    const [state, setState] = useState({
        searchVal: '',
        name: 'movie'
    });
    const handleInputChange = event => {
        const { name, value } = event.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/" style={{ color: 'white ' }}> <b>CinemaWall</b> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/forms" style={{ color: 'white ' }}> <b>Add Cinema</b> </Nav.Link>
                            <Nav.Link href="/addDirector" style={{ color: 'white ' }}><b>Add Director</b></Nav.Link>
                            <Nav.Link href="/showMovies" style={{ color: 'white ' }}><b>Movie List</b></Nav.Link>
                            <Nav.Link href="/director" style={{ color: 'white ' }}><b>Director List</b></Nav.Link>
                            <NavDropdown title="Other Options" id="collasible-nav-dropdown" style={{ color: 'white ' }}>
                                <NavDropdown.Item href="/deleteMovie" style={{ color: 'black ' }}><b>Delete a Movie</b></NavDropdown.Item>
                                <NavDropdown.Item href="/update" style={{ color: 'black ' }}><b>Update Data</b></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                            <Form inline id='form1'>
                                
                                <FormControl type="text" name="searchVal" onChange={handleInputChange} placeholder="Search" className="mr-sm-2" /> 
                                <Dropdown>
                                    <Dropdown.Toggle className="btnClass" id="dropdown-basic">
                                        Search
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu id='drop'>
                                        <Link
                                            to={{
                                                pathname: "/movies",
                                                state
                                            }}
                                        >
                                            Movie
                                        </Link>
                                        <br /> <hr />
                                        <Link
                                            to={{
                                                pathname: "/directors",
                                                state
                                            }}
                                        >
                                            Director
                                        </Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form>

                    </Navbar.Collapse>

               
            </Navbar>
        </div>

            );

}

            export default NavBarrr
