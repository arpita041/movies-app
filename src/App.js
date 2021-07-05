import logo from './logo.svg';
import { ReactDOM } from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Carousel, Navbar,Nav,Form,FormControl } from 'react-bootstrap';
import {Route, BrowserRouter as Router, Switch,Link} from 'react-router-dom'
import Alertt from './alertt';
import getHttpEx from './components/getHttpEx';
import postFroms from './components/postFroms';
import filmsForm from './components/filmsForm';
import addDirector from './components/addDirector';
function App() {
  return (
    <div className="container-fluid" >
{/* <>
  <Button variant="primary">Primary</Button>
</>
<Alert variant="primary">
    This is a primary alert with{' '}
    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
    like.
  </Alert> */}

 <Router>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/film">Add Film</Nav.Link>
      <Nav.Link href="/director">Add Director</Nav.Link>
      <Nav.Link href="/sendData">Update</Nav.Link>
      {/* <Nav.Link href="/sendData">Data</Nav.Link> */}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />     <Switch><Route path="/emp" component={Alertt}></Route>
    <Route path="/film" component={filmsForm}></Route>
    <Route path="/director" component={addDirector} ></Route>
    <Route path="/sendData" component={postFroms}></Route>
    </Switch>
    </Router>
 
{/* 
   <button id="trial">Click</button> */}

    </div>
  );
}

export default App;
