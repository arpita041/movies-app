import React, {useState} from 'react'
import { Dropdown, NavDropdown, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import {Link} from 'react-router-dom'
 const NavBarrr = props=>
 {
    const [state, setState] = useState({
        searchVal:'',
        name:'movie'
      });
      const handleInputChange = event => {
        const { name, value } = event.target;
        setState(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    //   const movieHandler = event=>
    //   {
    //     event.preventDefault();
    //     props.history.push({
    //       pathname: '/movies',
    //       state
    //     });
    //   }
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
                                <FormControl type="text" name="searchVal" onChange={handleInputChange} placeholder="Search" className="mr-sm-2" />
                                <Dropdown>
  <Dropdown.Toggle className="btnClass" id="dropdown-basic">
    Search
  </Dropdown.Toggle>

  <Dropdown.Menu>
      <Dropdown.Item>
    <Link
          to={{
            pathname: "/movies",
            state
          }}
        >
          Movie
        </Link>
        </Dropdown.Item>
        <Dropdown.Item>
        <Link
          to={{
            pathname: "/directors",
            state
          }}
        >
        Director
        </Link>
        </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
                            </Form>
                        </Navbar>
                    </div>
                </div>
            </div>
        );

    }

export default NavBarrr
