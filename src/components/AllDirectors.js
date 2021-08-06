import axios from 'axios';
import React, {useState,useEffect} from 'react'
import NavBar from './NavBar';
import Gridreact from './Gridreact';
import { IoIosTrash } from "react-icons/io";
function AllDirectors() {
 const [post,setPost]=useState([]);

 useEffect(()=>
 {
     axios.get('http://localhost:3500/direct')
     .then(res=>
        {
            setPost(res.data.forms);
            console.log(res);
        })
 },[]);

 const actionButton =(params) =>{
    let saveIt = window.confirm("Do you want to delete the data?");
    if(saveIt===true)
    {
    // console.log(params);
     const name = params.data.name;
     params.api.applyTransaction({
        remove: [params.node.data]
      });
     axios.delete(`http://localhost:3500/deleteDirectorRow/${name}`)
     .then(res=>
        {
            console.log(res);
        })
    }
    else
    {
        console.log("not")
    }
 }

//  const saving=(params)=>{
//      console.log(params);
//      alert("do you want to change it ?")
//  }
 const columnDefs= [
    { headerName: "NAME", field: "name", width:100 },
    { headerName: "AGE", field: "age",}, 
    {headerName: "GENDER",field: "gender",},
    { headerName: "AWARD'S", field: "awardCount"},
    {headerName:'ACTION' , field:'abc',floatingFilter:false, cellRendererFramework:(params)=><div>
        {/* <button className="btnClass" onClick={()=>saving(params)}>Save</button> */}
        <button className="btn"  onClick={()=>actionButton(params)}><IoIosTrash/></button>
        
    </div>},
    ]
    const defaultColDef={
        sortable:true,
        editable:true,
        flex:1,filter:true,
        flex: 1,
        floatingFilter:true,
        minWidth: 120

      }
    return (
        <div>
                       <NavBar></NavBar>
                <div className="heading">
                    <h3 data-testid="header">Director Details</h3>
                    {/* <button className='btn' onClick={this.getAllMovies} >load all Movies</button> */}
                </div><br />
                {/* <Table post={this.state.allMovies}></Table> */}
                <Gridreact
                    columnDefs={columnDefs}
                    rowData={post}
                    defaultColDef={defaultColDef}
                    height='350px'
                    apiValue='director'
                >

                </Gridreact>
        </div>
    )
}

export default AllDirectors
