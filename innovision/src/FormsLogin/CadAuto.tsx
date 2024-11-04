import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './forms.css';

const CadAuto: React.FC = () => {
  const [model, setModel] = useState('');
  const [chassis, setChassis] = useState('');
  const [plate, setPlate] = useState('');
  const [color, setColor] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      alert('Você precisa estar logado para cadastrar um automóvel.');
      navigate('/login');
    }
  }, [navigate]);

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage('');

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      alert('Você precisa estar logado para cadastrar um automóvel.');
      return;
    }

    const carData = {
      model,
      chassis,
      plate,
      color,
    };

    try {
      const response = await fetch('http://localhost:5000/api/automoveis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(carData),
      });

      if (response.ok) {
        console.log('Automóvel cadastrado com sucesso!');
        // Você pode redirecionar ou notificar o sucesso aqui
        navigate('/perfil'); // Redireciona para o perfil após cadastro
      } else {
        const errorData = await response.json();
        console.error('Erro ao cadastrar automóvel:', errorData);
        setErrorMessage("Ocorreu um erro ao cadastrar o automóvel.");
      }
    } catch (error) {
      console.error("Erro de rede:", error);
      setErrorMessage("Erro de conexão. Por favor, verifique sua internet.");
    }
  };

  return (
    <div className="centralizacao">
      <div className="container">
        <div className="form-container sign-in-container active">
          <form className='forms-cad' onSubmit={handleRegister}>
            <input
              type="text"
              className='input-cad'
              placeholder="Modelo*"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
            />
            <input
              type="text"
              className='input-cad'
              placeholder="Chassi*"
              value={chassis}
              onChange={(e) => setChassis(e.target.value)}
              required
            />
            <input
              type="text"
              className='input-cad'
              placeholder="Placa*"
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
              required
            />
            <input
              type="text"
              className='input-cad'
              placeholder="Coloração*"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
            />
            <button
              className="btn-primary"
              type="submit"
            >
              Cadastrar
            </button>
          </form>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
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
