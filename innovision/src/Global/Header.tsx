import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav id="navbar">
        <a href="#">
          <img id="logo" src="/imagens/InnoVision Nexus (Preta).png" alt="InnoVision Nexus logo" />
        </a>
        <ul id="nav_list">
          <li className="nav_item"><a href="#">Home</a></li>
          <li className="nav_item active"><a href="#">Login</a></li>
          <li className="nav_item"><a href="#">Serviços</a></li>
          <li className="nav_item"><a href="#">Sobre nós</a></li>
        </ul>
        <button id="mobile_btn" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </nav>
      <div id="mobile_menu" className={isMobileMenuOpen ? 'active' : ''}>
        <ul id="mobile_nav_list">
          <li className="nav_item active"><a href="#">Home</a></li>
          <li className="nav_item"><a href="#">Login</a></li>
          <li className="nav_item"><a href="#">Serviços</a></li>
          <li className="nav_item"><a href="#">Sobre nós</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
