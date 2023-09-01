import React from 'react';
import '../styles/home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <img
        src={process.env.PUBLIC_URL + '/images/main.png'} // Replace with actual image path
        alt="Home"
        className="home-image"
      />
      <div className="overlay">
      <img
        src={process.env.PUBLIC_URL + '/images/nav_Bar_.png'} // Replace with actual image path
        alt="Home"
        className="nav_bar-image"
      /> 
      </div>
      <div>
      <img
        src={process.env.PUBLIC_URL + '/images/landing.png'} // Replace with actual image path
        alt="Home"
        className="landing-image"
      />
      </div>
    </div>
  );
};

export default Home;
