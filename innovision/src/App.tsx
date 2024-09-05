// src/App.tsx
import React from 'react';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import './styles.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
