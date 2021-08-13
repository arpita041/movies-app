import axios from "axios";
import React, { Component } from "react";
import NavBar from "./NavBar";
import "../css/forms.scss";
class DeleteMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieName: "",
      respo: "",
      nameError: "",
      show: true,
    };
  }
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  handleChange = (event) => {
    this.setState({
      movieName: event.target.value,
    });
  };
  validateName = (event) => {
    console.log("called");
    console.log(this.state.movieName);
    let pattern = /^[a-zA-Z ]{4,30}$/;
    let pattern2 = /^[a-zA-Z0-9~@#$^*()_+=[\]{}|\\,.?: -]*$/;
    if (
      !pattern2.test(this.state.movieName) ||
      this.state.movieName.trim() === ""
    ) {
      this.setState({ nameError: "Please enter a valid name" });
      event.target.id = "danger-id";
    } else {
      this.setState({ nameError: "" });
      event.target.id = "inputtxt";
    }
  };
  validation() {
    if (this.state.movieName !== "" && this.state.nameError === "") {
      return true;
    } else {
      return false;
    }
  }
  handleSubmit = (e) => {
    var respo;
    e.preventDefault();
    const valid = this.validation();
    if (valid) {
      axios
        .delete(`http://localhost:3500/deleteMovie/${this.state.movieName}`)
        .then((response) => {
          console.log(response);
          if (response.data === "done") {
            // alert("No movie found with the entered name");
            this.setState({
              respo: "yes",
            });
            this.modalCode();
            setInterval(()=>{this.props.history.push('/showMovies');},4000)
          } else {
            this.setState({
              respo: "no",
            });
            this.modalCode();
          }
        });
      console.log(this.state.movieName);
    }
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
    const { movieName } = this.state;
    return (
      <div>
        {" "}
        <NavBar></NavBar>
        <div className="header">
          <h3 className="header__title">Delete movie if you want</h3>
        </div>
        <div className="container container--margin">
          <form
            onSubmit={this.handleSubmit}
            className="form"
            autoComplete="off"
          >
            <div className="form__input">
              <label className="form__input-label" for="movieName">
                Movie Name
              </label>
              <input
                type="text"
                className="form__input-field"
                id="movieName"
                name="movieName"
                value={movieName}
                placeholder="Movie Name"
                onChange={this.handleChange}
                onBlur={this.validateName}
              />
              <small className="form__error">{this.state.nameError}</small>
            </div>
            <div className="form--center">
              <button className="form__btn" type="submit">
                Delete it
              </button>
            </div>
            {this.state.respo === "yes" ? (
                <div id="myModal" className="modal">
                  <div className="modal-content">
                    <div className="modal-header">
                      <span className="close">&times;</span>
                    </div>
                    <div className="modal-body">
                      <p>Movie deleted successfully!!</p>                     
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
              )}
            <br />
          </form>
        </div>
      </div>
    );
  }
}

export default DeleteMovie;
