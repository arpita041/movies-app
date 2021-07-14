import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavBarrr from './NavBarrr'
import axios from 'axios';
const Movies = props => {

  const { searchVal } =
    (props.location && props.location.state) || {};

  const [post, setPost] = useState([])
  const [movie, setMovie] = useState()
  useEffect(() => {
      
    if (searchVal.trim() === '' && props.location.pathname === '/movies') {

      axios.get(`http://localhost:3500/film`)
        .then(res => {
          setPost(res.data.forms);

        })
    }

    else if (props.location.pathname === '/movies') {
      setMovie(true);
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
      <div>
       
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
                      <tr key={m._id}>
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
        ) 
      </div>
    </div>
  );
};

export default Movies;
