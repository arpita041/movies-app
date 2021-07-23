import React from 'react'
import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './AllDirec.scss';
import './AllDirector.css'
import axios from 'axios';
//import { GridApi } from 'ag-grid-community';

function Gridreact(props) {

    let name;
    //  let saveBtn;
    const rowStyle = {
        background: 'transparent',
        color: '#3BB7C4'
    }
let saveBtn;
let data;
let a=0;
var c = document.querySelector('#uni');

    const myFunction = (res) => {

        if(a===0)
        {
      saveBtn =document.createElement('button');
      saveBtn.innerText="save";
      console.log(saveBtn);
        c.appendChild(saveBtn);
      saveBtn.addEventListener('click', saveChanges);
      a=1;
        }
        name = res.data.name;
    }

    const secnd = (res) => {
data = res.data;
console.log("data", data)
        //   console.log(name);
        //    console.log("called");
      //  console.log(res.data)
      console.log(res);
      if(res.oldValue === res.value)
      {
      c.removeChild(saveBtn);
      }

    }
    const saveChanges = (res) => {
        console.log('called');
              if (props.apiValue === 'director') {
            axios.patch(`http://localhost:3500/updateDirect/${name}`,data)
                .then(res => {
                    console.log(res);
                });
        }
        else if (props.apiValue === 'movie') {
            axios.patch(`http://localhost:3500/updateMovie/${name}`,data)
                .then(res => {
                    console.log(res)
                });
        }
    c.removeChild(saveBtn);
    }
    const height = props.height;
    const paginationPageSize = 10;
    console.log(height)
    return (
        <div>
            <div className="ag-theme-alpine" style={{ height: props.height }}>
                <AgGridReact
                    columnDefs={props.columnDefs}
                    rowData={props.rowData}
                    rowStyle={rowStyle}
                    defaultColDef={props.defaultColDef}
                    onRowDoubleClicked={myFunction}
                    onCellEditingStopped={secnd}
                    pagination={true}
                    paginationPageSize={paginationPageSize}
                >
                </AgGridReact>
            </div>
            <div id="uni"></div>
        </div>
    )
}

export default Gridreact
