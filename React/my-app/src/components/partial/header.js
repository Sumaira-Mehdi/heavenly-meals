import React from 'react'
import "./header.css";
import {  NavLink } from 'react-router-dom';
function Header() {
    return (
        <div>
            <div className="topbar">
                <div className="container">
                    <div className="upper">
                        <div className="logo_className">
                            <div className="logo">
                                <img src="images/Photo_1634034117676.png" className="l" alt="logo" />
                            </div>
                        </div>
                        <div className="top">
                            <div className="top-order">
                                <p><span><img src="images/times.png" alt="time" /></span>     Order Foods 24/7</p>
                            </div>
                            <div className="top-phone">
                                <p><span><img src="images/phone.png" alt="call" /></span><a href="tel:06198765432">     061 9876 5432</a></p>
                            </div>
                            <div className="social">

                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="s-links">
                                    <img src="images/facebook.png" alt="facebook" /></a>
                                <a href="https://developers.google.com/web/showcase/2015/googleplus" target="_blank" rel="noreferrer">
                                    <img src="images/googleplus.png" alt="googleplus" /></a>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    <img src="images/twitter.png" alt="twitter" /></a>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <img src="images/linkedin.png" alt="linkedin" /></a>
                                <a href="https://www.pinterest.com" target="_blank" rel="noreferrer">
                                    <img src="images/pinterest.png" alt="pinterest" /></a>
                                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                                    <img src="images/youtube.png" alt="whatsapp" /></a>
                                <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
                                    <img src="images/whatsapp.png" alt="whatsapp" /></a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                    <img src="images/instagram.png" alt="instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" nav-row">
                <div className="container">

                    <nav className="nav-menu">
                        <ul>
                            <li><NavLink to="/login" >Log In</NavLink></li>
                            <li><NavLink to="/">Register</NavLink></li>
                            <li><NavLink to="/home" >Home</NavLink></li>
                            <li><NavLink to="/menu" >Menu</NavLink></li>
                            <li><NavLink to="/faq">FAQ</NavLink></li>
                            <li><NavLink to="/gallery" >Gallery</NavLink></li>
                            <li><NavLink to="/reviews">Reviews</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default Header
