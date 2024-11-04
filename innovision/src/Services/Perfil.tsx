import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './services.css';

interface User {
  id: number;
  nome: string;
  email: string;
}

const Perfil: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/');
    } else {
      const userId = localStorage.getItem('user'); // Corrigido
      fetchUserData(userId);
    }
  }, [navigate]);

  const fetchUserData = async (userId: string | null) => {
    if (!userId) return; // Adiciona verificação para evitar erro

    try {
      const response = await fetch(`http://localhost:5000/api/user/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        alert('Erro ao buscar dados do usuário.');
      }
    } catch (error) {
      alert('Erro de conexão com o servidor. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="dashboard">
      <button className="sidebar-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <i className="fas fa-bars"></i>
      </button>
      <nav className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <h2>Olá</h2>
          <p>{user ? `@${user.nome}` : 'Usuário'}</p>
        </div>
        <ul className="sidebar-menu">
          <li className="perfil"><Link to="#">Perfil</Link></li>
          <li><Link to="/alterarperfil">Editar Perfil</Link></li>
          <li><Link to="/chat">Chat</Link></li>
          <li><Link to="/cad-auto">Cadastrar Automóvel</Link></li>
          <li><Link to="/">Sair</Link></li>
        </ul>
      </nav>
      <div className="main-container">
        <div className='content-perfil'>
          <div className='container-title'>
            {/* Aqui você pode adicionar mais conteúdo ao perfil */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
