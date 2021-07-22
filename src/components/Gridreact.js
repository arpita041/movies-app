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
    const rowStyle ={
        background : 'transparent',
        color: '#3BB7C4'
        }
      
  const  myFunction =(res)=>
        {
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
            else if(props.apiValue==='movie')
            {
                axios.patch(`http://localhost:3500/updateMovie/${name}`,res.data)
                .then(res=>{
                    console.log(res)
                });
            }
        }
        const valueChanged =(res)=>
        {
            console.log("value has been changed")
        }
        const saveChanges =(res)=>
        {
            console.log('called');
          //  props.api.stopEditing();
         // GridApi.stopEditing();
        }
const height = props.height;
const paginationPageSize=10;
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
                    pagination={true}
                    paginationPageSize={paginationPageSize}
                    >
                </AgGridReact>
            </div>
        </div>
    )
}

export default Gridreact
