import axios from 'axios'
import React, { Component } from 'react'
import NavBarrr from './NavBarrr'
import './allMovie.css'
class AllMovies extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allMovies: [],

        }
    }


    getAllMovies = (e) => {
        axios.get('http://localhost:3500/film')
            .then(response => {
                console.log(response);
                this.setState({
                    allMovies: response.data.forms
                })
            })
    }
    render() {
        return (
            <div>
                <NavBarrr></NavBarrr>
                <div className="contain">
                    <button className='btn' onClick={this.getAllMovies} >load all Movies</button>
                </div>
                <div className='contain'>
                    <table className='table table-striped' id='tbl'>
                        <thead>
                            <tr>
                                <th>Movie</th>
                                <th>Rating</th>
                                <th>Director</th>
                                <th>Box Office Collection</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.allMovies.map((m, i) => {
                                    return (
                                        <tr key={m.rating}>
                                            <td >{m.name}</td>
                                            <td >{m.rating}</td>
                                            <td>{m.director}</td>
                                            <td>{m.boxOfficeCollection}</td>

                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default AllMovies
