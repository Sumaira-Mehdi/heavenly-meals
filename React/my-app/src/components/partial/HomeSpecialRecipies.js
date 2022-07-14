import React from 'react';
import { Link } from 'react-router-dom';
import '../main/completeProjectStyling.css';

function HomeSpecialRecipies() {
  return (
    
        <section className="row special">
				<section className="container">
					<div className="s-r">
						<div className="s-recipe">
							<div className="heading">
								<h2 className="about_us">Special Recipes</h2>
								<h3 className="about_us_heading">TASTE OF PRECIOUS</h3>
							</div>
							<div className="s-para">
								<p>Heavenly Meals is serving more then 100 cuisines along with appetizer to main course and drinks to desserts and cocktails.</p>
								<p>Our speciality, for appetizers Frito Misto, Tiger Prawn, Tempura, Artichoke Dip are quite notable. As for soups, Minestrone Soup is actually worthy. For main course, Moroccan Chicken, Mexican Chicken, Sea Steak, Parme San Chicken, Mediterranean Fish super yummicious with along side of desserts and cocktails list as kiwi mojito and Melting Chocolate Ball really are tongue tantalizing tasty. Lots of other items as well waiting for your compliment.</p>
							</div>
							<Link to="/" >
                                <button type="button" className="button_3">
                                         Click Me.
                                </button>
                            </Link>
						</div>
						<div className="s-image">
							<img src="images/s-image.png" alt="special recipe"/>
						</div>
					</div>
				</section>
				
				
				
			</section>
      
   
  )
}

export default HomeSpecialRecipies
