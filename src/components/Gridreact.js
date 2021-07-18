import React from 'react'
import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './AllDirec.scss';
import './AllDirector.css'


function Gridreact(props) {

    const rowStyle ={
        background : 'transparent',
        color: '#3BB7C4'
        }
        
        const pagination = true;

// sets 10 rows per page (default is 100)
const paginationPageSize = 10;
const height = props.height;
console.log(height)
    // console.log(this.props)
    return (
        <div>
            <div className="ag-theme-alpine" style={{ height: props.height }}>
                <AgGridReact
                    pagination={pagination} paginationPageSize={paginationPageSize}
                    columnDefs={props.columnDefs}
                    rowData={props.rowData}
                    rowStyle={rowStyle}
                    defaultColDef={props.defaultColDef}
                    // onGridReady={onGridReady}
                    >
                </AgGridReact>
            </div>
        </div>
    )
}

export default Gridreact
