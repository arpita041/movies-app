import axios from 'axios';
import React, {useState,useEffect} from 'react'
import NavBarrr from './NavBarrr';
import Gridreact from './Gridreact';
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
 const columnDefs= [
    { headerName: "NAME", field: "name" },
    { headerName: "AGE", field: "age",}, 
    {headerName: "GENDER",field: "gender",},
    { headerName: "AWARD COUNT", field: "awardCount" },
    ]
    const defaultColDef={
        sortable:true,
        editable:true,
        flex:1,filter:true,
        floatingFilter:true
      }
    return (
        <div>
                       <NavBarrr></NavBarrr>
                <div className="contain">
                    <h3>Director Details</h3>
                    {/* <button className='btn' onClick={this.getAllMovies} >load all Movies</button> */}
                </div>
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
