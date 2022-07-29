import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../main/completeProjectStyling.css';

const Main_background = () => {
    return (
        <div className='carosel'>
            <Carousel className="flexslider">
                <Carousel.Item className='slides'>
                    <img className="slider-image d-block w-100" src="images/slider1_adobe_express.jpeg" alt="slider" />

                </Carousel.Item>
                <Carousel.Item>
                    <img className="slider-image d-block w-100" src="images/slider2_adobe_express.jpeg" alt="slider" />

 
                </Carousel.Item>
                <Carousel.Item>
                    <img className="slider-image d-block w-100" src="images/slider3_adobe_express.jpeg" alt="slider" />


                </Carousel.Item>
                <Carousel.Item>
                    <img className="slider-image d-block w-100" src="images/slider4_adobe_express.jpeg" alt="slider" />


                </Carousel.Item>
            </Carousel>
            <div className="main-bbox">
							<div className="container mmain">
								<h2>Welcome to</h2>
								<h1>Heavenly Meals</h1>
							</div>
						</div>
        </div>
    )
}

export default Main_background
