import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Global/Header';
import Footer from './Global/Footer';
import AuthPage from './FormsLogin/AuthPage';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/sign-up" element={<AuthPage />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
