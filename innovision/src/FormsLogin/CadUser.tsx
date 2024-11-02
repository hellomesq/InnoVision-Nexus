import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forms.css';

const CadUser: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    setIsSignUp(true);
  };

  const handleSignIn = () => {
    setIsSignUp(false);
  };

  const handleSubmit = async () => {
    if (isSignUp) {
      // Requisição de cadastro
      try {
        const response = await fetch('http://localhost:5000/api/cadastro', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            senha: password,
            confirmar_senha: password,
            nome: username
          }),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('user', JSON.stringify(data.user_id));  // Salva apenas o ID do usuário
          localStorage.setItem('isLoggedIn', 'true');
          navigate('/cad-auto');  // Redireciona para a página de cadastro de automóvel
        } else {
          const errorData = await response.json();
          alert(`Erro no cadastro: ${errorData.message}`);
        }
      } catch (error) {
        alert('Erro de conexão com o servidor. Tente novamente mais tarde.');
      }
    } else {
      // Requisição de login
      try {
        const response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, senha: password }),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('user', JSON.stringify(data.user_id));  // Salva apenas o ID do usuário
          localStorage.setItem('isLoggedIn', 'true');
          navigate('/perfil');  // Redireciona para a página de perfil
        } else {
          const errorData = await response.json();
          alert(`Erro no login: ${errorData.message}`);
        }
      } catch (error) {
        alert('Erro de conexão com o servidor. Tente novamente mais tarde.');
      }
    }
  };

  return (
    <div className="centralizacao">
      <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
        <div className={`form-container sign-up-container ${isSignUp ? 'active' : ''}`}>
          <form className='forms-cad'>
            <h1 className='title-forms'>Seja bem-vindo(a)</h1><br />
            <input
              type="text"
              className='input-cad'
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              className='input-cad'
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className='input-cad'
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn-primary"
              type="button"
              onClick={handleSubmit}
            >
              {isSignUp ? 'Cadastrar-se' : 'Login'}
            </button>
          </form>
        </div>
        <div className={`form-container sign-in-container ${!isSignUp ? 'active' : ''}`}>
          <form className='forms-cad'>
            <h1 className='title-forms'>Bem-vindo(a) de volta!</h1><br />
            <input
              type="email"
              className='input-cad'
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className='input-cad'
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a id="link-title" href="#">Esqueci minha senha</a>
            <button
              className="btn-primary"
              type="button"
              onClick={handleSubmit}
            >
              {isSignUp ? 'Cadastrar-se' : 'Login'}
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className='title-forms'>Já possui conta?</h1>
              <p className='descricao-forms'>Faça login e desfrute dos nossos serviços!</p>
              <button className="second-btn" onClick={handleSignIn}>Login</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className='title-forms'>Novo(a) aqui?</h1>
              <p className='descricao-forms'>Cadastre-se e desfrute dos nossos serviços</p>
              <button className="second-btn" onClick={handleSignUp}>Cadastrar-se</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadUser;
