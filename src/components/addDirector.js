import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Modal, Button } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";
import "../css/forms.scss";
class AddDirector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      gender: "",
      awardCount: "",
      nameError: "",
      ageError: "",
      genderError: "",
      awardCountError: "",
      respo: "",
      value: "",
      show: true,
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validName = (event) => {
    let pattern = /^[a-zA-Z ]{2,30}$/;
    //  let rate = parseInt(this.state.rating);
    if (!pattern.test(this.state.name) || this.state.name.trim() === "") {
      this.setState({ nameError: "Please enter a valid name" });
      event.target.id = "danger-id";
    } else {
      this.setState({ nameError: "" });
      event.target.id = "inputtxt";
    }
  };
  validAge = (event) => {
    let ageNum = parseInt(this.state.age);
    if (ageNum > 80 || ageNum < 18 || this.state.age.trim() === "") {
      this.setState({ ageError: "Age should range between 18 to 80" });
      event.target.id = "danger-id";
    } else {
      this.setState({ ageError: "" });
      event.target.id = "inputtxt";
    }
  };
  validAward = (event) => {
    let award = parseInt(this.state.awardCount);
    if (award > 101 || award < 0 || this.state.awardCount.trim() === "") {
      this.setState({
        awardCountError: "Award count should be between 0 to 100",
      });
      event.target.id = "danger-id";
    } else {
      this.setState({ awardCountError: "" });
      event.target.id = "inputtxt";
    }
  };
  validGender = (event) => {
    let a = this.state.gender.toLocaleLowerCase();
    if (this.state.gender.trim() === "") {
      this.setState({ genderError: "Gender is required" });
      event.target.id = "danger-id";
    }
    if (a !== "male" && a !== "female" && a !== "other") {
      this.setState({
        genderError: "Gender can be only male, female or other",
      });
      event.target.id = "danger-id";
    } else {
      this.setState({ genderError: "" });
      event.target.id = "inputtxt";
    }
  };

  validate() {
    if (
      this.state.name !== "" &&
      this.state.gender !== "" &&
      this.state.age !== "" &&
      this.state.awardCount !== "" &&
      this.state.nameError === "" &&
      this.state.ageError === "" &&
      this.state.awardCountError === "" &&
      this.state.genderError === ""
    ) {
      return true;
    } else {
      return false;
    }
  }
  handleSubmit = (e) => {
    const valid = this.validate();
    // if (valid) {
 axios.post("http://localhost:3500/direct", this.state).then((response) => {
      console.log(response);
      if (response.statusText === "") {
        this.setState({
          respo: "yes",
        });
        this.modalCode();
      } else {
        this.setState({
          respo: "no",
        });
      }
    });
    //}
    e.preventDefault();
  };

  alphaOnly = (e) => {
    this.setState({ gender: e.target.value.replace(/[^A-Za-z]/gi, "") });
    console.log(this.state.gender);
  };

  //for model
  modalCode = () => {
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  };
  render() {
    const { name, age, gender, awardCount } = this.state;
    return (
      <div>
        <NavBar></NavBar>
        <div className="header">
          <h3 data-testid="header" className="header__title">
            Add Directors Details
          </h3>
        </div>

        <div className="container container--margin">
          <form
            onSubmit={this.handleSubmit}
            className="form"
            autoComplete="off"
          >
            <div className="form__input">
              <label className="form__input-label" for="input-name">
                Name
              </label>
              <input
                className="form__input-field"
                id="input-name"
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={this.handleChange}
                onBlur={this.validName}
                required
              />
              <small className="form__error">{this.state.nameError}</small>
            </div>

            <div className="form__input">
              <label className="form__input-label" for="age">
                Age
              </label>
              <input
                className="form__input-field"
                id="age"
                type="number"
                placeholder="Age"
                name="age"
                value={age}
                onChange={this.handleChange}
                onBlur={this.validAge}
                required
              />
              <small className="form__error">{this.state.ageError}</small>
            </div>

            <div className="form__input">
              <label className="form__input-label" for="gender">
                Gender
              </label>
              <input
                className="form__input-field"
                id="gender"
                type="text"
                placeholder="Gender"
                name="gender"
                value={this.state.gender}
                onChange={this.alphaOnly}
                onBlur={this.validGender}
                required
              />
              <small className="form__error">{this.state.genderError}</small>
            </div>

            <div className="form__input">
              <label className="form__input-label" for="awardCount">
                Award Count
              </label>
              <input
                className="form__input-field"
                id="awardCount"
                type="number"
                placeholder="Award Count"
                name="awardCount"
                value={awardCount}
                onChange={this.handleChange}
                onBlur={this.validAward}
                required
              />
              <small className="form__error">
                {this.state.awardCountError}
              </small>
            </div>

            <div className="form--center">
              <button className="form__btn" type="submit">
                Add Director
              </button>

              {this.state.respo === "yes" ? (
                <div id="myModal" class="modal">
                  <div class="modal-content">
                    <div class="modal-header">
                      <span class="close">&times;</span>
                    </div>
                    <div class="modal-body">
                      <p>Some text in the Modal Body</p>
                      <p>Some other text...</p>
                    </div>
                  </div>
                </div>
              ) : (
                <b></b>
              )}
              {/* {
                                        this.state.respo === 'no' ? <Modal backdrop="static" centered show={this.state.show} onHide={this.handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Result</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Woohoo,Something went wrong!!</Modal.Body>
                                          
                                        </Modal> : <b></b>
                                    } */}

              <h6>
                Go back to
                <Link to="/home">
                  <b className="form__link--color"> home</b>
                </Link>
              </h6>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddDirector;
