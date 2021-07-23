import axios from 'axios';
import React, { Component } from 'react'
//import { Button, Alert } from 'react-bootstrap';
import InputField from './inputField';
import NavBarrr from './NavBarrr';
import './deleted.css'
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
              <div className='heading'>
                    <h3>Delete movie if you want</h3>
                </div>
                <div className='container my-5'>

                    {/* <div className="jumbotron my-5"> */}
                        <form onSubmit={this.handleSubmit} autoComplete='off'>
                            <div>
                                <InputField
                                className="labelClass"
                                    type="text"
                                    value={this.state.movieName}
                                    placeholder="movie Name"
                                    label="Movie Name"
                                    name="movieName"
                                    onChange={this.handleChange} />
                            </div>
                            <div className="App">
                                <button className="btnClass" type="submit">Delete it</button>
                            </div><br />
                            <div className='info'>
                                <h5>{this.state.respo}</h5>


                            </div>
                        </form>
                    </div>

                </div>
            // </div>

        )
    }
}

export default DeleteMovie
