import React, { Component } from 'react'

import axios from 'axios';
class postFroms extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            userId:'',
            title:'',
            body:''
        }
    }
    changeHandler =(e)=>
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler = e =>
    {
        e.preventDefault(); // to avoid the page refresh
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts' , this.state)
        .then(res=>
            {
                console.log(res);
            })
            .catch(err=>
                {
                    console.log(err);
                })
    }
    render() {
        const {userId, title,body}= this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    userId:
                    <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
                   
                    title:
                    <input type="text" name="title"value={title} onChange={this.changeHandler}/>
                   body:
                    <input type="text" name="body" value={body} onChange={this.changeHandler}/>
                    <button type="submit">Submit</button>
                     </form>
            </div>
        )
    }
}

export default postFroms
