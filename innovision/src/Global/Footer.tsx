import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="conteudo__footer">
      <img src="/imagens/InnoVision Nexus (Branca).png" alt="Ícone InnoVision Nexus" />
      <li className="integrantes__footer">
      <Link to="/integrantes">Conheça os integrantes da equipe</Link>
      </li>
    </div>
  </footer>
);

export default Footer;
