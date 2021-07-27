import axios from 'axios';
import React, { Component } from 'react'
import { Alert } from 'react-bootstrap';
import InputField from './inputField';
import NavBarrr from './NavBarrr';
import './deleted.css'
class DeleteMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movieName: '',
            respo: '',
            nameError: '',
            val: true
        }
    }

    handleChange = (event) => {
        this.setState({
            movieName: event.target.value
        })
        let pattern = /^[a-zA-Z ]{4,30}$/;
        // if (!this.state.movieName) {
        //     this.setState({ nameError: "name is required" , val:false})

        // }
        if (!pattern.test(this.state.movieName)) {
            this.setState({ nameError: "Please enter a valid name", val: false })
        }
        else {
            this.setState({ nameError: '', val: true })
        }

    }
    // validation()
    // { 
    //     let val = 0;
    //     let pattern = /^[a-zA-Z ]{2,30}$/;

    //     if (this.state.movieName.trim() === '') {
    //         val = 1;
    //         this.setState({ nameError: "name is required" })
    //     }
    //     if(!pattern.test(this.state.movieName))
    //     {
    //         this.setState({nameError:"Please enter a valid name"});
    //         val=1;
    //     }
    //     if (val === 0) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
    handleSubmit = e => {
        var respo;
        // this.setState({
        //     nameError: ''
        // })
        e.preventDefault();
        // const valid = this.validation();
        if (this.state.val) {

            axios.delete(`http://localhost:3500/deleteFilm/${this.state.movieName}`).then(response => {
                console.log(response);
                if (response.statusText==='OK') {
                    // alert("No movie found with the entered name");
                    this.setState({
                        respo: 'yes'
                    })
                }
                else {
                    //alert("Deleted successfully");
                    this.setState({
                        respo: 'no'
                    })
                }

            })
            console.log(this.state.movieName);
        }
    }
    render() {
        const { movieName } = this.state;
        return (
            <div>    <NavBarrr></NavBarrr>
                <div className='heading'>
                    <h3>Delete movie if you want</h3>
                </div>
                <div className='container my-5'>

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
                            <small className="text-danger">{this.state.nameError}</small>
                        </div>
                        <div className="App">
                            <button className="btnClass" type="submit">Delete it</button>
                        </div><br />
                        {
                            this.state.respo === 'yes' ? <Alert variant='primary'> Your data has been successfully deleted !! </Alert> : <b></b>
                        }
                        {
                            this.state.respo === 'no' ? <Alert variant='danger'>Something went wrong </Alert> : <b></b>
                        }
                      
                    </form>
                </div>

            </div>


        )
    }
}

export default DeleteMovie
