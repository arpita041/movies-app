import React from 'react'
import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './AllDirec.scss';
import './AllDirector.css'
import axios from 'axios';

function Gridreact(props) {

    let name;
    const rowStyle ={
        background : 'transparent',
        color: '#3BB7C4'
        }
  const  myFunction =(res)=>
        {
            console.log(res);
            name= res.data.name;
        }
        const secnd =(res)=>
        {
         //   console.log(name);
        //    console.log("called");
            console.log(res.data)
            if(props.apiValue==='director')
            {
            axios.patch(`http://localhost:3500/updateDirect/${name}`,res.data)
            .then(res=>
                {
                    console.log(res);
                });
            }
            else
            {
                console.log("movie data")
            }
        }
const height = props.height;
console.log(height)
    return (
        <div>
            <div className="ag-theme-alpine" style={{ height: props.height }}>
                <AgGridReact
                    columnDefs={props.columnDefs}
                    rowData={props.rowData}
                    rowStyle={rowStyle}
                    defaultColDef={props.defaultColDef}
                    onRowDoubleClicked= {myFunction}
                    onCellEditingStopped={secnd}
                    >
                </AgGridReact>
            </div>
        </div>
    )
}

export default Gridreact
