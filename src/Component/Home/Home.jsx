import React, { useEffect } from 'react'
import '../Home/Home.scss'
import HomeSection from '../HomeSectinon/HomeSection'
import Catagory from '../Catagory/Catagory'
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import ImageSlider from '../ImageSlider/ImageSlider'

export default function Home() {

  useEffect(() => {
    // Check if the URL contains the #catagory fragment identifier
    if (window.location.hash === '#catagory') {
      // Scroll to the #catagory section
      const catagoryElement = document.getElementById('catagory');
      if (catagoryElement) {
        catagoryElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className='home-container'>
      <HomeSection />
      <WhatWeDo />
      <ImageSlider />
      <Catagory id="catagory" />
    </div>
  )
}
