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
import Home from './components/Home';
function App() {
  return (
    <div className="container-fluid" >


 <Router>
  <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="/"><Link to='/'>CinemaWall</Link></Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/forms"><Link to='/forms'>Add Cinema</Link></Nav.Link>
                <Nav.Link href="/emp"><Link to='/emp'>Add Director</Link></Nav.Link>
                <Nav.Link href="/data"><Link to='/data'>Data</Link></Nav.Link>
                {/* <Nav.Link href="/sendData">Data</Nav.Link> */}
              </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />   
    <Switch>
    <Route path='/' exact component={Home}></Route>

      <Route path="/emp" component={Alertt}></Route>
    <Route path="/forms" component={filmsForm}></Route>
    <Route path="/data" component={getHttpEx} ></Route>
    <Route path="/sendData" component={postFroms}></Route>
    </Switch>
    </Router>
 

    </div>
  );
}

export default App;
