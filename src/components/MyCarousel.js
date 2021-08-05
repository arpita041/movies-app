import React from 'react'
import '../css/MyCarousel.scss'
import NavBarrr from './NavBarrr'
function MyCarousel() {
    return (
        <div>
            <NavBarrr></NavBarrr>
            <div className='content content--margin'>
                <div class="carousel" aria-label="Gallery">
                    <ol class="carousel__viewport">
                        <li id="carousel__slide1"
                            // tabindex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper">
                                <img width='100%' height='100%' src="./288732.jpg" alt="" />
                            </div>
                            <a href="#carousel__slide4"
                                class="carousel__prev">Go to last slide</a>
                            <a href="#carousel__slide2"
                                class="carousel__next">Go to next slide</a>

                        </li>
                        <li id="carousel__slide2"
                            // tabindex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper">
                                <img width='100%' height='100%' src="./329583.jpg" alt="" />
                            </div>
                            <a href="#carousel__slide1"
                                class="carousel__prev">Go to previous slide</a>
                            <a href="#carousel__slide3"
                                class="carousel__next">Go to next slide</a>
                        </li>
                        <li id="carousel__slide3"
                            // tabindex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper">
                                <img width='100%' height='100%' src="./790933.jpg" alt="" />

                            </div>
                            <a href="#carousel__slide2"
                                class="carousel__prev">Go to previous slide</a>
                            <a href="#carousel__slide4"
                                class="carousel__next">Go to next slide</a>
                        </li>
                        {/* <li id="carousel__slide4"
                            // tabindex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper">
                                <img width='100%' src="http://www.themost10.com/wp-content/uploads/2012/06/Movie-Poster-Cliches-7.jpg" alt="" />

                            </div>
                            <a href="#carousel__slide3"
                                class="carousel__prev">Go to previous slide</a>
                            <a href="#carousel__slide1"
                                class="carousel__next">Go to first slide</a>
                        </li> */}
                    </ol>
                    <aside class="carousel__navigation">
                    <ol class="carousel__navigation-list">
                        <li class="carousel__navigation-item">
                            <a href="#carousel__slide1"
                                class="carousel__navigation-button">Go to slide 1</a>
                        </li>
                        <li class="carousel__navigation-item">
                            <a href="#carousel__slide2"
                                class="carousel__navigation-button">Go to slide 2</a>
                        </li>
                        <li class="carousel__navigation-item">
                            <a href="#carousel__slide3"
                                class="carousel__navigation-button">Go to slide 3</a>
                        </li>
                    </ol>
                </aside>
                </div>
            </div>

        </div>
    )
}

export default MyCarousel
