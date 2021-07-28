import axios from 'axios'
import React, { Component } from 'react'
import NavBarrr from './NavBarrr'
import './allMovie.css'
import Table from './table'
import Gridreact from './Gridreact'
class AllMovies extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allMovies: [],
            columnDefs: [
                { headerName: 'NAME', field: 'name',width: 100 },
                { headerName: 'RATING', field: 'rating',width: 100 },
                { headerName: 'DIRECTOR', field: 'director',width: 100 },
                { headerName: 'BOX OFFICE COLLECTION', field: 'boxOfficeCollection' ,width: 100},
                {
                    headerName: 'ACTION', field: 'abc', cellRendererFramework: (params) => <div>
                        {/* <button className="btnClass" onClick={() => this.saving(params)}>Save</button> */}
                        <button className='btn btn-primary' id='but1' onClick={() => this.actionButton(params)}>Delete</button>
                    </div>
                },
            ],
            defaultColDef: {
                sortable: true,
                editable: true,
                flex: 1, filter: true,
                floatingFilter: true,
                resizable: true

            },
            rowData: null,
            onFirstDataRendered: this.onFirstDataRendered,

        }
    }
    // saving = (params) => {
    //     console.log(params);
    //     alert("do you want to change it ?")
    // }
     onFirstDataRendered=(params)=> {
        params.api.sizeColumnsToFit();
      }
    actionButton = (params) => {
        let saveIt = window.confirm("Do you want to delete the data?");
        if(saveIt===true)
        {
        console.log(params);
        const name = params.data.name;
        params.api.applyTransaction({
            remove: [params.node.data]
        });
        axios.delete(`http://localhost:3500/deleteMovieRow/${name}`)
            .then(res => {
                console.log(res);
            })
        }
        else
        {
            console.log("no")
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:3500/film')
            .then(response => {
                // console.log(response);
                this.setState({
                    allMovies: response.data.forms,
                    rowData: response.data.forms
                })
            })
        console.log(this.state.rowData);
    }


    render() {
        return (
            <div>
                <NavBarrr></NavBarrr>
                <div className="heading">
                    <h3>Movie Details</h3>
                    {/* <button className='btn' onClick={this.getAllMovies} >load all Movies</button> */}
                </div><br />
                {/* <Table post={this.state.allMovies}></Table> */}
                <Gridreact
                    columnDefs={this.state.columnDefs}
                    defaultColDef={this.state.defaultColDef}
                    rowData={this.state.rowData}
                    height='350px'
                    apiValue='movie'
                >

                </Gridreact>
            </div>
        )
    }
}

export default AllMovies
