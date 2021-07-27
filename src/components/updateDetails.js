import axios from 'axios';
import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './Home';
import InputField from './inputField';
import NavBarrr from './NavBarrr';
import './updated.css'
class updateDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            awardCount: '',
            nameError: '',
            ageError: '',
            awardError: '',
            respo: ''
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    validateName =(e)=>
    {
        console.log("called")
    }
    validation() {
        let ageNum = parseInt(this.state.age);
        let awardNum = parseInt(this.state.awardCount);
        let val = 0;
        let pattern = /^[a-zA-Z ]{2,30}$/;
        if (this.state.name.trim() === '') {
            val = 1;
            this.setState({ nameError: "name is required" })
        }
        if(!pattern.test(this.state.name))
        {
            this.setState({nameError:"Please enter a valid name"});
            val=1;
        }
        if (ageNum > 80 || ageNum < 18) {
            val = 1;
            this.setState({ ageError: "Age should be from 18 to 80" })
        }
        if (awardNum > 100 || awardNum < 1) {
            val = 1;
            this.setState({ awardError: "award can't be more than 100" })
        }
        if (val === 1) {
            return false;
        }
        else {
            return true;
        }
    }
    handleSumbit = e => {
        const valid = this.validation();
        e.preventDefault();
        if (valid) {
            axios.put(`http://localhost:3500/updateDirect/${this.state.name}`, this.state)
                .then(response => {
                    console.log(response);
                    if(response.data==='error')
                    {
                        alert("No details with this director name exist,Please enter valid name");
                    }
                    else
                    {
                        alert('Details has been changed successfully');
                    }
                    this.setState({
                        respo: response.data
                    })
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
                            <form className="myform text-center" onSubmit={this.handleSumbit} autoComplete='off'>
                                {/* <header className="text-center">Updation Form</header> */}
<br/>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <InputField type="text" name="name" value={name}
                                                className="form-control" id="myinput"
                                                placeholder=" Name" onChange={this.handleChange} onMouseout={this.validateName} />
 <small className="text-danger">{this.state.nameError}</small>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <InputField type="number" required
                                                name="age" id="myinput" value={age}
                                                className="form-control" placeholder="age" onChange={this.handleChange} />
                                            <small className="text-danger">{this.state.ageError}</small>
                                        </div>
                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <InputField type="number" name="awardCount"
                                                className="form-control" id="myinput" required value={awardCount}
                                                placeholder="awardCount" onChange={this.handleChange} />
                                            <small className="text-danger">{this.state.awardError}</small>
                                        </div>

                                    </div>
                                </div>
                                <button className="btnClass" id="butt" >Update</button><br /><br />
                                {/* <h5>{this.state.respo}</h5> */}
                                <Router>
                                    <h6>Go back to <a href="/home" style={{ color: '#3BB7C4 ' }}>Home</a></h6>

                                    <Switch><Route path="/home" component={Home}></Route></Switch>
                                </Router>
                            </form>
                        </div>
                 
                    </div>
                </div>
            </div>

    

        )
    }
}

export default updateDetails
