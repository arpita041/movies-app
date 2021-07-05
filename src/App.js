import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, NavDropdown, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import postFroms from './components/postFroms';
import filmsForm from './components/filmsForm';
import addDirector from './components/addDirector';
import Home from './components/Home';
import DeleteMovie from './components/DeleteMovie';
import updateDetails from './components/updateDetails';
function App() {
  return (
    <div className="container-fluid" >

      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/" style={{ color: '#3BB7C4 ' }}>CinemaWall</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/forms"  style={{ color: '#3BB7C4 ' }}>Add Cinema</Nav.Link>
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
        <br />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/deleteMovie' component={DeleteMovie}></Route> 
          <Route path='/addDirector' component={addDirector}></Route>
          <Route path='/update' component={updateDetails}></Route>
          <Route path="/forms" component={filmsForm}></Route>
          <Route path='/home' exact component={Home}></Route>

          {/* <Route path="/data" component={getHttpEx} ></Route> */}
          <Route path="/sendData" component={postFroms}></Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
