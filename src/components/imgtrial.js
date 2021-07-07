import React, { Component } from 'react'
import axios from 'axios';
class Imgtrial extends Component {
    uploadHandler =e=>
    {
        const data = new FormData();
        data.append('file', e.target.files[0]);
        axios.post('/upload', data)
        .then((res) => {
          this.setState({ photos: [res.data, ...this.state.photos] });
        });
    }
    render() {
      
        return (
            <div>
               <input type="file" name="file" onChange={this.uploadHandler}/> 
            </div>
        )
    }
}

export default Imgtrial
