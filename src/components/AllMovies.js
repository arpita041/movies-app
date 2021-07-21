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
                { headerName: 'NAME', field: 'name' },
                { headerName: 'RATING', field: 'rating' },
                { headerName: 'DIRECTOR', field: 'director' },
                { headerName: 'BOX OFFICE COLLECTION', field: 'boxOfficeCollection' }
            ],
            defaultColDef: {
                sortable: true,
                editable: true,
                flex: 1, filter: true,
                floatingFilter:true

            },
            rowData:null
        }
    }
     
componentDidMount= (e)=>
{
    axios.get('http://localhost:3500/film')
    .then(response => {
        console.log(response);
        this.setState({
            allMovies: response.data.forms,
            rowData:response.data.forms
        })
    })
    console.log(this.state.rowData);
}

    getAllMovies = (e) => {
        axios.get('http://localhost:3500/film')
            .then(response => {
                console.log(response);
                this.setState({
                    allMovies: response.data.forms,
                    rowData:response.data.forms
                })
            })
            console.log(this.state.rowData);
    }
    render() {
        return (
            <div>
                <NavBarrr></NavBarrr>
                <div className="contain">
                    <h3>Movie Details</h3>
                    {/* <button className='btn' onClick={this.getAllMovies} >load all Movies</button> */}
                </div>
                {/* <Table post={this.state.allMovies}></Table> */}
                <Gridreact
                    columnDefs={this.state.columnDefs}
                    defaultColDef={this.state.defaultColDef}
                    rowData={this.state.rowData}
                    height='350px'
                >

                </Gridreact>
            </div>
        )
    }
}

export default AllMovies
