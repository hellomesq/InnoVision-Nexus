import React from 'react';
import { useNavigate } from 'react-router-dom';
import './forms.css';

const CadAuto: React.FC = () => {
  const navigate = useNavigate();
  const handleRedirect = (path: string) => {
    navigate(path);
  };

  return (
    <div className="centralizacao">
      <div className="container">
        <div className="form-container sign-in-container active">
          <form className='forms-cad'>
            <input type="text" className='input-cad' placeholder="Modelo*" />
            <input type="text" className='input-cad' placeholder="Chassi" />
            <input type="text" className='input-cad' placeholder="Placa" />
            <input type="text" className='input-cad' placeholder="Coloração" />
            <button
              className="btn-primary"
              type="button"
              onClick={() => handleRedirect('/perfil')}
            >
              Cadastrar
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 className='title-forms'>Cadastre seu automóvel</h1>
              <p className='descricao-forms'>E tenha um diagnóstico eficiente!</p>
              <button
                className="second-btn"
                onClick={() => handleRedirect('/perfil')}
              >
                Agora não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadAuto;
