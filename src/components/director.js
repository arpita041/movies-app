import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavBarrr from "./NavBarrr";
import axios from "axios";
import Table from "./table";
import Gridreact from "./Gridreact";
const Director = (props) => {
  const { searchVal } = (props.location && props.location.state) || {};

  const [post, setPost] = useState([]);
  const [movies, setMovies] = useState([]);
  //const [have, setHave] = useState([]);
  const [def, setDef] = useState([]);
  const [Height, setHeight] = useState("");
  const [Mheight, setMheight] = useState("");
  //   const columnDefs= [
  //     { headerName: 'NAME', field: 'name' },
  //     { headerName: 'RATING', field: 'rating' },
  //     { headerName: 'DIRECTOR', field: 'director' },
  //     { headerName: 'BOX OFFICE COLLECTION', field: 'boxOfficeCollection' }
  // ]
  const columnDefs1 = [
    { headerName: "NAME", field: "name" },
    { headerName: "AGE", field: "age" },
    { headerName: "GENDER", field: "gender" },
    { headerName: "AWARD'S", field: "awardCount" },
  ];

  const defaultColDef = {
    sortable: true,
    editable: true,
    flex: 1,
    filter: true,
    floatingFilter: true,
    minWidth: 135,
  };
  useEffect(() => {
    if (searchVal.trim() === "" && props.location.pathname === "/directors") {
      axios.get(`http://localhost:3500/direct`).then((res) => {
        setPost(res.data.forms);
        setHeight("340px");
        console.log(post);
      });
      //    setHave(false);
      // console.log(have)
    } else if (props.location.pathname === "/directors") {
      console.log("direc");
      axios
        .get(`http://localhost:3500/direct/${searchVal}`)
        .then((res) => {
          console.log(res);
          setPost(res.data.data);
          setHeight("300px");
          //   console.log(post.data.age)
        })
        .catch((err) => {
          console.log("error");
        });
      // axios.get(`http://localhost:3500/film/${searchVal}`)
      //   .then(res => {
      //     if(res.data.movies)
      //     {
      //     console.log(res.data.movies)
      //     setHave(true)
      //     setMovies(res.data.movies)
      //     setMheight('300px')
      //     }
      //    //console.log(movies)
      //   })
    }
  }, [searchVal]);

  return (
    <div>
      <NavBarrr></NavBarrr>
      <div className="heading">
        <h3>Director Details</h3>
        {/* <button className='btn' onClick={this.getAllMovies} >load all Movies</button> */}
      </div>
      <br />
      {/* <Table post={this.state.allMovies}></Table> */}
      <Gridreact
        columnDefs={columnDefs1}
        rowData={post}
        defaultColDef={defaultColDef}
        height={Height}
      ></Gridreact>
    </div>
  );
};

export default Director;
