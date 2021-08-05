import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Alert, Modal } from 'react-bootstrap';
import NavBarrr from './NavBarrr';
import { BrowserRouter as Router,Link } from 'react-router-dom'
import '../css/forms.scss'

class FilmsForm extends Component {
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
            directorError: '',
            respo: '',
            show: true

        }
    }
    handleClose = () => {
        this.setState({ show: false })
    }
    handleShow = () => {
        this.setState({ show: true })
    }
    validName = event => {
        let pattern = /^[a-zA-Z ]{2,30}$/;
        let pattern2 = /^[a-zA-Z0-9~@#$^*()_+=[\]{}|\\,.?: -]*$/
        //  let rate = parseInt(this.state.rating);
        if (!pattern2.test(this.state.name) || this.state.name.trim() === '') {
            this.setState({ nameError: "Please enter a valid name" });
            event.target.id = 'danger-id';
        }
        else {
            this.setState({ nameError: '' })
            event.target.id = 'inputtxt';
        }
    }
    validBox = event => {
        if (this.state.boxOfficeCollection.trim() === '') {
            this.setState({ boxOfficeError: "Box Office Collection is required" })
            event.target.id = 'danger-id';
        }
        else {
            this.setState({ boxOfficeError: "" })
            event.target.id = 'inputtxt';
        }
    }
    validRating = event => {
        let rate = parseInt(this.state.rating);
        if (rate > 10 || rate < 0 || this.state.rating.trim() === '') {
            this.setState({ ratingError: "Rating should range between 0 to 10" });
            event.target.id = 'danger-id';
        }
        else {
            this.setState({ ratingError: "" });
            event.target.id = 'inputtxt';
        }
    }
    validDirector = event => {
        let pattern = /^[a-zA-Z ]{2,30}$/;

        if (!pattern.test(this.state.director) || this.state.director.trim() === '') {
            this.setState({ directorError: "Please enter a valid name" });
            event.target.id = 'danger-id';
        }
        else {
            this.setState({ directorError: "" });
            event.target.id = 'inputtxt';
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
        if (this.state.name !== '' && this.state.boxOfficeCollection !== '' && this.state.rating !== '' && this.state.director !== '' &&
            this.state.nameError === '' && this.state.boxOfficeError === '' && this.state.ratingError === '' && this.state.directorError === '') {
            return true;
        }
        else {
            return false;
        }
    }
    // validate() {
    //     let val = 0;
    //     let pattern = /^[a-zA-Z ]{2,30}$/;
    //     let rate = parseInt(this.state.rating);
    //     if (this.state.name.trim() === '') {
    //         this.setState({ nameError: "Name is required" });
    //         val = 1;
    //     }
    //     if(!pattern.test(this.state.name))
    //     {
    //         this.setState({nameError:"Please enter a valid name"});
    //         val=1;
    //     }
    //     if (this.state.boxOfficeCollection.trim() === '') {
    //         this.setState({ boxOfficeError: "BoxOfficeCollection is required" })
    //         val = 1;
    //     }
    //     if (this.state.rating.trim() === '') {
    //         this.setState({ ratingError: "Rating is required" });
    //         val = 1;


    //     }
    //     if (rate > 10 || rate < 0) {
    //         this.setState({ ratingError: "Rating should range between 0 to 10" });
    //         val = 1;
    //     }

    //     if (this.state.director.trim() === '') {
    //         this.setState({ directorError: "Director name is required" });
    //         val = 1;
    //     }
    //     if(!pattern.test(this.state.director))
    //     {
    //         this.setState({directorError:"Please enter a valid name"});
    //         val=1;
    //     }
    //     if (val === 0) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
    handleSubmit = event => {
        //   this.setState({ nameError: '', boxOfficeError: '', ratingError: '', directorError: '' })
        const isValid = this.validate();
        var res = ''
        if (isValid) {
            axios.post('http://localhost:3500/film', this.state) //posting movie data to backend
                .then(response => {
                    console.log(response)
                    if (response.statusText === 'OK') {

                        this.setState({
                            respo: 'yes'
                        })
                    } else {
                        this.setState({ respo: 'no' })
                    }
                })
        }
        else {
            console.log(false);
        }
        event.preventDefault()
    }
    render() {

        const { name, boxOfficeCollection, rating, director } = this.state


        return (
            <div>
                <NavBarrr></NavBarrr>
                <div className='header'>
                    <h3 className="header__title">Add Movie Details</h3>
                </div>
                <div className='container container--margin'>
                                <form onSubmit={this.handleSubmit} className="form" autocomplete="off">
                                    <div className="form__input">
                                        <label className="form__input-label" >Movie Name</label>
                                        <input className="form__input-field" type="text" placeholder="Movie Name" value={name} onChange={this.handlenameChange}
                                            onBlur={this.validName} required />
                                        <small className="form__error">{this.state.nameError}</small>
                                    </div>
                                    <div className="form__input">
                                        <label className="form__input-label">Box Office Collection</label>
                                        <input className="form__input-field" type="number" placeholder="Box Office Collection" value={boxOfficeCollection} onChange={this.handleBox}
                                            onBlur={this.validBox} required />
                                        <small className="text-danger">{this.state.boxOfficeError}</small>
                                    </div>
                                    <div className="form__input">
                                        <label className="form__input-label">Rating</label>
                                        <input className="form__input-field" type="number" placeholder="Rating" value={rating} onChange={this.handleRating} onBlur={this.myFunc}
                                            onBlur={this.validRating} required />
                                        <small className="text-danger">{this.state.ratingError}</small>
                                    </div>
                                    <div className="form__input">
                                        <label className="form__input-label">Director Name</label>
                                        <input className="form__input-field" type="text" placeholder="Director" value={director} onChange={this.handleDirector}
                                            onBlur={this.validDirector} required />
                                        <small className="text-danger">{this.state.directorError}</small>
                                    </div>
                                    <div className="form--center">
                                        <button className="form__btn" type="submit">Add Film</button>
                                        <h6>Go back to<Link to='/home'><b className="form__link--color"> home</b></Link></h6>
                                    </div>
                                    {/* {
                                        this.state.respo === 'yes' ? <Modal backdrop="static" centered show={this.state.show} onHide={this.handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Result</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Woohoo,  Movie data uploaded successfully!!</Modal.Body>

                                        </Modal> : <b></b>
                                    }
                                    {
                                        this.state.respo === 'no' ? <Modal backdrop="static" centered show={this.state.show} onHide={this.handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Result</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Woohoo,Something went wrong!!</Modal.Body>

                                        </Modal> : <b></b>
                                    } */}
                                </form>
                            </div>
                        </div>
        )
    }
}
export default FilmsForm
