import React from 'react'
import { Navbar } from 'react-bootstrap'
import '../css/MyCarousel.scss'
import NavBar from './NavBar'
function MyCarousel() {
    return (
        <div>
            <NavBar></NavBar>
            <div className='content content--margin'>
                <div className="carousel" aria-label="Gallery">
                    <ol className="carousel__viewport">
                        <li id="carousel__slide1"
                            className="carousel__slide">
                            <div className="carousel__snapper">
                                <img width='100%' height='100%' src="./288732.jpg" alt="" />
                            </div>
                            <a href="#carousel__slide4"
                                className="carousel__prev">Go to last slide</a>
                            <a href="#carousel__slide2"
                                className="carousel__next">Go to next slide</a>

                        </li>
                        <li id="carousel__slide2"
                            className="carousel__slide">
                            <div className="carousel__snapper">
                                <img width='100%' height='100%' src="./329583.jpg" alt="" />
                            </div>
                            <a href="#carousel__slide1"
                                className="carousel__prev">Go to previous slide</a>
                            <a href="#carousel__slide3"
                                className="carousel__next">Go to next slide</a>
                        </li>
                        <li id="carousel__slide3"
                            className="carousel__slide">
                            <div className="carousel__snapper">
                                <img width='100%' height='100%' src="./790933.jpg" alt="" />

                            </div>
                            <a href="#carousel__slide2"
                                className="carousel__prev">Go to previous slide</a>
                            <a href="#carousel__slide4"
                                className="carousel__next">Go to next slide</a>
                        </li>
                    </ol>
                    <aside className="carousel__navigation">
                        <ol className="carousel__navigation-list">
                            <li className="carousel__navigation-item">
                                <a href="#carousel__slide1"
                                    className="carousel__navigation-button">Go to slide 1</a>
                            </li>
                            <li className="carousel__navigation-item">
                                <a href="#carousel__slide2"
                                    className="carousel__navigation-button">Go to slide 2</a>
                            </li>
                            <li className="carousel__navigation-item">
                                <a href="#carousel__slide3"
                                    className="carousel__navigation-button">Go to slide 3</a>
                            </li>
                        </ol>
                    </aside>
                </div>
            </div>

        </div>
    )
}

export default MyCarousel
