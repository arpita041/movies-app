import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './Home';
import InputField from './inputField';
import NavBarrr from './NavBarrr';
class updateDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            awardCount: '',
            nameError: '',
            ageError: '',
            awardError: ''
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    validation() {
        let ageNum = parseInt(this.state.age);
        let awardNum = parseInt(this.state.awardCount);
        let val = 0;
        if(this.state.name.trim()==='')
        {
            val=1;
            this.setState({nameError:"name is required"})
        }
        if (ageNum >= 80 || ageNum <= 18) {
            val = 1;
            this.setState({ ageError: "Age should be from 18 to 80" })
        }
        if (awardNum >= 100 || awardNum <= 1) {
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
        if(valid)
        {
            console.log("no error")
        }
        console.log(this.state);

    }
    render() {
        const { name, age, awardCount } = this.state;
        return (
            <div><NavBarrr></NavBarrr>
            <div className='container'>
                    
                <div className="jumbotron my-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="container ">
                                    <div className="mycard">
                                        <div className="row">
                                            <div className="col-md-6 border">
                                                <div className="myleftctn"></div>
                                                <form className="myform text-center" onSubmit={this.handleSumbit}>
                                                    <header className="text-center">Updation Form</header>

                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <InputField type="text" name="name" value={name}
                                                                    className="form-control" id="myinput"
                                                                    placeholder=" Name" onChange={this.handleChange} />
                                                                    
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
                                                    <button className="btnClass " id="butt" >Update</button><br /><br />

                                                    <Router>
                                                        <h6>Go back to <a href="/home">Home</a></h6>
                                                        <Switch><Route path="/home" component={Home}></Route></Switch>
                                                    </Router>
                                                </form>
                                            </div>
                                            <div className="col-md-4 ml-5 border">
                                                <div className="App">
                                                    Updated details:</div>
                                                <br />
                                                Name: Rohini Singh
                                                <br />
                                                Age: 23
                                                <br />
                                                Award Count: 10
                                                <br />
                                                Gender: Female

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default updateDetails
