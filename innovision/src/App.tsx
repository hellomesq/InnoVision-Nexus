import React from 'react';

import Header from './Global/Header';
import Banner from './LandingPage/Banner';
import Footer from './Global/Footer';

import '@fortawesome/fontawesome-free/css/all.min.css';

const App: React.FC = () => {
  return (
  <>
    <Header />
      <Banner />
      <Footer />
   
  </>
    
  );
}

export default App;
