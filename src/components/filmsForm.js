import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../css/forms.scss";
class FilmsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      boxOfficeCollection: "",
      rating: "",
      director: "",
      nameError: "",
      boxOfficeError: "",
      ratingError: "",
      directorError: "",
      respo: "",
      show: true,
    };
  }
  validName = (event) => {
    let pattern = /^[a-zA-Z ]{2,30}$/;
    let pattern2 = /^[a-zA-Z0-9~@#$^*()_+=[\]{}|\\,.?: -]*$/;
    //  let rate = parseInt(this.state.rating);
    if (!pattern2.test(this.state.name) || this.state.name.trim() === "") {
      this.setState({ nameError: "Please enter a valid name" });
      event.target.id = "danger-id";
    } else {
      this.setState({ nameError: "" });
      event.target.id = "inputtxt";
    }
  };
  validBox = (event) => {
    if (this.state.boxOfficeCollection.trim() === "") {
      this.setState({ boxOfficeError: "Box Office Collection is required" });
      event.target.id = "danger-id";
    } else {
      this.setState({ boxOfficeError: "" });
      event.target.id = "inputtxt";
    }
  };
  validRating = (event) => {
    let rate = parseInt(this.state.rating);
    if (rate > 10 || rate < 0 || this.state.rating.trim() === "") {
      this.setState({ ratingError: "Rating should range between 0 to 10" });
      event.target.id = "danger-id";
    } else {
      this.setState({ ratingError: "" });
      event.target.id = "inputtxt";
    }
  };
  validDirector = (event) => {
    let pattern = /^[a-zA-Z ]{2,30}$/;

    if (
      !pattern.test(this.state.director) ||
      this.state.director.trim() === ""
    ) {
      this.setState({ directorError: "Please enter a valid name" });
      event.target.id = "danger-id";
    } else {
      this.setState({ directorError: "" });
      event.target.id = "inputtxt";
    }
  };
  handlenameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleBox = (event) => {
    this.setState({
      boxOfficeCollection: event.target.value,
    });
  };

  handleRating = (event) => {
    this.setState({
      rating: event.target.value,
    });
  };

  handleDirector = (event) => {
    this.setState({
      director: event.target.value,
    });
  };
  validate() {
    if (
      this.state.name !== "" &&
      this.state.boxOfficeCollection !== "" &&
      this.state.rating !== "" &&
      this.state.director !== "" &&
      this.state.nameError === "" &&
      this.state.boxOfficeError === "" &&
      this.state.ratingError === "" &&
      this.state.directorError === ""
    ) {
      return true;
    } else {
      return false;
    }
  }

  handleSubmit = (event) => {
    const isValid = this.validate();
     if (isValid) {
      axios
        .post("http://localhost:3500/film", this.state) //posting movie data to backend
        .then((response) => {
          console.log(response);
          if (response.statusText === "") {
            this.setState({
              respo: "yes",
            });
            alert("Your Data Uploaded Successfully...")
           // this.modalCode();
            //setInterval(()=>{this.props.history.push('/showMovies');},4000)
          } else {
            this.setState({ respo: "no" });
            alert("something went wrong...")
            //this.modalCode();
          }
        });
    } else {
      console.log(false);
    }
    event.preventDefault();
  };

  //for model
  // modalCode = () => {
  //   var modal = document.getElementById("myModal");
  //   // Get the <span> element that closes the modal
  //   var span = document.getElementsByClassName("close")[0];

  //   modal.style.display = "block";

  //   // When the user clicks on <span> (x), close the modal
  //   span.onclick = function () {
  //     modal.style.display = "none";
      
  //   };

  //   // When the user clicks anywhere outside of the modal, close it
  //   window.onclick = function (event) {
  //     if (event.target == modal) {
  //       modal.style.display = "none";
  //     }
  //   };
  // };
  render() {
    const { name, boxOfficeCollection, rating, director } = this.state;

    return (
      <div>
        <NavBar></NavBar>
        <div className="header">
          <h3 className="header__title">Add Movie Details</h3>
        </div>
        <div className="container container--margin">
          <form
            onSubmit={this.handleSubmit}
            className="form"
            autoComplete="off"
          >
            <div className="form__input">
              <label className="form__input-label" for="moviename">
                Movie Name
              </label>
              <input
                className="form__input-field"
                id="moviename"
                type="text"
                placeholder="Movie Name"
                value={name}
                name="movieName"
                onChange={this.handlenameChange}
                onBlur={this.validName}
                required
              />
              <small className="form__error">{this.state.nameError}</small>
            </div>
            <div className="form__input">
              <label className="form__input-label" for="boxOfficeCollection">
                Box Office Collection
              </label>
              <input
                className="form__input-field"
                id="boxOfficeCollection"
                type="number"
                name="boxOfficeCollection"
                placeholder="Box Office Collection"
                value={boxOfficeCollection}
                onChange={this.handleBox}
                onBlur={this.validBox}
                required
              />
              <small className="text-danger">{this.state.boxOfficeError}</small>
            </div>
            <div className="form__input">
              <label className="form__input-label" for="rating">
                Rating
              </label>
              <input
                className="form__input-field"
                id="rating"
                type="number"
                placeholder="Rating"
                value={rating}
                name="rating"
                onChange={this.handleRating}
                onBlur={this.myFunc}
                onBlur={this.validRating}
                required
              />
              <small className="text-danger">{this.state.ratingError}</small>
            </div>
            <div className="form__input">
              <label className="form__input-label" for="directorName">
                Director Name
              </label>
              <input
                className="form__input-field"
                id="directorName"
                type="text"
                name="directorName"
                placeholder="Director"
                value={director}
                onChange={this.handleDirector}
                onBlur={this.validDirector}
                required
              />
              <small className="text-danger">{this.state.directorError}</small>
            </div>
            <div className="form--center">
           
              <button className="form__btn" type="submit">
                Add Film
              </button>
              
              {/* {this.state.respo === "yes" ? (
                <div id="myModal" className="modal">
                  <div className="modal-content">
                    <div className="modal-header">
                      <span className="close">&times;</span>
                    </div>
                    <div className="modal-body">
                      <p>Your data uploaded successfully !!</p>                     
                    </div>
                  </div>
                </div>
              ) : (
                <b></b>
              )}
              {this.state.respo === "no" ? (
                <div id="myModal" className="modal">
                  <div className="modal-content">
                    <div className="modal-header">
                      <span className="close">&times;</span>
                    </div>
                    <div className="modal-body">
                      <p>Something went wrong !!</p>                     
                    </div>
                  </div>
                </div>
              ) : (
                <b></b>
              )} */}
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
export default FilmsForm;
