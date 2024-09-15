import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forms.css';

const CadAuto: React.FC = () => {
  const [model, setModel] = useState('');
  const [chassis, setChassis] = useState('');
  const [plate, setPlate] = useState('');
  const [color, setColor] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const carData = { model, chassis, plate, color };
    localStorage.setItem('car', JSON.stringify(carData));
    navigate('/perfil'); // Navega para a página de perfil
  };

  return (
    <div className="centralizacao">
      <div className="container">
        <div className="form-container sign-in-container active">
          <form className='forms-cad'>
            <input
              type="text"
              className='input-cad'
              placeholder="Modelo*"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
            <input
              type="text"
              className='input-cad'
              placeholder="Chassi"
              value={chassis}
              onChange={(e) => setChassis(e.target.value)}
            />
            <input
              type="text"
              className='input-cad'
              placeholder="Placa"
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
            />
            <input
              type="text"
              className='input-cad'
              placeholder="Coloração"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <button
              className="btn-primary"
              type="button"
              onClick={handleRegister}
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
                onClick={() => navigate('/perfil')}
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
