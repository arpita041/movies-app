import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Carousel,Form,Nav } from 'react-bootstrap';
import {Route, BrowserRouter as Router, Switch,Link} from 'react-router-dom'
import getHttpEx from './getHttpEx';
class addDirector extends Component {
    constructor(props) {
		super(props)

		this.state = {
			name: '',
			age: '',
            gender:'',
			awardCount: '',
            nameError:'',
            ageError:'',
            genderError:'',
            awardCountError:''
		}
	}
    handleChange =e =>
    {
        this.setState({[e.target.name]:e.target.value})
    }
  handleSubmit = e =>
  {
    e.preventDefault()
      console.log("inside")
      console.log(this.state);
  }
    render() {
        const { name,age,gender, awardCount } = this.state
        return (
            <div>
            <div className="jumbotron my-5">
 <div className="container ">
     <div className="mycard">
         <div className="row">
             <div className="col-md-12">
                 <div className="myleftctn">
                 <form onSubmit={this.handleSubmit}>
                 <div>
             <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="name" name="name"  value={name} onChange={this.handleChange}/>
        <small className="text-danger">{this.state.nameError}</small>
         </Form.Group>
         </div>
             <div>
             <Form.Group controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="age" name="age"  value={age} onChange={this.handleChange}/>
        <small className="text-danger">{this.state.boxOfficeError}</small>
         </Form.Group>
         </div>
         <div>
             <Form.Group controlId="formBasicEmail">
          <Form.Label>Gender</Form.Label>
        <Form.Control type="text" placeholder="gender" name="gender"  value={gender} onChange={this.handleChange}/>
        <small className="text-danger">{this.state.genderError}</small>
         </Form.Group>
         </div>
         <div>
             <Form.Group controlId="formBasicEmail">
          <Form.Label>award Count</Form.Label>
        <Form.Control type="number" placeholder="awardCount"  name="awardCount" value={awardCount} onChange={this.handleChange}/>
        <small className="text-danger">{this.state.awardCountError}</small> 
         </Form.Group>
         </div>
         <div className="App">
             <Button variant="dark" type="submit">Submit</Button>{' '}
             </div>
             <br/>
             <Router>
             <h6 className="App">Go back to<a href="/sendData"> home</a></h6>
             <Switch>
                 <Route path="/home" component={getHttpEx}></Route>
             </Switch>
             </Router>
         </form>
</div>
</div>
</div>
</div> 
</div>
</div>
         </div>
        )
    }
}

export default addDirector
