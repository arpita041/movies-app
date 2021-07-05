import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Carousel,Form } from 'react-bootstrap';
class filmsForm extends Component {
    constructor(props) {
		super(props)

		this.state = {
			name: '',
			boxOfficeCollection: '',
            rating:'',
			director: '',
            nameError:'',
            boxOfficeError:'',
            ratingError:'',
            directorError:''
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
validate()
{
    let val =0;
    let rate= parseInt(this.state.rating);
    if(this.state.name.trim()==='')
    {
        this.setState({nameError:"Name is required"});
        val=1;
    }
    if(this.state.boxOfficeCollection.trim()==='')
    {
        this.setState({boxOfficeError:"BoxOfficeCollection is required"})
        val=1;
    }
    if(this.state.rating.trim()==='')
    {
     this.setState({ratingError:"Rating is required"});
     val=1;
  
     }  
      if(rate>10 || rate<0)
     {
        this.setState({ratingError:"Rating should range between 0 to 10"});
        val=1;
    }
    if(this.state.director.trim()==='')
    {
        this.setState({directorError:"Director name is required"});
        val=1;
    }
    if(val===0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
	handleSubmit = event => {
    
	//	alert(`${this.state.name} ${this.state.boxOfficeCollection} ${this.state.rating} ${this.state.director}`)
  const isValid=this.validate();

if(isValid)
  {
      console.log(this.state)
      console.log("no error");
  }
		event.preventDefault()
	}
    render() {

        const { name,boxOfficeCollection,rating, director } = this.state
        return (
            <div>
               <div className="jumbotron my-5">
    <div className="container ">
        <div className="mycard">
            <div className="row">
                <div className="col-md-12">
                    <div className="myleftctn">
                    <form onSubmit={this.handleSubmit}>
                    <div>
                <Form.Group controlId="formBasicEmail">
             <Form.Label>Movie Name</Form.Label>
           <Form.Control type="text" placeholder="movie name"  value={name} onChange={this.handlenameChange}/>
           <small className="text-danger">{this.state.nameError}</small>
            </Form.Group>
            </div>
                <div>
                <Form.Group controlId="formBasicEmail">
             <Form.Label>Box Office Collection</Form.Label>
           <Form.Control type="text" placeholder="box office collection"  value={boxOfficeCollection} onChange={this.handleBox}/>
           <small className="text-danger">{this.state.boxOfficeError}</small>
            </Form.Group>
            </div>
            <div>
                <Form.Group controlId="formBasicEmail">
             <Form.Label>Rating</Form.Label>
           <Form.Control type="text" placeholder="rating"  value={rating} onChange={this.handleRating}/>
           <small className="text-danger">{this.state.ratingError}</small>
            </Form.Group>
            </div>
            <div>
                <Form.Group controlId="formBasicEmail">
             <Form.Label>Director Name</Form.Label>
           <Form.Control type="text" placeholder="Director"  value={director} onChange={this.handleDirector}/>
           <small className="text-danger">{this.state.directorError}</small> 
            </Form.Group>
            </div>
            <div className="App">
                <Button variant="dark" type="submit">Submit</Button>{' '}
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
