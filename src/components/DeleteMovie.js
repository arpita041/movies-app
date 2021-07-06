import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import InputField from './inputField';

class DeleteMovie extends Component {
    constructor(props) {
        super(props);

        this.state = {
             movieName:''
        }
    }

 handleChange=(event)=>{
        this.setState({
            movieName:event.target.value
        })

    }
handleSubmit =e=>
{
    e.preventDefault();
    console.log(this.state);
}
    render() {
        const {movieName}= this.state;
        return (
            <div className='container'>
                <div className="jumbotron my-5">
                     <form onSubmit={this.handleSubmit}>
                    <div>
                    {/* <Form.Group controlId="formBasicEmail">
                    <Form.Label>Movie Name</Form.Label>
                    <Form.Control type="text" placeholder="movie name" value={movieName} onChange={this.handleChange} />
                </Form.Group> */}
                <InputField               
                 type="text"
         value={this.state.movieName}
         placeholder="movie Name"
         label="Movie Name"
         name="movieName"
         onChange={this.handleChange}/>
                    </div>
                    <div  className="App">
                    <Button variant="danger" type="submit">Delete it</Button>{' '}
                    </div> 
                    </form>
                </div>
               
            </div>
        )
    }
}

export default DeleteMovie
