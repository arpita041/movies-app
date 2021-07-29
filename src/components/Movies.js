import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavBarrr from './NavBarrr'
import axios from 'axios';
import Gridreact from "./Gridreact";
const Movies = props => {

  const { searchVal } =
    (props.location && props.location.state) || {};

  const [post, setPost] = useState([])
  const [height , setHeight]= useState()
  const columnDefs= [
    { headerName: 'NAME', field: 'name' },
    { headerName: 'RATING', field: 'rating' },
    { headerName: 'DIRECTOR', field: 'director' },
    { headerName: 'COLLECTION', field: 'boxOfficeCollection', minWidth:120 }
]
const defaultColDef={
  sortable:true,
  editable:true,
  flex:1,filter:true,
  floatingFilter:true,
  minWidth: 135

}
  useEffect(() => {
      
    if (searchVal.trim() === '' && props.location.pathname === '/movies') {

      axios.get(`http://localhost:3500/film`)
        .then(res => {
          setPost(res.data.forms);
          setHeight('340px');
        })
    }

    else if (props.location.pathname === '/movies') {
   
      axios.get(`http://localhost:3500/films/${searchVal}`)
        .then(res => {
          
          console.log(res.data.movies)
          setPost(res.data.movies)
          setHeight('300px');
        })
        .catch(err => {
          console.log("error")
        })
    }
  }, [searchVal])

  return (
    <div>
                   <NavBarrr></NavBarrr>
                <div className="heading">
                    <h3>Movie Details</h3>
                    {/* <button className='btn' onClick={this.getAllMovies} >load all Movies</button> */}
                </div> <br />
                {/* <Table post={this.state.allMovies}></Table> */}
                <Gridreact
                    columnDefs={columnDefs}
                    rowData={post}
                    defaultColDef={defaultColDef}
                    height={height}
                >

                </Gridreact>
    </div>
  );
};

export default Movies;
