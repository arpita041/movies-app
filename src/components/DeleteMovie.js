import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';

class DeleteMovie extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movieName:''
        }
    }

 handleName=(event)=>{
        this.setState({
            movieName:event.target.value
        })
    }
    
    render() {
        return (
            <div className='container'>
                <div className="jumbotron">
                    <div>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Movie Name</Form.Label>
                    <Form.Control type="text" placeholder="movie name" value={this.state.movieName} onChange={this.handleName} />
                </Form.Group>
                    </div>
                    <div  className="App">
                    <Button variant="danger" type="submit">Delete it</Button>{' '}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default DeleteMovie
