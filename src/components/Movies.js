import React, {useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import NavBarrr from './NavBarrr'
import axios from 'axios';
const Movies = props => {

  const { searchVal} =
    (props.location && props.location.state) || {};

    const [post,setPost]=useState([])
    
    useEffect(()=>
    {
        axios.get(`http://localhost:3500/films/${searchVal}`)
        .then(res=>
            {
            setPost(res.data.movies)

        })
            .catch(err =>
                {
                    console.log("error")
                })
    })
  return (
    <div>
    <NavBarrr></NavBarrr>
   <div>name
       {searchVal}
       {
           post.map(items =>{
            <li key={items._id}> {items.name}</li>
           })
       }
   </div>
    </div>
  );
};

export default Movies;
