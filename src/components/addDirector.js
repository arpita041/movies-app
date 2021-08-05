import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Modal, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import NavBarrr from './NavBarrr';
import NavBar from './NavBar';
import axios from 'axios'
// import '../css/directorcss.css'
import '../css/forms.scss'
class AddDirector extends Component {
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
            awardCountError: '',
            respo: '',
            value: '',
            show: true
        }
    }
    handleClose = () => {
        this.setState({ show: false })
    }
    handleShow = () => {
        this.setState({ show: true })
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    validName = event => {
        let pattern = /^[a-zA-Z ]{2,30}$/;
        //  let rate = parseInt(this.state.rating);
        if (!pattern.test(this.state.name) || this.state.name.trim() === '') {
            this.setState({ nameError: "Please enter a valid name" });
            event.target.id = 'danger-id';
        }
        else {
            this.setState({ nameError: '' })
            event.target.id = 'inputtxt'
        }
    }
    validAge = event => {
        let ageNum = parseInt(this.state.age);
        if (ageNum > 80 || ageNum < 18 || this.state.age.trim() === '') {
            this.setState({ ageError: "Age should range between 18 to 80" });
            event.target.id = 'danger-id';
        }
        else {
            this.setState({ ageError: "" })
            event.target.id = 'inputtxt'
        }
    }
    validAward = event => {
        let award = parseInt(this.state.awardCount);
        if (award > 101 || award < 0 || this.state.awardCount.trim() === '') {
            this.setState({ awardCountError: "Award count should be between 0 to 100" })
            event.target.id = 'danger-id';
        }
        else {
            this.setState({ awardCountError: "" });
            event.target.id = 'inputtxt'
        }
    }
    validGender = event => {

        //   console.log(this.state.gender);
        let a = this.state.gender.toLocaleLowerCase();
        //  console.log(a);
        if (this.state.gender.trim() === '') {
            this.setState({ genderError: "Gender is required" });
            event.target.id = 'danger-id';
        }
        if (a !== 'male' && a !== 'female' && a !== 'other') {
            this.setState({ genderError: 'Gender can be only male, female or other' })
            event.target.id = 'danger-id';
        }
        else {
            this.setState({ genderError: "" });
            event.target.id = 'inputtxt'
        }
    }

    // validate() {
    //     let ageNum = parseInt(this.state.age);
    //     let awardNum = parseInt(this.state.awardCount);
    //     let pattern = /^[a-zA-Z ]{2,30}$/;
    //     console.log(ageNum);
    //     let val = 0;
    //     if (this.state.name.trim() === '') {
    //         val = 1;
    //         this.setState({ nameError: "name is required" })
    //     }
    //     if(!pattern.test(this.state.name))
    //     {
    //         this.setState({nameError:"Please enter a valid name"});
    //         val=1;
    //     }
    //     if (this.state.age.trim() === '') {
    //         this.setState({ ageError: "age is required" });
    //         val = 1;
    //     }
    //     if (ageNum > 80 || ageNum < 18) {
    //         this.setState({ ageError: "age should range between 18 to 80" });
    //         val = 1;
    //     }
    //     if (this.state.awardCount.trim() === '') {
    //         val = 1;
    //         this.setState({ awardCountError: "award Count is required" });
    //     }
    //     if (awardNum >= 100 || awardNum <= 1) {
    //         val = 1;
    //         this.setState({ awardCountError: "award count should be between 0 to 100" })
    //     }
    //     if (this.state.gender.trim() === '') {
    //         val = 1;
    //         this.setState({ genderError: "gender is required" });
    //     }
    //     // if(this.state.gender!=='male' || this.state.gender!=='female' || this.state.gender!=='other')
    //     // {
    //     //     val=1;
    //     //     this.setState({genderError:'gender can be only male, female or other'})
    //     // }
    //     if (val === 0) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
    validate() {
        if (this.state.name !== '' && this.state.gender !== '' && this.state.age !== '' && this.state.awardCount !== '' &&
            this.state.nameError === '' && this.state.ageError === '' && this.state.awardCountError === '' && this.state.genderError === '') {
            return true;
        }
        else {
            return false;
        }
    }
    handleSubmit = e => {
        const valid = this.validate();
        // if (valid) {
        axios.post('http://localhost:3500/direct', this.state)
            .then(response => {
                console.log(response)
                if (response.statusText === 'OK') {
                    this.setState({
                        respo: 'yes'
                    })
                } else {
                    this.setState({
                        respo: 'no'
                    })
                }
            })
        //}
        e.preventDefault()
    }

    alphaOnly = (e) => {
        this.setState({ gender: e.target.value.replace(/[^A-Za-z]/ig, '') })
        console.log(this.state.gender);

    }
    render() {
        const { name, age, gender, awardCount } = this.state
        return (
            <div>
                <NavBar></NavBar>
                <div className='header'>
                    <h3 data-testid="header" className="header__title">Add Directors Details</h3>
                </div>

                <div className="container container--margin">

                    <form onSubmit={this.handleSubmit} className="form" autoComplete="off">
                        <div className="form__input">

                            <label className="form__input-label">Name</label>
                            <input className="form__input-field" type="text" placeholder="Name" name="name" value={name} onChange={this.handleChange}
                                onBlur={this.validName} required />
                            <small className="form__error">{this.state.nameError}</small>

                        </div>

                        <div className="form__input">

                            <label className="form__input-label">Age</label>
                            <input className="form__input-field" type="number" placeholder="Age" name="age" value={age} onChange={this.handleChange}
                                onBlur={this.validAge} required />
                            <small className="form__error">{this.state.ageError}</small>

                        </div>


                        <div className="form__input">

                            <label className="form__input-label">Gender</label>
                            <input className="form__input-field" type="text" placeholder="Gender" name="gender" value={this.state.gender} onChange={this.alphaOnly}
                                onBlur={this.validGender} required />
                            <small className="form__error">{this.state.genderError}</small>

                        </div>

                        <div className="form__input">

                            <label className="form__input-label">Award Count</label>
                            <input className="form__input-field" type="number" placeholder="Award Count" name="awardCount" value={awardCount} onChange={this.handleChange}
                                onBlur={this.validAward} required />
                            <small className="form__error">{this.state.awardCountError}</small>



                        </div>

                        <div className="form--center">
                            <button className="form__btn" type="submit">Add Director</button>

                            {/* 
                                    {
                                        this.state.respo === 'yes' ? <Modal backdrop="static" centered show={this.state.show} onHide={this.handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Result</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Woohoo,  Director's data uploaded successfully!!</Modal.Body>
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


                            <h6>Go back to<Link to='/home'><b className="form__link--color"> home</b></Link></h6>
                        </div>
                    </form>

                </div>
            </div>

        )
    }
}

export default AddDirector
