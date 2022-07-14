import React from 'react';
import Footer from '../partial/Footer';
import MainBackground from '../partial/main_background';
import HomeAboutUs from '../partial/HomeAboutUs';
import HomeSpecialRecipies from '../partial/HomeSpecialRecipies'

import Copyright from "../partial/copyright";

const Home = () => {
  return (
    <>
    <div>
     
      <MainBackground/>
      <HomeAboutUs/>
      <HomeSpecialRecipies/>
      <Footer/>
     
    </div>
    </>
  )
}

export default Home
