import React, { Component } from 'react'
import {Route, BrowserRouter as Router, Switch,Link} from 'react-router-dom'
import home from './home'
class updateDetails extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron my-5">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="container ">
                    <div className="mycard">
                        <div className="row">
                            <div className="col-md-6 border">
                                <div className="myleftctn"></div>
                   <form className="myform text-center">
                                        <header className="text-center">Update Form</header>
                
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" name="name" required
                                                         className="form-control" id="myinput"
                                                        placeholder=" Name"/>
                                                </div>
                                            </div>
                                        </div>
                                        
                
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="number" required
                                                         name="age" id="myinput"
                                                        className="form-control"  placeholder="age"/>
                                                    
                                                </div>
                                            </div>
                                        </div>
                
                
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="number"name="awardCount"
                                                        className="form-control" id="myinput" required
                                                        placeholder="awardCount" />
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-dark " id="butt" >Update</button><br/><br/>
                                        <h5 id="demo"></h5>
                                        <Router>
                                        <h6>Go back to <a href="/home">Home</a></h6>   
                                        <Switch><Route path="/home" component={home}></Route></Switch>
                                        </Router>
                        </form>
                        </div>
                        <div className="col-md-4 ml-5 border">
                         <div className="App">
                             Updated details:</div>
                             <br/>
                             Name: Rohini Singh
                             <br/>
                             Age: 23
                             <br/>
                             Award Count: 10
                             <br/>
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
        )
     }
 }

export default updateDetails
