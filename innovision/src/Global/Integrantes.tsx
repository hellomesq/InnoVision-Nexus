import React from 'react';
import './global.css';

const Integrantes: React.FC = () => {
  return (
    <>
      <main>
        <div className="title__int">
          <h2>
            CONHEÇA OS INTEGRANTES DA EQUIPE <br />
            <a href="https://github.com/hellomesq/InnoVisionNexus">
              <i className="fa-brands fa-github"></i>
              github.com/hellomesq/InnoVisionNexus
            </a>
          </h2>
        </div>
        <div className="alinhar">
          <section className="container-profile">
            <div className="profile">
              <div className="profile-column">
                <img loading="lazy" src="../imagens/gustavo.png" alt="Profile image of Gustavo Lopes Santos da Silva" className="profile-image" />
                <div className="details">
                  <p className="name">Gustavo Lopes Santos da Silva</p>
                  <p className="rm">RM: 556859</p>
                  <p><a href="https://github.com/GuLopes14" className="github-link">github.com/GuLopes14</a></p>
                </div>
              </div>
              <div className="profile-column">
                <img loading="lazy" src="../imagens/heloisa.png" alt="Profile image of Heloisa Alves de Mesquita" className="profile-image" />
                <div className="details">
                  <p className="name">Heloisa Alves de Mesquita</p>
                  <p className="rm">RM: 559145</p>
                  <p><a href="https://github.com/hellomesq" className="github-link">github.com/hellomesq</a></p>
                </div>
              </div>
              <div className="profile-column">
                <img loading="lazy" src="../imagens/joao.png" alt="Profile image of João Gabriel Silva Oliveira" className="profile-image" />
                <div className="details">
                  <p className="name">João Gabriel Silva Oliveira</p>
                  <p className="rm">RM: 555308</p>
                  <p><a href="https://github.com/JoaoGabrielSilvaOliveiraa" className="github-link">github.com/JoaoGabrielSilvaOliveiraa</a></p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Integrantes;
