import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forms.css';

const CadAuto: React.FC = () => {
  const [model, setModel] = useState('');
  const [chassis, setChassis] = useState(''); // Este campo ainda existe, mas não é obrigatório
  const [plate, setPlate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage('');

    const userId = localStorage.getItem('user'); // Obtém o ID do usuário como string

    if (!userId) {
      alert('Você precisa estar logado para cadastrar um automóvel.');
      return;
    }

    const carData = {
      modelo: model,         // Renomeado para 'modelo'
      placa: plate,         // Renomeado para 'placa'
      chassi: chassis || null,  // Chassi pode ser vazio, então usamos null se não fornecido
      usuario_id: userId,   // Incluindo o ID do usuário
    };

    try {
      const response = await axios.post('http://localhost:5000/api/automoveis', carData);
      if (response.status === 200) {
        console.log('Automóvel cadastrado com sucesso!');
        navigate('/perfil');
      } else {
        setErrorMessage("Ocorreu um erro ao cadastrar o automóvel.");
      }
    } catch (error) {
      console.error('Erro ao cadastrar automóvel:', error);
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
              placeholder="Chassi (opcional)"
              value={chassis}
              onChange={(e) => setChassis(e.target.value)}
            />
            <input
              type="text"
              className='input-cad'
              placeholder="Placa*"
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
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
