import axios from 'axios';
import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Alert, Form, Modal } from 'react-bootstrap';
import Home from './Home';
import NavBarrr from './NavBarrr';
import '../css/updated.css'
class UpdateDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            awardCount: '',
            nameError: '',
            ageError: '',
            awardError: '',
            respo: '',
            show:true
        }
    }
    handleClose=()=>{
        this.setState({show:false})
    }
    handleShow=()=>{
        this.setState({show:true})
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        let ageNum = parseInt(this.state.age);
        console.log(this.state.age);
    }
    validateName = (e) => {
        let pattern = /^[a-zA-Z ]{2,30}$/;
        //  let rate = parseInt(this.state.rating);
          if(!pattern.test(this.state.name) || this.state.name.trim() === '' )
          {
              this.setState({nameError:"Please enter a valid name"});
              e.target.id= 'danger-id';
          }
          else
          {
              this.setState({nameError:''})
              e.target.id= 'inputtxt';
          }
    }
    validateAge=event=>
    {
        let ageNum = parseInt(this.state.age);
        if (ageNum > 80 || ageNum < 18 || this.state.age.trim()==='') {
            this.setState({ ageError: "Age should range between 18 to 80" });   
            event.target.id= 'danger-id'; 
        }
        else
        {
            this.setState({ageError:""})
            event.target.id= 'inputtxt';
        }
    }
    validateAward =event =>
    {
          let award = parseInt(this.state.awardCount);
          if (award > 101 || award < 0 || this.state.awardCount.trim()==='') {
            this.setState({ awardError: "Award count should be between 0 to 100" })
            event.target.id= 'danger-id';
        }
        else
        {
            this.setState({ awardError: ""});
            event.target.id= 'inputtxt';
        }
    }

    validation()
    {
        if(this.state.name !=='' && this.state.age!=='' && this.state.awardCount!=='' && 
        this.state.nameError==='' && this.state.ageError==='' && this.state.awardError==='')
          {
                return true;
        }
        else
        {
            return false;
        }
    }
    // validation() {
    //     let ageNum = parseInt(this.state.age);
    //     let awardNum = parseInt(this.state.awardCount);
    //     let val = 0;
    //     let pattern = /^[a-zA-Z ]{2,30}$/;
    //     if (this.state.name.trim() === '') {
    //         val = 1;
    //         this.setState({ nameError: "name is required" })
    //     }
    //     if (!pattern.test(this.state.name)) {
    //         this.setState({ nameError: "Please enter a valid name" });
    //         val = 1;
    //     }
    //     if (ageNum > 80 || ageNum < 18) {
    //         val = 1;
    //         this.setState({ ageError: "Age should be from 18 to 80" })
    //     }
    //     if (awardNum > 100 || awardNum < 1) {
    //         val = 1;
    //         this.setState({ awardError: "award can't be more than 100" })
    //     }
    //     if (val === 1) {
    //         return false;
    //     }
    //     else {
    //         return true;
    //     }
    // }

    handleSumbit = e => {
        const valid = this.validation();
        e.preventDefault();
        if (valid) {
            axios.put(`http://localhost:3500/updateDirect/${this.state.name}`, this.state)
                .then(response => {
                    console.log(response);
                    if (response.data==='done') {
                        // alert("No details with this director name exist,Please enter valid name");
                        this.setState({
                            respo: 'yes'
                        })
                    }
                    else {
                        //  alert('Details has been changed successfully');
                        this.setState({
                            respo: 'no'
                        })
                    }

                })
            console.log("no error")
        }
        //   console.log(this.state);

    }
    render() {
        const { name, age, awardCount } = this.state;
        return (
            <div><NavBarrr></NavBarrr>
                <div className='heading'>
                    <h3>Update director's age and award count </h3>
                </div>
                <div className='container my-5'>

                    {/* <div className="jumbotron my-5"> */}
                    <div className="row">
                        <div className="col-sm-12">


                            <div className="myleftctn"></div>
                            <form className="myform" onSubmit={this.handleSumbit} autoComplete='off'>
                                {/* <header className="text-center">Updation Form</header> */}
                                <br />
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                        <Form.Label className='lab'>Name</Form.Label>
                                            <Form.Control id="inputtxt" type="text" name="name" value={name} 
                                                placeholder=" Name" onChange={this.handleChange} onBlur={this.validateName} />
                                            <small className="text-danger">{this.state.nameError}</small>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                        <Form.Label className='lab'>Age</Form.Label>
                                            <Form.Control type="number" required id="inputtxt"
                                                name="age" value={age} onBlur={this.validateAge}
                                                 placeholder="Age" onChange={this.handleChange}/>
                                            <small className="text-danger">{this.state.ageError}</small>
                                        </div>
                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                        <Form.Label className='lab'>Award Count</Form.Label>
                                            <Form.Control type="number" name="awardCount" id="inputtxt"
                                             required value={awardCount} onBlur={this.validateAward}
                                                placeholder="Award Count" onChange={this.handleChange} />
                                            <small className="text-danger">{this.state.awardError}</small>
                                        </div>

                                    </div>
                                </div>
                             <div className="App">
                                <button className="btnClass" id="butt" >Update</button><br /><br />
                                {
                                    this.state.respo === 'yes' ? <Modal backdrop="static" centered show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                      <Modal.Title>Result</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Woohoo,  Directors data updated successfully !!</Modal.Body>
                                    
                                  </Modal> : <b></b>
                                }
                                {
                                    this.state.respo === 'no' ? <Modal backdrop="static" centered show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                      <Modal.Title>Result</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Something went wrong !!</Modal.Body>
                                    
                                  </Modal> : <b></b>
                                }
                                <Router>
                                    <h6>Go back to <a href="/home" style={{ color: '#3BB7C4 ' }}>Home</a></h6>

                                    <Switch><Route path="/home" component={Home}></Route></Switch>
                                </Router>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>



        )
    }
}

export default UpdateDetails
