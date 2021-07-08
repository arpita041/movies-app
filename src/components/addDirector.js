import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form } from 'react-bootstrap';
import { BrowserRouter as Router} from 'react-router-dom'
import NavBarrr from './NavBarrr';
import axios from 'axios'
class addDirector extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            age: '',
            gender: '',
            awardCount: '',
            nameError: '',
            ageError: '',
            genderError: '',
            awardCountError: ''
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    validate() {
        let ageNum = parseInt(this.state.age);
        let awardNum = parseInt(this.state.awardCount);
        console.log(ageNum);
        let val = 0;
        if (this.state.name.trim() === '') {
            val = 1;
            this.setState({ nameError: "name is required" })
        }
        if (this.state.age.trim() === '') {
            this.setState({ ageError: "age is required" });
            val = 1;
        }
        if (ageNum > 80 || ageNum < 18) {
            this.setState({ ageError: "age should range between 18 to 80" });
            val = 1;
        }
        if (this.state.awardCount.trim() === '') {
            val = 1;
            this.setState({ awardCountError: "award Count is required" });
        }
        if (awardNum >= 100 || awardNum <= 1) {
            val = 1;
            this.setState({ awardCountError: "award count should be between 0 to 100" })
        }
        if (this.state.gender.trim() === '') {
            val = 1;
            this.setState({ genderError: "gender is required" });
        }
        if (val === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    handleSubmit = e => {
        this.setState({
            nameError: '', ageError: '', genderError: '', awardCountError: ''
        })
        const valid = this.validate();
        if (valid) {
            axios.post('http://localhost:3500/direct',this.state)
            .then(response =>{
                console.log(response)
            })
            console.log("no error");
        }
        e.preventDefault()
        console.log("inside")
        console.log(this.state);
    }
    render() {
        const { name, age, gender, awardCount } = this.state
        return (
            <div>
                <NavBarrr></NavBarrr>
                <div className="container">


                    <div className="jumbotron my-5">
                        <div className="container">
                            <div className="mycard">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="myleftctn">
                                            <form onSubmit={this.handleSubmit}>
                                                <div>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Name</Form.Label>
                                                        <Form.Control type="text" placeholder="name" name="name" value={name} onChange={this.handleChange} required />
                                                        <small className="text-danger">{this.state.nameError}</small>
                                                    </Form.Group>
                                                </div>
                                                <div>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Age</Form.Label>
                                                        <Form.Control type="number" placeholder="age" name="age" value={age} onChange={this.handleChange} required />
                                                        <small className="text-danger">{this.state.ageError}</small>
                                                    </Form.Group>
                                                </div>
                                                <div>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Gender</Form.Label>
                                                        <Form.Control type="text" placeholder="gender" name="gender" value={gender} onChange={this.handleChange} required />
                                                        <small className="text-danger">{this.state.genderError}</small>
                                                    </Form.Group>
                                                </div>
                                                <div>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>award Count</Form.Label>
                                                        <Form.Control type="number" placeholder="awardCount" name="awardCount" value={awardCount} onChange={this.handleChange} required />
                                                        <small className="text-danger">{this.state.awardCountError}</small>
                                                    </Form.Group>
                                                </div>
                                                <div className="App">
                                                    <button className="btnClass" type="submit">Add Director</button>{' '}
                                                </div>
                                                <br />
                                                <Router>
                                                    <h6 className="App">Go back to<a href="/home"> home</a></h6>
                                                    {/* <Switch>
                                                    <Route path="/home" component={Home}></Route>
                                                </Switch> */}
                                                </Router>
                                            </form>
                                        </div>
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
