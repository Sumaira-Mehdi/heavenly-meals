import React from 'react';
import './Footer.css';



    const Footer = () => {
        return (
        <>
            <div className='main_container'>
            <footer className="row fb">
            <div className="plate1">
              <img src="images/feedbackimg_02.png" alt="plate"/>
            </div>
            <section className="container">
              <div className="footer">
                <div className="location">
                  <p className="easy">Take it easy with location</p>
                  <div className="address">
                    <div className="locate">
                      <p>112-Legere ancillae vix ne.</p>,
                      <p>Te elit putent propriae eum,</p>,
                      <p>aliquip nominati</p>,
                      <br></br>
                      <p>phone: 00 000 000</p>,
                      <p>Email: support@templatemela.com</p>,
                    </div>
                  
                    <div className="social2">
                      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="s-links">
                      <img src="images/facebook.png" alt="facebook"/></a>
                      <a href="https://developers.google.com/web/showcase/2015/googleplus" target="_blank" rel="noreferrer">
                      <img src="images/googleplus.png" alt="googleplus"/></a>
                      <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                      <img src="images/twitter.png" alt="twitter"/></a>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                      <img src="images/linkedin.png" alt="linkedin"/></a>
                      <a href="https://www.pinterest.com" target="_blank" rel="noreferrer">
                      <img src="images/pinterest.png" alt="pinterest"/></a>
                      <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                      <img src="images/youtube.png" alt="whatsapp"/></a>
                      <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
                      <img src="images/whatsapp.png" alt="whatsapp"/></a>
                      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                      <img src="images/instagram.png" alt="instagram"/></a>
                    </div>
                  </div>
              </div>
              
              <div className="hours">
                <p className="easy">Working Hours</p>
                <div className="time">
                  <p> Monday To Friday</p>
                  <br/>
                  <p>8:00am to 10:00pm(Breakfast)</p>
                  <p>11:00am to 10:00pm(Lunch/Diner)</p>
                  <br/>
                  <p>Saturday and Sunday</p>
                  <br/>
                  <p>10:00am to 11:00pm(Brunch)</p>
                  <p>11:00am to 12:00pm(Lunch/Dinner)</p>
                </div>
              </div>
              
              <div className="form">
                <p className="easy">Feedback Form</p>
                <form id="basic-form">
                  <p>
                    <input id="name" name="name" minLength="3" type="text" placeholder="Name"/>
                  </p>
                  <p>
                    <input id="email" type="email" name="email" placeholder="Email"/>
                  </p>
                  <p>
                    <input id="txtTel" type="tel" name="txtTel" placeholder="Phone"/>
                  </p>
                  <p>
                    <textarea id="msg" name="txtmsg" placeholder="Message" rows="5" cols="33"></textarea>
                  </p>
                  <p className="save">
                    <input className="submit" type="submit" value="SUBMIT"/>
                  </p>
                </form>
              </div>
              
            </div>
            </section>
            <div className="plate2">
              <img src="images/image-1copy.png" alt="plate"/>
            </div>
            <section className="copyright">
             <p>Copyright © 2021 all rights belongs to Misbah, Sumaira and Tehniat.</p>
            </section>
          </footer>
          </div>
      </>
        );
      }
      
      
      
  


export default Footer
