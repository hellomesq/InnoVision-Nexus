import React from 'react';
import './services.css'; // Certifique-se de que o caminho está correto para o arquivo CSS

const Services: React.FC = () => {
  return (
    <main>
      <div className="title-services">
        <h2>Auto Diagnóstico InnoVision</h2>
        <h4>Escolha o serviço perfeito para você e repare seu automóvel com eficiência.</h4>
      </div>
      <div className="container-services">
        <div className="card-services">
          <img src="../imagens/autodiagnostico.jpg" alt="Foto Auto Diagnóstico" />
          <h4 className="title-services-card">Auto Diagnóstico</h4>
          <p className="desc-services-card">Obtenha um diagnóstico completo do seu veículo com apenas algumas informações. Nosso sistema irá avaliar automaticamente o estado do seu carro e fornecer uma análise eficiente.</p>
          <a href="../chat/onepage.html" className="btn-services-card">Ver sobre</a>
        </div>
        <div className="card-services">
          <img src="../imagens/historico_manutencao.png" alt="Foto Histórico de Manutenção" />
          <h4 className="title-services-card">Histórico de Manutenção</h4>
          <p className="desc-services-card">Consulte rapidamente a data da última manutenção realizada no seu veículo e mantenha o histórico de manutenção sempre atualizado.</p>
          <br /><a href="#" className="btn-services-card">Ver sobre</a>
        </div>
        <div className="card-services">
          <img src="../imagens/estimativacusto.jpg" alt="Foto Estimativa de Custo" />
          <h4 className="title-services-card">Estimativa de Custo</h4>
          <p className="desc-services-card">Obtenha uma estimativa precisa para planejar melhor seus gastos com manutenção.</p>
          <br /><br /><a href="#" className="btn-services-card">Ver sobre</a>
        </div>
      </div>
      <div className="convitechat">
        <h4>Converse com nosso assistente agora e resolva seu problema!</h4>
      </div>
      <br />
      <div className="assistente">
        <p>Assistente Charles</p>
      </div>
      <div id="iconcharles">
        <a href="../chat/twopage.html">
          <img className="iconcharles" src="../imagens/iconcharles.jpg" alt="Ícone do Assistente Charles" />
        </a>
      </div>
    </main>
  );
};

export default Services;
