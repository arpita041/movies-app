import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';
import NavBarrr from './NavBarrr';
import { BrowserRouter as Router} from 'react-router-dom'
class filmsForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            boxOfficeCollection: '',
            rating: '',
            director: '',
            nameError: '',
            boxOfficeError: '',
            ratingError: '',
            directorError: ''
        }
    }
    handlenameChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleBox = event => {
        this.setState({
            boxOfficeCollection: event.target.value
        })
    }

    handleRating = event => {
        this.setState({
            rating: event.target.value
        })
    }

    handleDirector = event => {
        this.setState({
            director: event.target.value
        })
    }
    validate() {
        let val = 0;
        let rate = parseInt(this.state.rating);
        if (this.state.name.trim() === '') {
            this.setState({ nameError: "Name is required" });
            val = 1;
        }
        if (this.state.boxOfficeCollection.trim() === '') {
            this.setState({ boxOfficeError: "BoxOfficeCollection is required" })
            val = 1;
        }
        if (this.state.rating.trim() === '') {
            this.setState({ ratingError: "Rating is required" });
            val = 1;


        }
        if (rate >= 10 || rate <= 0) {
            this.setState({ ratingError: "Rating should range between 0 to 10" });
            val = 1;
        }

        if (this.state.director.trim() === '') {
            this.setState({ directorError: "Director name is required" });
            val = 1;
        }
        if (val === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    handleSubmit = event => {
      this.setState({nameError:'', boxOfficeError:'', ratingError:'', directorError:''})
        const isValid = this.validate();

        if (isValid) {
            axios.post('http://localhost:3500/film',this.state) //posting movie data to backend
            .then(response =>{
                console.log(response)
            })
            console.log(this.state)
            console.log("no error");

        }
        event.preventDefault()
    }
    render() {

        const { name, boxOfficeCollection, rating, director } = this.state
        const csss = {
            opacity: 1
        }

        return (
            <div>
                <NavBarrr></NavBarrr>
                <div className='container'>
                    <div className="jumbotron my-5" style={csss}>
                        <div className="container ">
                            <div className="mycard">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="myleftctn">
                                            <form onSubmit={this.handleSubmit}>
                                                <div>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Movie Name</Form.Label>
                                                        <Form.Control type="text" placeholder="movie name" value={name} onChange={this.handlenameChange}  required/>
                                                        <small className="text-danger">{this.state.nameError}</small>
                                                    </Form.Group>
                                                </div>
                                                <div>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Box Office Collection</Form.Label>
                                                        <Form.Control type="text" placeholder="box office collection" value={boxOfficeCollection} onChange={this.handleBox} required />
                                                        <small className="text-danger">{this.state.boxOfficeError}</small>
                                                    </Form.Group>
                                                </div>
                                                <div>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Rating</Form.Label>
                                                        <Form.Control type="text" placeholder="rating" value={rating} onChange={this.handleRating} required/>
                                                        <small className="text-danger">{this.state.ratingError}</small>
                                                    </Form.Group>
                                                </div>
                                                <div>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Director Name</Form.Label>
                                                        <Form.Control type="text" placeholder="Director" value={director} onChange={this.handleDirector} required />
                                                        <small className="text-danger">{this.state.directorError}</small>
                                                    </Form.Group>
                                                </div>
                                                <div className="App">
                                                    <button className="btnClass" type="submit">Add Film</button>
                                                </div>
                                            </form>
                                            <br/>
                                            <Router>
             <h6 className="App">Go back to<a href="/home"> home</a></h6>
         
             </Router>
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

export default filmsForm
