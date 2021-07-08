import React, { Component } from 'react'
import { Carousel} from 'react-bootstrap';
import NavBarrr from './NavBarrr';
 class Home extends Component {
    render() {
        return (
            <div>
                <NavBarrr></NavBarrr>
                <div>
                    <br></br>
                    <div className='container'>
                        <Carousel slide={false} fade={false}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422"
                                    alt="First slide"
                                />
                            
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://www.teahub.io/photos/full/67-670663_hollywood-movie-poster-hd.jpg"
                                    alt="Second slide"
                                />

                            
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://wallpapercave.com/wp/wp7346847.jpg"
                                    alt="Third slide"
                                />

                            
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
