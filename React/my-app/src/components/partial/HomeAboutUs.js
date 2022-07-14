import React from 'react';
import { Link } from 'react-router-dom';
import '../main/completeProjectStyling.css';

const HomeAboutUs = () => {
  return (
    <div>
      	<section className="row row-about">
				<section className="container">
					<div className="about">
						<div className="frames">
							<div className="frame">
								<img src="images/frame1.png" alt="frame1"/>
							</div>
							<div className="frame">
								<img src="images/frame2.png" alt="frame2"/>
							</div>
						</div>
						<div className="about-text">
							<div className="heading">
								<h2 className="about_us">About us</h2>
								<h3 className="about_us_heading">WE ARE TASTY</h3>
							</div>
							<div className="para">
								<p>Heavenly Meals is a must visit place if you are a real foodie and would like to try a super fine dining experience.</p>
								<p>Heavenly Meals Restaurant Karachi provides its customers with fine ambience, good service along with some exotic Mediterranean cuisine. For a luxurious fine-dining experience Id say the meals are fairly priced ranging from Rs. 500 to Rs. 1500. With portions satisfying and quality of taste not being compromised, this restaurant should be on your to-do list, perhaps a candle light dinner for Valentines Day enthusiasts?</p>
							</div>
							
							<Link to="/" >
                                <button type="button" className="button_2">
                                         Click Me.
                                </button>
                            </Link>
							
						</div>
					</div>
				</section>
			</section>
    </div>
  )
}

export default HomeAboutUs
