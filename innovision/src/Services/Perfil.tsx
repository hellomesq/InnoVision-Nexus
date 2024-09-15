import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './services.css';

interface Repair {
  date: string;
  problem: string;
  cost: string;
}

const repairs: Repair[] = [
  { date: '2024-09-10', problem: 'Troca de óleo', cost: 'R$ 150,00' },
  { date: '2024-09-05', problem: 'Substituição de pneus', cost: 'R$ 400,00' },
  { date: '2024-09-01', problem: 'Reparação de freios', cost: 'R$ 250,00' },
];

const Perfil: React.FC = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [dateFilter, setDateFilter] = useState('');
  const [problemFilter, setProblemFilter] = useState('');
  const [user, setUser] = useState<{ username: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/');
    } else {
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      setUser(userData);
    }

    // Aqui vamos forçar a verificação no localStorage a cada vez que o componente for renderizado
    const intervalId = setInterval(() => {
      const updatedUser = JSON.parse(localStorage.getItem('user') || '{}');
      setUser(updatedUser);
    }, 1000); // Verifica a cada 1 segundo, pode ajustar esse tempo

    return () => clearInterval(intervalId);
  }, [navigate]);

  const filteredRepairs = repairs.filter(repair => {
    const matchesDate = !dateFilter || repair.date === dateFilter;
    const matchesProblem = !problemFilter || repair.problem === problemFilter;
    return matchesDate && matchesProblem;
  });


  return (
    <div className="dashboard">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h2>Olá</h2>
          <p>@{user?.username || 'Usuário'}</p>
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
          <div className='container-table'>
            <div className="filter-container">
              <h1>Histórico de manutenção</h1>
              <button type="button" className="filter-btn" onClick={() => setFilterVisible(!filterVisible)}>
                <i className="fa-solid fa-filter"></i>
              </button>
            </div>
            {filterVisible && (
              <div id="filter-form-container">
                <form id="filter-form">
                  <label htmlFor="filter-date">Data:</label>
                  <input
                    type="date"
                    id="filter-date"
                    name="date"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                  />
                  <label htmlFor="filter-problem">Manutenção:</label>
                  <select
                    id="filter-problem"
                    name="problem"
                    value={problemFilter}
                    onChange={(e) => setProblemFilter(e.target.value)}
                  >
                    <option value="">Todos</option>
                    <option value="Troca de óleo">Troca de óleo</option>
                    <option value="Substituição de pneus">Substituição de pneus</option>
                    <option value="Reparação de freios">Reparação de freios</option>
                    <option value="Bateria">Bateria</option>
                    <option value="Motor">Motor</option>
                  </select>
                  <button type="button" onClick={() => setFilterVisible(false)}>Aplicar</button>
                </form>
              </div>
            )}
            <div className="repair-cards">
              {filteredRepairs.map((repair, index) => (
                <div className="repair-card" key={index}>
                  <h2>Ford Fiesta</h2>
                  <p><strong>Data:</strong> {repair.date}</p>
                  <p><strong>Manutenção:</strong> {repair.problem}</p>
                  <p><strong>Custo:</strong> {repair.cost}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
