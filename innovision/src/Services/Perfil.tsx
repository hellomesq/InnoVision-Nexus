import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './services.css';

interface User {
  id: number;
  nome: string;
  email: string;
}

interface Manutencao {
  id: number;
  tipo_de_manutencao: string;
  data_das_manutencoes: string;
  modelo: string;
  placa: string;
}

const Perfil: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [historico, setHistorico] = useState<Manutencao[]>([]);
  const [tipoDeManutencao, setTipoDeManutencao] = useState('');
  const [dataDasManutencoes, setDataDasManutencoes] = useState('');
  const [carroId, setCarroId] = useState('');
  const [erro, setErro] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userIdString = localStorage.getItem('user'); // Recupera como string
    const userId = userIdString ? parseInt(userIdString, 10) : null; // Converte para número

    if (!userId) {
      navigate('/login'); // Redireciona para a página de login se o usuário não estiver logado
      return;
    }

    fetchUserData(userId);
    fetchHistorico(); // Chamada atualizada
  }, [navigate]);

  const fetchUserData = async (userId: number) => {
    try {
      const response = await fetch(`http://localhost:5000/api/user/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        setErro('Erro ao buscar dados do usuário.');
      }
    } catch (error) {
      setErro('Erro de conexão com o servidor. Tente novamente mais tarde.');
    }
  };

  const fetchHistorico = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/historico_manutencao`, {
        method: 'GET',
        credentials: 'include', // Garante que os cookies da sessão sejam enviados
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setHistorico(data); // Assume que o endpoint retorna um array
    } catch (error) {
      console.error('Erro ao buscar histórico de manutenção:', error);
      setErro('Erro de conexão com o servidor. Tente novamente mais tarde.');
    }
  };

  const agendarManutencao = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/agendar_manutencao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tipo_de_manutencao,
          data_das_manutencoes,
          carro_id: carroId,
        }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Erro ao agendar manutenção');
      }

      alert('Manutenção agendada com sucesso!');
      fetchHistorico(); // Atualiza o histórico após o agendamento
      setTipoDeManutencao(''); // Limpa os campos do formulário
      setDataDasManutencoes('');
      setCarroId('');
    } catch (error) {
      console.error('Erro ao agendar manutenção:', error);
      setErro('Erro ao agendar manutenção. Tente novamente.');
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
            <h2>Histórico de Manutenção</h2>
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
            {historico.length > 0 ? (
              <ul>
                {historico.map((manutencao) => (
                  <li key={manutencao.id}>
                    {manutencao.tipo_de_manutencao} - {manutencao.data_das_manutencoes} - {manutencao.modelo} - {manutencao.placa}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nenhum histórico de manutenção encontrado.</p>
            )}
          </div>
          <div className='container-title'>
            <h2>Agendar Manutenção</h2>
            <form onSubmit={agendarManutencao}>
              <input
                type="text"
                value={tipoDeManutencao}
                onChange={(e) => setTipoDeManutencao(e.target.value)}
                placeholder="Tipo de Manutenção"
                required
              />
              <input
                type="date"
                value={dataDasManutencoes}
                onChange={(e) => setDataDasManutencoes(e.target.value)}
                required
              />
              <input
                type="number"
                value={carroId}
                onChange={(e) => setCarroId(e.target.value)}
                placeholder="ID do Carro"
                required
              />
              <button type="submit">Agendar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
