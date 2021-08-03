import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import FilmsForm from './components/FilmsForm';
import AddDirector from './components/addDirector';
import Home from './components/Home';
import DeleteMovie from './components/DeleteMovie';
import UpdateDetails from './components/UpdateDetails';
import AllMovies from './components/AllMovies';
import Movies from './components/Movies';
import Director from './components/director';
import AllDirectors from './components/AllDirectors';
//import Imgtrial from './components/imgtrial';
//import NavBarrr from './components/NavBarrr';
function App() {
  return (
    <div className="container-fluid" >
      <Router>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/deleteMovie' component={DeleteMovie}></Route> 
          <Route path='/addDirector' component={AddDirector}></Route>
          <Route path='/update' component={UpdateDetails}></Route>
          <Route path="/forms" component={FilmsForm}></Route>
          <Route path='/home' exact component={Home}></Route>
          <Route path='/showMovies' component={AllMovies}></Route>
          <Route path='/movies' component={Movies}></Route>
          <Route path='/directors' component={Director}></Route>
          <Route path= '/director' component={AllDirectors}></Route>
        </Switch>
      </Router>

<br/>
<br/>
{/* <Imgtrial/> */}
    </div>
  );
}

export default App;
