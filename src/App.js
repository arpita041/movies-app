import logo from './logo.svg';
import { ReactDOM } from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, NavDropdown, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import Alertt from './alertt';
import getHttpEx from './components/getHttpEx';
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
          <Navbar.Brand href="/"><Link to='/'>CinemaWall</Link></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/forms">Add Cinema</Nav.Link>
            <Nav.Link href="/emp"><Link to='/addDirector'>Add Director</Link></Nav.Link>
            {/* <Nav.Link href="/data"><Link to='/data'>Data</Link></Nav.Link> */}
            <NavDropdown title="Other Options" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to='/deleteMovie'>Delete a Movie</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><Link to='/update'>Update Data</Link></NavDropdown.Item>
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
          {/* <Route path="/data" component={getHttpEx} ></Route> */}
          <Route path="/sendData" component={postFroms}></Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
