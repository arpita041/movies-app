import React, { Component } from "react";
//import {AgGridColumn, AgGridReact} from 'ag-grid-react';

export class Table extends Component {
  render() {
    return (
      <div>
        <div className="contain">
          <table className="table table-striped" id="tbl">
            <thead>
              <tr>
                <th>Movie</th>
                <th>Rating</th>
                <th>Director</th>
                <th>Box Office Collection</th>
              </tr>
            </thead>
            <tbody>
              {this.props.post.map((m, i) => {
                return (
                  <tr key={m._id}>
                    <td>{m.name}</td>
                    <td>{m.rating}</td>
                    <td>{m.director}</td>
                    <td>{m.boxOfficeCollection}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        )
      </div>
    );
  }
}

export default Table;
