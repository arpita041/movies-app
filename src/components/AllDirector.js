import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import NavBarrr from './NavBarrr'
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import 'ag-grid-community/dist/styles/ag-theme-material.css';
import './AllDirec.scss'
import './AllDirector.css'
function AllDirector() {
  const columnDefs= [
    { headerName: "NAME", field: "name" },
    { headerName: "AGE", field: "age",}, 
    {headerName: "GENDER",field: "gender",},
    { headerName: "AWARD COUNT", field: "awardCount" },
    ]

const defaultColDef={
  sortable:true,
  editable:true,
  flex:1,filter:true,
  floatingFilter:true
}

const rowStyle ={
background : 'transparent',
color: '#3BB7C4'
}

const onGridReady=(params)=>{
  console.log("grid is ready")
  fetch("http://localhost:3500/direct").then(resp=>resp.json())
  .then(resp=>{console.log(resp)
    params.api.applyTransaction({add:resp.forms})})
}
  return (
    <div className="App">
        <NavBarrr></NavBarrr>
      <h3>Director Details</h3>
      <div className="ag-theme-alpine" style={ {height: '400px'} }>
        <AgGridReact
            rowStyle={rowStyle}
            columnDefs={columnDefs}
            // rowData={rowData}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default AllDirector;