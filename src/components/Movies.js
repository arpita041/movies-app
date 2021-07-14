import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavBarrr from './NavBarrr'
import axios from 'axios';
import Table from "./table";
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
      <Table post= {post}></Table>
    </div>
  );
};

export default Movies;
