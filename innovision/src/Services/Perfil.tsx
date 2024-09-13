import React, { useState } from 'react';
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

  const filteredRepairs = repairs.filter(repair => {
    const matchesDate = !dateFilter || repair.date === dateFilter;
    const matchesProblem = !problemFilter || repair.problem === problemFilter;
    return matchesDate && matchesProblem;
  });

  return (
    <>
      <div className='container-title'>
        <div className='title-perfil'>
          <h1>Olá!</h1>
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
    </>
  );
};

export default Perfil;
