import axios from 'axios';
import React from 'react'
import { useState } from 'react'

function Fun() {
    const [post,setPost]=useState([]);
    const handleClick=(e)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response)
            setPost(response.data)
        })
    }
    return (
        <div>
            <button className='btn' onClick={handleClick}>Click</button>
            {
                post.map((item)=>{
                    return(<h1>{item.title}</h1>)
                })
            }
        </div>
    )
}

export default Fun
