import React from 'react';
import travel1 from '../assets/travel1.jpg';
import travel2 from '../assets/travel2.jpg';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Travel & Tour</h1>
      <div>
        <img src={travel1} alt="Travel Destination 1" />
        <img src={travel2} alt="Travel Destination 2" />
      </div>
    </div>
  );
};

export default Home;
