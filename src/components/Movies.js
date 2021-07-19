import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavBarrr from './NavBarrr'
import axios from 'axios';
import Gridreact from "./Gridreact";
const Movies = props => {

  const { searchVal } =
    (props.location && props.location.state) || {};

  const [post, setPost] = useState([])
  const columnDefs= [
    { headerName: 'NAME', field: 'name' },
    { headerName: 'RATING', field: 'rating' },
    { headerName: 'DIRECTOR', field: 'director' },
    { headerName: 'BOX OFFICE COLLECTION', field: 'boxOfficeCollection' }
]
const defaultColDef={
  sortable:true,
  editable:true,
  flex:1,filter:true,
  floatingFilter:true,
  rowSelection: 'multiple',
  rowMultiSelectWithClick: true,
}
  useEffect(() => {
      
    if (searchVal.trim() === '' && props.location.pathname === '/movies') {

      axios.get(`http://localhost:3500/film`)
        .then(res => {
          setPost(res.data.forms);

        })
    }

    else if (props.location.pathname === '/movies') {
   
      axios.get(`http://localhost:3500/films/${searchVal}`)
        .then(res => {
          console.log(res.data.movies)
          setPost(res.data.movies)

        })
        .catch(err => {
          console.log("error")
        })
    }
  }, [searchVal])

  return (
    <div>
                   <NavBarrr></NavBarrr>
                <div className="contain">
                    <h3>Director Details</h3>
                    {/* <button className='btn' onClick={this.getAllMovies} >load all Movies</button> */}
                </div>
                {/* <Table post={this.state.allMovies}></Table> */}
                <Gridreact
                    columnDefs={columnDefs}
                    rowData={post}
                    defaultColDef={defaultColDef}
                    height='350px'
                >

                </Gridreact>
    </div>
  );
};

export default Movies;
