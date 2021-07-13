import React, {useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import NavBarrr from './NavBarrr'
import axios from 'axios';
const Movies = props => {

  const { searchVal} =
    (props.location && props.location.state) || {};

    const [post,setPost]=useState([])
    const [movie, setMovie]=useState()
    const [movies, setMovies]= useState([])
    useEffect(()=>
    {
      if(searchVal.trim()==='' && props.location.pathname ==='/movies')
      {

        axios.get(`http://localhost:3500/film`)
        .then(res=>
          {
            setPost(res.data.forms);

          })
      }
      if(searchVal.trim() ==='' && props.location.pathname==='/directors')
      {
        axios.get(`http://localhost:3500/direct`)
        .then(res=>
          {
            setPost(res.data.forms);
            console.log(post);
          })
      }
    else if(props.location.pathname==='/movies')
      {
      setMovie(true);
        axios.get(`http://localhost:3500/films/${searchVal}`)
        .then(res=>
            {
              console.log(res.data.movies)
            setPost(res.data.movies)

        })
            .catch(err =>
                {
                    console.log("error")
                })
              }
         else if(props.location.pathname==='/directors')
              {
                setMovie(false);
            
                console.log("direc")
                axios.get(`http://localhost:3500/direct/${searchVal}`)
                .then(res=>
                    {
                      console.log(res.data)
                    setPost(res.data.data)
                 //   console.log(post.data.age)
                })
                    .catch(err =>
                        {
                            console.log("error")
                        })
                        axios.get(`http://localhost:3500/film/${searchVal}`)
                        .then(res=>
                          {
                            console.log(res.data.movies)
                            setMovies(res.data.movies)
                            console.log(movies)
                          })
              }
    },[searchVal])
    
  return (
    <div>
    <NavBarrr></NavBarrr>
   <div>
    {(movie)?(
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
  ): <div className='contain'>
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
  <br/>
  <h3>Movies</h3>
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
</div>

}
   </div>
    </div>
  );
};

export default Movies;
