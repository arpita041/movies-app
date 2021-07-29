import axios from 'axios'
import React, { Component } from 'react'
import NavBarrr from './NavBarrr'
import '../css/allMovie.css'
import Table from './table'
import Gridreact from './Gridreact'
import { IoIosTrash } from "react-icons/io";
import { Modal,Button} from 'react-bootstrap';
class AllMovies extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allMovies: [],
            columnDefs: [
                { headerName: 'NAME', field: 'name', width: 100 },
                { headerName: 'RATING', field: 'rating', width: 100 },
                { headerName: 'DIRECTOR', field: 'director', width: 100 },
                { headerName: 'BOX OFFICE COLLECTION', field: 'boxOfficeCollection', width: 100 },
                {
                    headerName: 'ACTION', field: 'abc', cellRendererFramework: (params) => <div>
                        {/* <button className="btnClass" onClick={() => this.saving(params)}>Save</button> */}
                        <button className='btn btn-primary' onClick={() => this.actionButton(params)}><IoIosTrash /></button>
                    </div>
                },
            ],
            defaultColDef: {
                sortable: true,
                editable: true,
                flex: 1, filter: true,
                flex: 1,
                minWidth: 150

            },
            rowData: null,
            onFirstDataRendered: this.onFirstDataRendered,
            show:false,
            respo:''

        }
    }
    handleClose=()=>{
        this.setState({show:false})
    }
    handleShow=()=>{
        this.setState({show:true})
    }
    onFirstDataRendered = (params) => {
        params.api.sizeColumnsToFit();
    }
    actionButton = (params) => {
        // this.handleShow()
        // if(this.state.respo==='yes'){
        //     var name = params.data.name;
        //     params.api.applyTransaction({
        //         remove: [params.node.data]
        //     });
        //     axios.delete(`http://localhost:3500/deleteMovieRow/${name}`)
        //         .then(res => {
        //             console.log(res);
        //         })
        // }
        let saveIt = window.confirm("Do you want to delete the data?");
        if (saveIt === true) {
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
        else {
            console.log("no")
         }
    }

    // deleteIt=(params)=>{
    //     this.handleClose()
    //     const name = params.data.name;
    //     params.api.applyTransaction({
    //         remove: [params.node.data]
    //     });
    //     axios.delete(`http://localhost:3500/deleteMovieRow/${name}`)
    //         .then(res => {
    //             console.log(res);
    //         })
    // }

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
            <div id='main'>
                <NavBarrr></NavBarrr>
                <div className="heading">
                    <h3>Movie Details</h3>
                </div><br />
                {/* {
                    this.state.show ? <Modal backdrop="static" centered show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you really want to delete it ?
                    
                    </Modal.Body>
                    <Modal.Footer>
                      <Button  onClick={this.deleteIt}>
                        Yess
                      </Button>
                      <Button  onClick={this.handleClose}>
                        Cancle
                      </Button>
                    
                    </Modal.Footer>
                  </Modal> : <b></b>
                } */}
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
