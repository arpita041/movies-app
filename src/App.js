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
import NavBarrr from './components/NavBarrr';
function App() {
  return (
    <div className="container-fluid" >
      <Router>
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
