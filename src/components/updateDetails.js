import axios from "axios";
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Alert, Form, Modal } from "react-bootstrap";;
import NavBar from "./NavBar";
import "../css/forms.scss";
class UpdateDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      awardCount: "",
      nameError: "",
      ageError: "",
      awardError: "",
      respo: "",
      show: true,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    let ageNum = parseInt(this.state.age);
    console.log(this.state.age);
  };
  validateName = (e) => {
    let pattern = /^[a-zA-Z ]{2,30}$/;
    //  let rate = parseInt(this.state.rating);
    if (!pattern.test(this.state.name) || this.state.name.trim() === "") {
      this.setState({ nameError: "Please enter a valid name" });
      e.target.id = "danger-id";
    } else {
      this.setState({ nameError: "" });
      e.target.id = "inputtxt";
    }
  };
  validateAge = (event) => {
    let ageNum = parseInt(this.state.age);
    if (ageNum > 80 || ageNum < 18 || this.state.age.trim() === "") {
      this.setState({ ageError: "Age should range between 18 to 80" });
      event.target.id = "danger-id";
    } else {
      this.setState({ ageError: "" });
      event.target.id = "inputtxt";
    }
  };
  validateAward = (event) => {
    let award = parseInt(this.state.awardCount);
    if (award > 101 || award < 0 || this.state.awardCount.trim() === "") {
      this.setState({ awardError: "Award count should be between 0 to 100" });
      event.target.id = "danger-id";
    } else {
      this.setState({ awardError: "" });
      event.target.id = "inputtxt";
    }
  };

  validation() {
    if (
      this.state.name !== "" &&
      this.state.age !== "" &&
      this.state.awardCount !== "" &&
      this.state.nameError === "" &&
      this.state.ageError === "" &&
      this.state.awardError === ""
    ) {
      return true;
    } else {
      return false;
    }
  }

  handleSumbit = (e) => {
    const valid = this.validation();
    e.preventDefault();
    if (valid) {
      axios
        .put(
          `http://localhost:3500/updateDirect/${this.state.name}`,
          this.state
        )
        .then((response) => {
          console.log(response);
          if (response.data === "done") {
            // alert("No details with this director name exist,Please enter valid name");
            this.setState({
              respo: "yes",
            });
          } else {
            //  alert('Details has been changed successfully');
            this.setState({
              respo: "no",
            });
          }
        });
      console.log("no error");
    }
    //   console.log(this.state);
  };
  render() {
    const { name, age, awardCount } = this.state;
    return (
      <div>
        <NavBar></NavBar>
        <div className="header">
          <h3 className="header__title">
            Update director's age and award count{" "}
          </h3>
        </div>
        <div className="container container--margin">
          <form
            className="form"
            onSubmit={this.handleSumbit}
            autoComplete="off"
          >
            {/* <header className="text-center">Updation Form</header> */}
            <br />

            <div className="form__input">
              <label className="form__input-label" for="name">
                Name
              </label>
              <input
                className="form__input-field"
                data-testid="input-name"
                id="name"
                type="text"
                name="name"
                value={name}
                placeholder=" Name"
                onChange={this.handleChange}
                onBlur={this.validateName}
              />
              <small className="form__error">{this.state.nameError}</small>
            </div>
            <div className="form__input">
              <label className="form__input-label" for="age">
                Age
              </label>
              <input
                type="number"
                id="age"
                required
                className="form__input-field"
                name="age"
                value={age}
                onBlur={this.validateAge}
                placeholder="Age"
                onChange={this.handleChange}
              />
              <small className="form__error">{this.state.ageError}</small>
            </div>
            <div className="form__input">
              <label className="form__input-label" for="awardCount">
                Award Count
              </label>
              <input
                type="number"
                id="awardCount"
                name="awardCount"
                className="form__input-field"
                required
                value={awardCount}
                onBlur={this.validateAward}
                placeholder="Award Count"
                onChange={this.handleChange}
              />
              <small className="form__error">{this.state.awardError}</small>
            </div>
            <div className="form--center">
              <button className="form__btn" id="butt">
                Update
              </button>
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
export default UpdateDetails;
