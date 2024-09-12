import React from 'react';
import './home.css'; // Importando o arquivo CSS externo

const AboutUs: React.FC = () => {
  return (
    <div className="container">
      <div className="half-circle">
        <div className="card-wrapper">
          <div className="card">
            <h2>TECNOLOGIA E INOVAÇÃO</h2>
            <p>
              Integrar a inteligência artificial em nossos serviços para oferecer uma experiência ágil e personalizada aos usuários.
            </p>
          </div>
          <div className="position-icon">
            <i className="fas fa-robot"></i>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <h2>SOLUÇÕES E SERVIÇOS</h2>
            <p>
              Oferecer uma ampla variedade de serviços relacionados à reparação automotiva, em alinhamento com a Porto Seguro.
            </p>
          </div>
          <div className="position-icon">
            <i className="fas fa-lightbulb"></i>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <h2>EXPERIÊNCIA DO USUÁRIO</h2>
            <p>
              Garantir que cada elemento seja cuidadosamente planejado para proporcionar uma navegação fluida e eficiente.
            </p>
          </div>
          <div className="position-icon">
            <i className="fas fa-user"></i>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <h2>PARCERIAS ESTRATÉGICAS</h2>
            <p>
              Estabelecer parcerias que vão além de simples associações, oferecendo recursos especializados e promovendo a confiança.
            </p>
          </div>
          <div className="position-icon">
            <i className="fas fa-handshake"></i>
          </div>
        </div>
      </div>

      <div className="container-right">
        <h1>Qual é a nossa missão?</h1>
      </div>
    </div>
  );
};

export default AboutUs;
