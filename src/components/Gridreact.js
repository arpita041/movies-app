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
const height = props.height;
console.log(height)
    // console.log(this.props)
    return (
        <div>
            <div className="ag-theme-alpine" style={{ height: props.height }}>
                <AgGridReact
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
