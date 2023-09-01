import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faCog, faBell } from '@fortawesome/free-solid-svg-icons'; // Import the icons
import '../styles/overview.css'; // Import the CSS file

const Overview = () => {
  return (
    <div className="overview-container">
      <div className='overview-subclass'>
        <div className='subclass-main-text'>Search Your Configuration</div>
        <div className='overview-search'>
          <div className='icon-name'>
            <img src="/images/location.png" alt="Search" />
            <div className='text'>
              <span className='main-text'>Location</span>
              <span className='sub-text'>South Mumbai</span>
            </div>
         
          
            <img src="/images/home.png" alt="User" />
            <div className='text'>
              <span className='main-text'>Property Type</span>
              <span className='sub-text'>2 BHK</span>
            </div>
         
        
            <img src="/images/rupee.png" alt="User" />
            <div className='text'>
              <span className='main-text'>Budget</span>
              <span className='sub-text'>90 L - 1.5 Cr</span>
           
          </div>
        
          <div className="overlay-image">
                <img src="/images/search_out.png" alt="User" />
            </div>
            {/* If you want to add more images or elements here, add them within this div */}
          </div>
        </div>
      </div>
      <div className="overview-content">
        <div className="image-container">
          <img src="/images/detail_1.png" alt="Overview" />
        </div>
        <div className="text-container">
            <span className='content-span'>MUMBAI</span>
          <h2 className="title">OUR APARTMENTS</h2>
          <p className="paragraph">
          Presenting Piramal Aranya, a high rise gated sanctuary that offers luxuriant 2, 3 & 4 BHK homes inclusive of advanced wellness technologies, dual-aspect blue and green views and a world-class lifestyle crafted alongside the world’s leading partners at Rani Baug, Byculla, South Mumbai.
          </p>
        </div>
        
      </div>
      <div className="overview-content">
        
      <div className="text-container">
  <span className='content-span'>2 BED EXCLUSIVE RESIDENCES</span>
  <h2 className="title">2BHK - EAST WING</h2>
  <ul className="bullet-list">
    <li>All bedrooms with en-suite bathrooms</li>
    <li>Apartments with harbour views</li>
    <li>Master bedroom with corner windows offering panoramic views</li>
    <li>All shafts on the external face</li>
    <li>Kitchen with dry balcony</li>
    <li>Ease of combining apartments to create exclusive wing apartment with expansive living & dining area</li>
  </ul>
</div>

        <div className="image-container">
          <img src="/images/detail_2.png" alt="Overview" />
        </div>

        
        
      </div>
      <div className="upper-border-box">
        <div className='icon-name-box'>
            <div className='text'>
              <span className='main-text-box'>50+</span>
              <span className='sub-text-box'>AMENITIES</span>
            </div>
         
          
            <div className='text'>
              <span className='main-text-box'>250</span>
              <span className='sub-text-box'>APARTMENTS</span>
            </div>
         
        
            <div className='text'>
              <span className='main-text-box'>9,290</span>
              <span className='sub-text-box'>RECEREATIONAL SPACE</span>
           
          </div>
          <div className='text'>
              <span className='main-text-box'>1,200</span>
              <span className='sub-text-box'>SLOT CAR PARKING</span>
           
          </div>

        </div>
      </div>
    </div>
  );
};

export default Overview;
