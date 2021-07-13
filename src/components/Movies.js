import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavBarrr from './NavBarrr'
import axios from 'axios';
const Movies = props => {

  const { searchVal } =
    (props.location && props.location.state) || {};

  const [post, setPost] = useState([])

  useEffect(() => {
    if (props.location.pathname === '/movies') {
      console.log("movie")

      axios.get(`http://localhost:3500/films/${searchVal}`)
        .then(res => {
          console.log(res.data.movies)
          setPost(res.data.movies)

        })
        .catch(err => {
          console.log("error")
        })
    }
    if (props.location.pathname === '/directors') {
      console.log("direc")
      axios.get(`http://localhost:3500/film/${searchVal}`)
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
      <div>
        {/* <ul>
     {
           post.map(items =>{
             return(<li key={items._id}> {items.name}</li>)
            
           })
       }
     </ul>
        */}
        <div className='contain'>
          <table className='table table-striped' id='tbl'>
            <thead>
              <tr>
                <th>Movie</th>
                <th>Rating</th>
                <th>Director</th>
                <th>Box Office Collection</th>
              </tr>
            </thead>
            <tbody>

              {
                post.map((m, i) => {
                  return (
                    <tr key={m.rating}>
                      <td >{m.name}</td>
                      <td >{m.rating}</td>
                      <td>{m.director}</td>
                      <td>{m.boxOfficeCollection}</td>

                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Movies;
