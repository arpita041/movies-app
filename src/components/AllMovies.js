import axios from "axios";
import React, { Component } from "react";
import "../css/allMovie.css";
import Gridreact from "./Gridreact";
import { IoIosTrash } from "react-icons/io";
import NavBar from "./NavBar";
class AllMovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: [],
      columnDefs: [
        {
          headerName: "NAME",
          field: "name",
          maxWidth: 250,
          minWidth:160,
          cellClass: "grid-cell-centered",
        },
        {
          headerName: "RATING",
          field: "rating",
          maxWidth: 130,
          minWidth:250,
          cellClass: "grid-cell-centered",
        },
        {
          headerName: "DIRECTOR",
          field: "director",
          maxWidth: 250,
          minWidth:150,
          cellClass: "grid-cell-centered",
        },
        {
          headerName: "COLLECTION",
          field: "boxOfficeCollection",
          maxWidth: 250,
          minWidth:150,
          cellClass: "grid-cell-centered",
        },
        {
          headerName: "ACTION",
          field: "abc",
          floatingFilter: false,
          cellClass: "grid-cell-centered",
          maxWidth: 160,
          minWidth:110,
          cellRendererFramework: (params) => (
            <div>
              {/* <button className="btnClass" onClick={() => this.saving(params)}>Save</button> */}
              <button
                className="btn btn-dark"
                aria-label="delete button"
                title="delete button"
                onClick={() => this.actionButton(params)}
              >
                <IoIosTrash />
              </button>
            </div>
          ),
        },
      ],
      defaultColDef: {
        sortable: true,
        editable: true,
        flex: 1,
        filter: true,
        floatingFilter: true,
        minWidth: 100,
      },
      rowData: null,
      onFirstDataRendered: this.onFirstDataRendered,
    };
  }
  onFirstDataRendered = (params) => {
    params.api.sizeColumnsToFit();
  };
  actionButton = (params) => {
    let saveIt = window.confirm("Do you want to delete the data?");
    if (saveIt === true) {
      console.log(params);
      const name = params.data.name;
      params.api.applyTransaction({
        remove: [params.node.data],
      });
      axios
        .delete(`http://localhost:3500/deleteMovie/${name}`)
        .then((res) => {
          console.log(res);
        });
    } else {
      console.log("no");
    }
  };

  componentDidMount = () => {
    axios.get("http://localhost:3500/film").then((response) => {
      console.log(response);
      this.setState({
       allMovies:response.data
      }); 
       console.log(this.state.allMovies);
    });
  
  };

  render() {
    return (
      <div>
      <NavBar></NavBar>
      <div className="header">
        <h3 data-testid="header" className='header__title'>Movie Details</h3>
        {/* <button className='btn' onClick={this.getAllMovies} >load all Movies</button> */}
      </div>{" "}
      <br />
      {/* <Table post={this.state.allMovies}></Table> */}
      <div className="table-container">
        <Gridreact
          columnDefs={this.state.columnDefs}
          defaultColDef={this.state.defaultColDef}
          rowData={this.state.allMovies}
          height="357px"
          apiValue="movie"
        ></Gridreact>
      </div>
    </div>
    );
  }
}

export default AllMovies;