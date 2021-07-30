import React from 'react'
import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import '../css/AllDirec.scss';
import '../css/AllDirector.css'
import axios from 'axios';
//import { GridApi } from 'ag-grid-community';

function Gridreact(props) {


    let name;
    let nameArray=[];
    let dataArray=[];

    //  let saveBtn;
    const rowStyle = {
        background: 'transparent',
        color: '#3BB7C4'
    }
//let saveBtn;
var c = document.querySelector('#uni');
let data;
let a=0;


    const myFunction = (res) => {

        if(a==0)
        {
            document.getElementById('myBtn').disabled= false;
            document.getElementById('myBtn').addEventListener('click', saveChanges);
            a=1;
        }
    //     if(a===0)
    //     {
    //         saveBtn =document.createElement('button');
    //         saveBtn.innerText="save";
    //           c.appendChild(saveBtn);
    //     a=1;
    //     }
    //   saveBtn.addEventListener('click', saveChanges);
        name = res.data.name;
    nameArray.push(name);
    }

    const secnd = (res) => {
data = res.data;

dataArray.push(data);
console.log("data", data)
      console.log(res);
    if(res.oldValue === res.value && a===1)
    {
document.getElementById('myBtn').disabled= true;
a=0;
    }

    }
    const saveChanges = (res) => {
        console.log('called');
              if (props.apiValue === 'director') {
                  for(let i=0;i<nameArray.length;i++)
                  {
                    axios.patch(`http://localhost:3500/updateDirect/${nameArray[i]}`,dataArray[i])
                .then(res => {
                    console.log(res);
                });   
                  }
           
        }
        else if (props.apiValue === 'movie') {
                for(let i=0;i<nameArray.length;i++)
                {
                  axios.patch(`http://localhost:3500/updateMovie/${nameArray[i]}`,dataArray[i])
              .then(res => {
                  console.log(res);
              });   
                }
        }
        if(a===1)
        {
    // c.removeChild(saveBtn);
    document.getElementById('myBtn').disabled= true;
    a=0;
        }
    }
    const height = props.height;
    const paginationPageSize = 10;
    console.log(height)
    return (
        <div>
         <div className="ag-theme-alpine" style={{ height: props.height, width:'100%' }}>
                <AgGridReact
                    columnDefs={props.columnDefs}
                    rowData={props.rowData}
                    rowStyle={rowStyle}
                    defaultColDef={props.defaultColDef}
                    onRowDoubleClicked={myFunction}
                    onCellEditingStopped={secnd}
                    pagination={true}
                    paginationPageSize={paginationPageSize}>
                </AgGridReact>
            </div> <br />
            <div id="uni">
                <button id="myBtn" className="btn btn-Success" disabled={true}>Save</button>
            </div>
        </div>
        
    )
}

export default Gridreact