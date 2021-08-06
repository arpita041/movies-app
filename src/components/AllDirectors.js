import axios from "axios";
import React, { useState, useEffect } from "react";
import Gridreact from "./Gridreact";
import { IoIosTrash } from "react-icons/io";
import NavBar from "./NavBar";
import "../css/AllDirector.css";
function AllDirectors() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3500/direct").then((res) => {
      setPost(res.data.forms);
      console.log(res);
    });
  }, []);

  const actionButton = (params) => {
    let saveIt = window.confirm("Do you want to delete the data?");
    if (saveIt === true) {
      // console.log(params);
      const name = params.data.name;
      params.api.applyTransaction({
        remove: [params.node.data],
      });
      axios
        .delete(`http://localhost:3500/deleteDirectorRow/${name}`)
        .then((res) => {
          console.log(res);
        });
    } else {
      console.log("not");
    }
  };

  //  const saving=(params)=>{
  //      console.log(params);
  //      alert("do you want to change it ?")
  //  }
  const columnDefs = [
    {
      headerName: "NAME",
      field: "name",
      maxWidth: 250,
      minWidth: 160,
      cellClass: "grid-cell-centered",
    },
    {
      headerName: "AGE",
      field: "age",
      maxWidth: 250,
      minWidth: 130,
      cellClass: "grid-cell-centered",
    },
    {
      headerName: "GENDER",
      field: "gender",
      cellClass: "grid-cell-centered",
      maxWidth: 250,
      minWidth: 130,
    },
    {
      headerName: "AWARD'S",
      field: "awardCount",
      cellClass: "grid-cell-centered",
      maxWidth: 250,
      minWidth: 130,
    },
    {
      headerName: "ACTION",
      field: "abc",
      floatingFilter: false,
      cellClass: "grid-cell-centered",
      maxWidth: 160,
      minWidth: 110,
      cellRendererFramework: (params) => (
        <div>
          {/* <button className="btnClass" onClick={()=>saving(params)}>Save</button> */}
          <button
            className="btn btn-dark"
            aria-label="trash button"
            title="trash button"
            onClick={() => actionButton(params)}
          >
            <IoIosTrash />
          </button>
        </div>
      ),
    },
  ];
  const defaultColDef = {
    sortable: true,
    editable: true,
    flex: 1,
    filter: true,
    flex: 1,
    floatingFilter: true,
    minWidth: 120,
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="header">
        <h3 data-testid="header" className='header__title'>Director Details</h3>
        {/* <button className='btn' onClick={this.getAllMovies} >load all Movies</button> */}
      </div>
      <br />
      {/* <Table post={this.state.allMovies}></Table> */}
      <div className="table-container">
        <Gridreact
          columnDefs={columnDefs}
          rowData={post}
          defaultColDef={defaultColDef}
          height="350px"
          apiValue="director"
        ></Gridreact>
      </div>
    </div>
  );
}

export default AllDirectors;
