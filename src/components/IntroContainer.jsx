import React from 'react'
import './IntroContainer.css'
import introBanner from '../assets/introIllustration.svg';
const IntroContainer = () => {
  return (
    <section>
      <div className="box">
        <h1>Navigating the digital landscape for success</h1>
        <p>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button>Book a consultation</button>
      </div>
      <div className="box">
        <img src={introBanner} alt='intro-img'></img>
      </div>
    </section>
  );
}

export default IntroContainer