import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './services.css';

interface User {
  id: number;
  nome: string;
  email: string;
}

interface Service {
  name: string;
  price: number;
}

const Perfil: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [gasPrice, setGasPrice] = useState<number | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [quantidadeReais, setQuantidadeReais] = useState<number>(0);
  const [resultado, setResultado] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/');
    } else {
      const userId = JSON.parse(localStorage.getItem('user') || '{}');
      fetchUserData(userId);
      fetchServices();
      fetchGasPrice(); // Adicione a chamada da API para obter o preço da gasolina
    }
  }, [navigate]);

  const fetchUserData = async (userId: string) => {
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

  const fetchServices = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/custos`);
      if (response.ok) {
        const data = await response.json();
        if (typeof data === 'object' && data !== null) {
          const serviceArray = Object.keys(data).map(key => ({
            name: key,
            price: data[key]
          }));
          setServices(serviceArray);
        } else {
          console.error('Formato de dados inesperado:', data);
          alert('Erro ao processar os dados dos serviços.');
        }
      } else {
        console.error('Erro ao buscar serviços:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao buscar serviços:', error);
    }
  };

  const fetchGasPrice = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/gas-price');
      if (response.ok) {
        const data = await response.json();
        const regex = /R\$(\d+\.\d+)/; 
        const match = data.mensagem.match(regex);
        if (match && match[1]) {
          const price = parseFloat(match[1]);
          setGasPrice(price);
        } else {
          console.error('Formato de dados inesperado para preço da gasolina:', data);
          alert('Erro ao processar o preço da gasolina. Verifique o formato dos dados.');
        }
      } else {
        alert('Erro ao buscar o preço da gasolina.');
      }
    } catch (error) {
      alert('Erro de conexão com o servidor. Tente novamente mais tarde.');
      console.error('Erro ao buscar preço da gasolina:', error);
    }
  };

  const calcularLitros = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/calcular-litros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantidade_reais: quantidadeReais }),
      });

      if (response.ok) {
        const data = await response.json();
        setResultado(data.mensagem);
      } else {
        const errorData = await response.json();
        alert(errorData.erro || 'Erro ao calcular a quantidade de litros.');
      }
    } catch (error) {
      alert('Erro de conexão com o servidor. Tente novamente mais tarde.');
      console.error('Erro ao calcular litros:', error);
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
            <h2>Serviços e Estimativas de Custo</h2>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  {service.name} - R${service.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <h3>Preço da Gasolina: R${gasPrice !== null ? gasPrice.toFixed(2) : 'Indisponível'}</h3>
            <form onSubmit={calcularLitros}>
              <input
                type="number"
                value={quantidadeReais}
                onChange={(e) => setQuantidadeReais(Number(e.target.value))}
                placeholder="Quantia em R$"
                required
              />
              <button type="submit">Calcular Litros</button>
            </form>
            {resultado && <p>{resultado}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
