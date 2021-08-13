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
