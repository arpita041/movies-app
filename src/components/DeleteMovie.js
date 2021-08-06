import axios from 'axios';
import React, { Component } from 'react'
import { Modal, Form } from 'react-bootstrap';
import InputField from './inputField';
import NavBarrr from './NavBarrr';
import '../css/forms.scss'
import NavBar from './NavBar';
class DeleteMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movieName: '',
            respo: '',
            nameError: '',
            show: true
        }
    }
    handleClose = () => {
        this.setState({ show: false })
    }
    handleShow = () => {
        this.setState({ show: true })
    }

    handleChange = (event) => {
        this.setState({
            movieName: event.target.value
        })
    }
    validateName = (event) => {
        console.log("called")
        console.log(this.state.movieName)
        let pattern = /^[a-zA-Z ]{4,30}$/;
        let pattern2 = /^[a-zA-Z0-9~@#$^*()_+=[\]{}|\\,.?: -]*$/;
        if (!pattern2.test(this.state.movieName) || this.state.movieName.trim() === '') {
            this.setState({ nameError: "Please enter a valid name" });
            event.target.id= 'danger-id';
        }
        else {
            this.setState({ nameError: '' });
            event.target.id= 'inputtxt';
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
    validation() {
        if (this.state.movieName !== '' && this.state.nameError === '') {
            return true;
        }
        else {
            return false;
        }
    }
    handleSubmit = e => {
        var respo;
        // this.setState({
        //     nameError: ''
        // })
        e.preventDefault();
        const valid = this.validation();
        if (valid) {

            axios.delete(`http://localhost:3500/deleteFilm/${this.state.movieName}`).then(response => {
                console.log(response);
                if (response.data === 'done') {
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
            <div>    <NavBar></NavBar>
                <div className='header'>
                    <h3 className="header__title">Delete movie if you want</h3>
                </div>
                <div className='container container--margin'>

                    <form onSubmit={this.handleSubmit} className="form" autoComplete='off'>
                            <div className="form__input">
                            <label className="form__input-label" for='movieName'>Movie Name</label>
                                <input type="text" className="form__input-field" id='movieName' name="movieName" value={movieName} 
                                    placeholder="Movie Name" onChange={this.handleChange} onBlur={this.validateName} />
                                <small className="form__error">{this.state.nameError}</small>

                        </div>
                        <div className="form--center">
                            <button className="form__btn" type="submit">Delete it</button>
                        </div><br />
                        {/* {
                            this.state.respo === 'yes' ? <Modal backdrop="static" centered show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Result</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo,  Movie deleted successfully !!</Modal.Body>

                            </Modal> : <b></b>
                        }
                        {
                            this.state.respo === 'no' ? <Modal backdrop="static" centered show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Something went wrong !!</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>You entered the wrong movie name</Modal.Body>

                            </Modal> : <b></b>
                        } */}

                    </form>
                </div>

            </div>


        )
    }
}

export default DeleteMovie
