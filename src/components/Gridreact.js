import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "../css/AllDirec.scss";
import "../css/AllDirector.css";
import axios from "axios";

function Gridreact(props) {
  let [respo, setRespo] = useState('');
  let name;
  let nameArray = [];
  let dataArray = [];

  if(  document.getElementById("myBtn"))
  {
    document.getElementById("myBtn").disabled = true;
  }

  let rowStyle = {
    background: "transparent",
    color: "#3BB7C4",
  };

  var c = document.querySelector("#uni");
  let data;
  let a = 0;

  const myFunction = (res) => {
    if (a == 0) {
      if(document.getElementById('myBtn'))
      {
      document.getElementById("myBtn").disabled = false;
     // document.getElementById("myBtn").addEventListener("click", saveChanges);
      a = 1;
      }
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
      if(document.getElementById('myBtn'))
      {
      document.getElementById("myBtn").disabled = true;
      a = 0;
      }
    }
  };

  //for model
  const modalCode = () => {
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
              setRespo("yes");
              modalCode();
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
              setRespo("yes");
              modalCode();
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
        <button id="myBtn" class="btn btn-success" onClick={saveChanges}>
          Save
        </button>
      </div>
      {respo === "yes" ? (
                <div id="myModal" className="modal">
                  <div className="modal-content">
                    <div className="modal-header">
                      <span className="close">&times;</span>
                    </div>
                    <div className="modal-body">
                      <p>Your data has been updated successfully !!</p>
                    </div>
                  </div>
                </div>
              ) : (
                <b></b>
              )}
              
    </div>
  );
}

export default Gridreact;
