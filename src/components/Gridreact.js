import React from "react";
import { AgGridReact } from "ag-grid-react";
import "../css/AllDirec.scss";
import "../css/AllDirector.css";
import axios from "axios";

function Gridreact(props) {
  let name;
  let nameArray = [];
  let dataArray = [];

  let rowStyle = {
    background: "transparent",
    color: "#3BB7C4",
  };

  var c = document.querySelector("#uni");
  let data;
  let a = 0;

  const myFunction = (res) => {
    if (a == 0) {
      document.getElementById("myBtn").disabled = false;
      document.getElementById("myBtn").addEventListener("click", saveChanges);
      a = 1;
    }
    name = res.data.name;
    nameArray.push(name);
  };

  const secnd = (res) => {
    data = res.data;

    dataArray.push(data);
    console.log("data", data);
    console.log(res);
    if (res.oldValue === res.value && a === 1) {
      document.getElementById("myBtn").disabled = true;
      a = 0;
    }
  };
  const saveChanges = (res) => {
    console.log("called");
    if (props.apiValue === "director") {
      for (let i = 0; i < nameArray.length; i++) {
        if (!nameArray[i] || !dataArray[i]) {
          console.log("something wrong");
        } else {
          axios
            .put(
              `http://localhost:3500/updateDirect/${nameArray[i]}`,
              dataArray[i]
            )
            .then((res) => {
              console.log(res);
            });
        }
      }
    } else if (props.apiValue === "movie") {
      for (let i = 0; i < nameArray.length; i++) {
        if (!nameArray[i] || !dataArray[i]) {
          console.log("something wrong");
        } else {
          axios
            .put(
              `http://localhost:3500/updateMovie/${nameArray[i]}`,
              dataArray[i]
            )
            .then((res) => {
              console.log(res);
            });
        }
      }
    }
    if (a === 1) {
      document.getElementById("myBtn").disabled = true;
      a = 0;
    }
  };
  const height = props.height;
  const paginationPageSize = 10;
  console.log(height);
  return (
    <div>
      <div
        className="ag-theme-alpine"
        style={{ height: props.height, width: "100%" }}
      >
        <AgGridReact
          columnDefs={props.columnDefs}
          rowData={props.rowData}
          rowStyle={rowStyle}
          defaultColDef={props.defaultColDef}
          onRowDoubleClicked={myFunction}
          onCellEditingStopped={secnd}
          pagination={true}
          paginationPageSize={paginationPageSize}
        ></AgGridReact>
      </div>{" "}
      <br />
      <div id="uni">
        <button id="myBtn" class="btn btn-success" disabled={true}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Gridreact;
