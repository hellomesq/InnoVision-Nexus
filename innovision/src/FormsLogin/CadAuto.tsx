import React from 'react';
import './forms.css';

const CadAuto: React.FC = () => {
  return (
    <div className="centralizacao">
      <div className="container">
        <div className="form-container sign-in-container active">
          <form>
            <input type="text" placeholder="Modelo*" />
            <input type="text" placeholder="Chassi" />
            <input type="text" placeholder="Placa" />
            <input type="text" placeholder="Coloração" />
            <button className="btn-primary" type="button">Cadastrar</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 className='title-forms'>Cadastre seu automóvel</h1>
              <p className='descricao-forms'>E tenha um diagnóstico eficiente!</p>
              <button className="second-btn">Agora não</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadAuto;
