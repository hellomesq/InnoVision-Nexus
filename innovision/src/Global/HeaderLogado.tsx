import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './global.css'

const HeaderLogado: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav id="navbar">
        <Link to="/">
          <img id="logo" src="/imagens/InnoVision Nexus (Preta).png" alt="InnoVision Nexus logo" />
        </Link>
        <ul id="nav_list">
          <li className="nav_item"><Link to="/">Home</Link></li>
          <li className="nav_item"><Link to="/login">Perfil</Link></li>
          <li className="nav_item"><Link to="/services">Serviços</Link></li>
        </ul>
        <button id="mobile_btn" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </nav>
      <div id="mobile_menu" className={isMobileMenuOpen ? 'active' : ''}>
        <ul id="mobile_nav_list">
          <li className="nav_item"><Link to="/">Home</Link></li>
          <li className="nav_item"><Link to="/login">Perfil</Link></li>
          <li className="nav_item"><Link to="/services">Serviços</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderLogado;
