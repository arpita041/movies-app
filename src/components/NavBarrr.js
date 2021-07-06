import React, { Component } from 'react'
import { Button, NavDropdown, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

class NavBarrr extends Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <div className="col-sm-12">
                        <Navbar bg="dark" variant="dark">
                            <Navbar.Brand href="/" style={{ color: '#3BB7C4 ' }}>CinemaWall</Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link href="/forms" style={{ color: '#3BB7C4 ' }}>Add Cinema</Nav.Link>
                                <Nav.Link href="/addDirector" style={{ color: '#3BB7C4 ' }}>Add Director</Nav.Link>
                                {/* <Nav.Link href="/data"><Link to='/data'>Data</Link></Nav.Link> */}
                                <NavDropdown title="Other Options" id="collasible-nav-dropdown" style={{ color: '#3BB7C4 ' }}>
                                    <NavDropdown.Item href="/deleteMovie" style={{ color: '#3BB7C4 ' }}>Delete a Movie</NavDropdown.Item>
                                    <NavDropdown.Item href="/update" style={{ color: '#3BB7C4 ' }}>Update Data</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBarrr
