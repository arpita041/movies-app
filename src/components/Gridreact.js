import React from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
function Gridreact(props) {
    // console.log(this.props)
    return (
        <div>
            <div className="ag-theme-alpine" style={{ height: '500px' }}>
                <AgGridReact
                    columnDefs={props.columnDefs}
                    rowData={props.rowData}
                    defaultColDef={props.defaultColDef}
                    // onGridReady={onGridReady}
                    >
                </AgGridReact>
            </div>
        </div>
    )
}

export default Gridreact
