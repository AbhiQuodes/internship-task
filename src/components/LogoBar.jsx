import React from 'react';
import './LogoBar.css';
import amazonIcon from '../assets/amazon.svg';
import hubspotIcon from '../assets/hubspot.svg';
import notionIcon from '../assets/notion.svg';
import netflixIcon from '../assets/netflix.svg';
import zoomIcon from '../assets/zoom.svg';
import dribbleIcon from '../assets/dribbble.svg';

const LogoBar = () => {
  const logos = [
    amazonIcon,
    dribbleIcon,
    hubspotIcon,
    notionIcon,
    netflixIcon,
    zoomIcon
  ];

  return (
    <div className='logo-bar-wrapper'>
      <div className='logo-bar'>
        {[...logos, ...logos].map((logo, index) => (
          <img key={index} src={logo} alt="company-logo" />
        ))}
      </div>
    </div>
  );
};

export default LogoBar;
