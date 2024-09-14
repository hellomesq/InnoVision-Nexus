// HomePage.tsx
import React from 'react';
import Banner from './Banner';
import AboutUs from './AboutUs';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
    </div>
  );
}

export default LandingPage;
