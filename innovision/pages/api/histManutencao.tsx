// pages/api/histManutencao.tsx
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { automovel_id } = req.query;

    try {
      const response = await fetch(`http://localhost:5000/api/historico_manutencao/${automovel_id}`, {
        method: 'GET',
      });

      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      console.error('Erro ao fazer requisição ao backend:', error);
      res.status(500).json({ message: 'Erro ao comunicar com o backend.' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
