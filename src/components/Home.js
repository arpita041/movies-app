import React, { Component } from "react";
// import { Carousel} from 'react-bootstrap';
import NavBarrr from "./NavBarrr";
import Carousel from "react-grid-carousel";
import "../css/home.css";
class Home extends Component {
  render() {
    return (
      <div>
        <NavBarrr></NavBarrr>
        <div>
          <br></br>
          <div className="movie">
            {/* <Carousel slide={false} fade={false}>
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
                        </Carousel> */}
            <Carousel showDots cols={1} rows={1} gap={10} loop>
              <Carousel.Item>
                <img width="100%" src="../288732.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width="100%" src="../329583.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img width="100%" src="../790933.jpg" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
