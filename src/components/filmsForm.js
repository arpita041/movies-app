import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Carousel,Form } from 'react-bootstrap';
class filmsForm extends Component {
    constructor(props) {
		super(props)

		this.state = {
			name: '',
			boxOfficeCollection: '',
            rating:0,
			director: ''
		}
	}
    handlenameChange = event => {
		this.setState({
			name: event.target.value
		})
	}
    
	handleBox = event => {
		this.setState({
			boxOfficeCollection: event.target.value
		})
	}

	handleRating = event => {
		this.setState({
			rating: event.target.value
		})
	}

	handleDirector = event => {
		this.setState({
			director: event.target.value
		})
	}

	handleSubmit = event => {
		alert(`${this.state.name} ${this.state.boxOfficeCollection} ${this.state.rating} ${this.state.director}`)
		event.preventDefault()
	}
    render() {

        const { name,boxOfficeCollection,rating, director } = this.state
        return (
            <div>
               <div class="jumbotron my-5">
    <div class="container ">
        <div class="mycard">
            <div class="row">
                <div class="col-md-12">
                    <div class="myleftctn">
                    <form onSubmit={this.handleSubmit}>
                    <div>
                <Form.Group controlId="formBasicEmail">
             <Form.Label>Movie Name</Form.Label>
           <Form.Control type="text" placeholder="movie name"  value={name} onChange={this.handlenameChange}/>
            </Form.Group>
            </div>
                <div>
                <Form.Group controlId="formBasicEmail">
             <Form.Label>Box Office Collection</Form.Label>
           <Form.Control type="text" placeholder="box office collection"  value={boxOfficeCollection} onChange={this.handleBox}/>
            </Form.Group>
            </div>
            <div>
                <Form.Group controlId="formBasicEmail">
             <Form.Label>Rating</Form.Label>
           <Form.Control type="text" placeholder="rating"  value={rating} onChange={this.handleRating}/>
            </Form.Group>
            </div>
            <div>
                <Form.Group controlId="formBasicEmail">
             <Form.Label>Director Name</Form.Label>
           <Form.Control type="text" placeholder="Director"  value={director} onChange={this.handleDirector}/>
            </Form.Group>
            </div>
            <div className="App">
                <Button variant="primary" type="submit">Submit</Button>{' '}
                </div>
			</form>
</div>
</div>
</div>
</div> 
</div>
</div>
            </div>
        )
    }
}

export default filmsForm
