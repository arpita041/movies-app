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
                { headerName: 'BOX OFFICE COLLECTION', field: 'boxOfficeCollection' },
                {headerName:'Action' , field:'abc', cellRendererFramework:(params)=><div>
                <button className="btnClass" onClick={()=>this.actionButton(params)}>Delete</button>
            </div>},
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
    actionButton =(params) =>{
        console.log(params);
        const name = params.data.name;
        params.api.applyTransaction({
           remove: [params.node.data]
         });
        axios.delete(`http://localhost:3500/deleteMovieRow/${name}`)
        .then(res=>
           {
               console.log(res);
           })
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
                    apiValue='movie'
                >

                </Gridreact>
            </div>
        )
    }
}

export default AllMovies
