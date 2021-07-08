import axios from 'axios';
import React, { Component } from 'react'
import { Button, Alert } from 'react-bootstrap';
import InputField from './inputField';
import NavBarrr from './NavBarrr';
class DeleteMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movieName: '',
            respo: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            movieName: event.target.value
        })

    }
    handleSubmit = e => {
        var respo;
        e.preventDefault();
        axios.delete(`http://localhost:3500/deleteFilm/${this.state.movieName}`).then(response => {
            console.log(response)
            this.setState({
                respo: response.data
            })
        })
        console.log(this.state.movieName);
    }
    render() {
        const { movieName } = this.state;
        return (
            <div>    <NavBarrr></NavBarrr>
                <div className='container'>

                    <div className="jumbotron my-5">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                {/* <Form.Group controlId="formBasicEmail">
                    <Form.Label>Movie Name</Form.Label>
                    <Form.Control type="text" placeholder="movie name" value={movieName} onChange={this.handleChange} />
                </Form.Group> */}
                                <InputField
                                    type="text"
                                    value={this.state.movieName}
                                    placeholder="movie Name"
                                    label="Movie Name"
                                    name="movieName"
                                    onChange={this.handleChange} />
                            </div>
                            <div className="App">
                                <Button variant="danger" type="submit">Delete it</Button>{' '}
                            </div><br />
                            <div>
                                <h5>{this.state.respo}</h5>


                            </div>
                        </form>
                    </div>

                </div>
            </div>

        )
    }
}

export default DeleteMovie
