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

  const [def, setDef] = useState([]);
  const [Height, setHeight] = useState("");
  const [Mheight, setMheight] = useState("");

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
    } else if (props.location.pathname === "/directors") {
      console.log("direc");
      axios
        .get(`http://localhost:3500/direct/${searchVal}`)
        .then((res) => {
          console.log(res);
          setPost(res.data.data);
          setHeight("300px");
        })
        .catch((err) => {
          console.log("error");
        });
    }
  }, [searchVal]);

  return (
    <div>
      <NavBarrr></NavBarrr>
      <div className="heading">
        <h3>Director Details</h3>
      </div>
      <br />

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
