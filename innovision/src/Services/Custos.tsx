import React, { useState, useEffect } from 'react';
import './services.css';

interface Service {
  name: string;
  price: number;
}

const Custos: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [gasPrice, setGasPrice] = useState<number | null>(null);
  const [quantidadeReais, setQuantidadeReais] = useState<number>(0);
  const [resultado, setResultado] = useState<string>('');

  useEffect(() => {
    fetchServices();
    fetchGasPrice();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/custos');
      if (response.ok) {
        const data = await response.json();
        const serviceArray = Object.keys(data).map(key => ({
          name: key,
          price: data[key]
        }));
        setServices(serviceArray);
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
        }
      } else {
        console.error('Erro ao buscar o preço da gasolina:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao buscar preço da gasolina:', error);
    }
  };

  const calcularLitros = (e: React.FormEvent) => {
    e.preventDefault();
    if (gasPrice && quantidadeReais > 0) {
      const litros = quantidadeReais / gasPrice;
      setResultado(`Com R$${quantidadeReais.toFixed(2)}, você consegue ter ${litros.toFixed(2)} litros de gasolina.`);
    } else {
      setResultado('Por favor, insira uma quantia válida e aguarde o preço da gasolina.');
    }
  };

  return (
    <div className="main-content"> {/* Adiciona contêiner principal */}
      <div className="custos">
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
  );
};

export default Custos;
