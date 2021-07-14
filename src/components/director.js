import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavBarrr from './NavBarrr'
import axios from 'axios';
const Director = props => {

  const { searchVal } =
    (props.location && props.location.state) || {};

  const [post, setPost] = useState([])
  const [movies, setMovies] = useState([])
  const [have, setHave] = useState([])
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
          <table className='table table-striped' id='tbl'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Award Count</th>

              </tr>
            </thead>
            <tbody>


              {
                post.map((m, i) => {
                  return (
                    <tr key={m.name}>
                      <td >{m.name}</td>
                      <td >{m.age}</td>
                      <td>{m.gender}</td>
                      <td>{m.awardCount}</td>
                    </tr>
                  )
                })
              }
              
            </tbody>
          </table>
          <br />

          {
            (have) ? (
              <div className='contain'>
                <h3>Movies</h3>
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
                      movies.map((m, i) => {
                        return (
                          <tr key={m.name}>
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
            ) : null
          }
        </div>
      </div>
    </div>
  );
};

export default Director;
