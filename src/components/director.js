import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavBarrr from './NavBarrr'
import axios from 'axios';
import Table from "./table";
import Gridreact from "./Gridreact";
const Director = props => {

  const { searchVal } =
    (props.location && props.location.state) || {};

  const [post, setPost] = useState([])
  const [movies, setMovies] = useState([])
  const [have, setHave] = useState([]);
  const [def,setDef]= useState([]);
  const columnDefs= [
    { headerName: 'NAME', field: 'name' },
    { headerName: 'RATING', field: 'rating' },
    { headerName: 'DIRECTOR', field: 'director' },
    { headerName: 'BOX OFFICE COLLECTION', field: 'boxOfficeCollection' }
]
const columnDefs1= [
  { headerName: "NAME", field: "name" },
  { headerName: "AGE", field: "age",}, 
  {headerName: "GENDER",field: "gender",},
  { headerName: "AWARD COUNT", field: "awardCount" },
  ]

  let defaultColDef={
    sortable:true,
    editable:true,
    flex:1,
  }
  useEffect(() => {

    if (searchVal.trim() === '' && props.location.pathname === '/directors') {
      axios.get(`http://localhost:3500/direct`)
        .then(res => {
          setPost(res.data.forms);
          console.log(post);
        })
      setHave(false);
      // console.log(have)
    }

    else if (props.location.pathname === '/directors') {
      setHave(true)
      console.log(have)

      console.log("direc")
      axios.get(`http://localhost:3500/direct/${searchVal}`)
        .then(res => {
          console.log(res)
          setPost(res.data.data)
          //   console.log(post.data.age)
        })
        .catch(err => {
          console.log("error ayiii")
        })
      axios.get(`http://localhost:3500/film/${searchVal}`)
        .then(res => {
          console.log(res.data.movies)

          setMovies(res.data.movies)
         //console.log(movies)
        })
    }
  }, [searchVal])

  return (
    <div>
      <NavBarrr></NavBarrr>
      <div>
           <div className='contain'>
           <div>
                <div className="contain">
               
                </div>
              
                <Gridreact
                    columnDefs={columnDefs1}
                    rowData={post}
                    defaultColDef={defaultColDef}
                    height='200px'
                >

                </Gridreact>
    </div>
          <br />

          {
            (have) ? (
              <div>
         
           <Gridreact
               columnDefs={columnDefs}
               rowData={movies}
               defaultColDef={defaultColDef}
                height='200px' >
                
           </Gridreact>
</div>
            ) : null
          }
        </div>
      </div>
    </div>
  );
};

export default Director;
