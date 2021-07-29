import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Modal,Button } from 'react-bootstrap';
import { BrowserRouter as Router ,Link} from 'react-router-dom'
import NavBarrr from './NavBarrr';
import axios from 'axios'
import '../css/directorcss.css'
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
        }
        else {
            this.setState({ nameError: '' })
        }
    }
    validAge = event => {
        let ageNum = parseInt(this.state.age);
        if (ageNum > 80 || ageNum < 18 || this.state.age.trim() === '') {
            this.setState({ ageError: "Age should range between 18 to 80" });
        }
        else {
            this.setState({ ageError: "" })
        }
    }
    validAward = event => {
        let award = parseInt(this.state.awardCount);
        if (award > 101 || award < 0 || this.state.awardCount.trim() === '') {
            this.setState({ awardCountError: "Award Count should be between 0 to 100" })
        }
        else {
            this.setState({ awardCountError: "" });
        }
    }
    validGender = event => {

        console.log(this.state.gender);
        if (this.state.gender.trim() === '') {
            this.setState({ genderError: "Gender is required" });
        }
        if (this.state.gender !== 'male' && this.state.gender !== 'female' && this.state.gender !== 'other') {
            this.setState({ genderError: 'Gender can be only male, female or other' })
        }
        else {
            this.setState({ genderError: "" });
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
                <NavBarrr></NavBarrr>
                <div className='heading'>
                    <h3 style={{ color: 'white ' }}>Add Directors Details</h3>
                </div>
                <div className="container my-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="myleftctn">
                                <form onSubmit={this.handleSubmit} id='formm' autocomplete="off">
                                    <div className='row'>
                                        <div className="col-md-12">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label className='lab'>Name</Form.Label>
                                                <Form.Control  id='inputtxt' type="text" placeholder="Name" name="name" value={name} onChange={this.handleChange}
                                                    onBlur={this.validName} required />
                                                <small className="text-danger">{this.state.nameError}</small>
                                            </Form.Group>
                                        </div>

                                    </div>
                                    <div className='row'>
                                        <div className="col-md-12">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label className='lab'>Age</Form.Label>
                                                <Form.Control id='inputtxt' type="number" placeholder="Age" name="age" value={age} onChange={this.handleChange}
                                                    onBlur={this.validAge} required />
                                                <small className="text-danger">{this.state.ageError}</small>
                                            </Form.Group>
                                        </div>

                                    </div>
                                    <div className='row'>
                                        <div className="col-md-12">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label className='lab' >Gender</Form.Label>
                                                <Form.Control id='inputtxt' type="text" placeholder="Gender" name="gender" value={this.state.gender} onChange={this.alphaOnly}
                                                    onBlur={this.validGender} required />
                                                <small className="text-danger">{this.state.genderError}</small>
                                            </Form.Group>
                                        </div>

                                    </div>
                                    <div className='row'>
                                        <div className="col-md-12">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label className='lab'>Award Count</Form.Label>
                                                <Form.Control  id='inputtxt' type="number" placeholder="Award Count" name="awardCount" value={awardCount} onChange={this.handleChange}
                                                    onBlur={this.validAward} required />
                                                <small className="text-danger">{this.state.awardCountError}</small>
                                            </Form.Group>
                                        </div>

                                    </div>
                                    <div className="App">
                                        <button className="btnClass" type="submit">Add Director</button>{' '}
                                    </div>
                                    <br />

                                    {
                                        this.state.respo === 'yes' ? <Modal backdrop="static" centered show={this.state.show} onHide={this.handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Result</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Woohoo,  Director's data uploaded successfully!!</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={this.handleClose}>
                                                    Close
                                                </Button>
                                                <Button variant="primary" onClick={this.handleClose}>
                                                    Save Changes
                                                </Button>
                                            </Modal.Footer>
                                        </Modal> : <b></b>
                                    }
                                    {
                                        this.state.respo === 'no' ? <Modal backdrop="static" centered show={this.state.show} onHide={this.handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Result</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Woohoo,Something went wrong!!</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={this.handleClose}>
                                                    Close
                                                </Button>
                                                <Button variant="primary" onClick={this.handleClose}>
                                                    Save Changes
                                                </Button>
                                            </Modal.Footer>
                                        </Modal> : <b></b>
                                    }


                                    <h6 className="App">Go back to<Link to='/home'><b className="colorT"> home</b></Link></h6>

                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        )
    }
}

export default addDirector
