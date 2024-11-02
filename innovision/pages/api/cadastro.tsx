// pages/api/cadastro.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const response = await fetch('http://localhost:5000/api/cadastro', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req.body),
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
  