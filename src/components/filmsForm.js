import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import NavBarrr from './NavBarrr';
import { BrowserRouter as Router } from 'react-router-dom'
import './film.css'
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
        this.setState({ nameError: '', boxOfficeError: '', ratingError: '', directorError: '' })
        const isValid = this.validate();

        if (isValid) {
            axios.post('http://localhost:3500/film', this.state) //posting movie data to backend
                .then(response => {
                    console.log(response)
                })
            console.log(this.state)
            console.log("no error");

        }
        event.preventDefault()
    }
    render() {

        const { name, boxOfficeCollection, rating, director } = this.state
       

        return (
            <div>
                <NavBarrr></NavBarrr>
                <div className='heading'>
                    <h3>Add Movie Details</h3>
                </div>
                <div className='container my-5'>
                    {/* <div className="jumbotron my-5"> */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="myleftctn">
                                    <form onSubmit={this.handleSubmit} className='formm'>
                                        <div>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label className='lab'>Movie Name</Form.Label>
                                                <Form.Control className='inputtxt' type="text" placeholder="movie name" value={name} onChange={this.handlenameChange} required />
                                                <small className="text-danger">{this.state.nameError}</small>
                                            </Form.Group>
                                        </div>
                                        <div>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label className='lab'>Box Office Collection</Form.Label>
                                                <Form.Control className='inputtxt' type="text" placeholder="box office collection" value={boxOfficeCollection} onChange={this.handleBox} required />
                                                <small className="text-danger">{this.state.boxOfficeError}</small>
                                            </Form.Group>
                                        </div>
                                        <div>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label className='lab'>Rating</Form.Label>
                                                <Form.Control className='inputtxt' type="text" placeholder="rating" value={rating} onChange={this.handleRating} required />
                                                <small className="text-danger">{this.state.ratingError}</small>
                                            </Form.Group>
                                        </div>
                                        <div>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label className='lab'>Director Name</Form.Label>
                                                <Form.Control className='inputtxt' type="text" placeholder="Director" value={director} onChange={this.handleDirector} required />
                                                <small className="text-danger">{this.state.directorError}</small>
                                            </Form.Group>
                                        </div>
                                        <div className="App">
                                            <Button className='btn' variant="dark" type="submit">Add Film</Button>{' '}
                                        </div>
                                    </form>
                                    <br />
                                    <Router>
                                        <h6 className="App">Go back to<a href="/home"> home</a></h6>

                                    </Router>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            // </div>

        )
    }
}

export default filmsForm
