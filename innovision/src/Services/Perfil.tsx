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
      const userId = JSON.parse(localStorage.getItem('user') || '{}');
      fetchUserData(userId);
    }
  }, [navigate]);

  const fetchUserData = async (userId: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/user/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data);  // Armazenar dados do usuário
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
          <li className="perfil"><a href="#">Perfil</a></li>
          <li><Link to="/alterarperfil">Editar Perfil</Link></li>
          <li><Link to="/chat">Chat</Link></li>
          <li><Link to="/">Sair</Link></li>
        </ul>
      </nav>
      <div className="main-container">
        <div className='content-perfil'>
          <div className='container-title'>
            <div className='title-perfil'>
              <p>Veja o registro das últimas manutenções do seu carro</p>
            </div>
          </div>
          {/* O restante do seu componente aqui */}
        </div>
      </div>
    </div>
  );
};

export default Perfil;
