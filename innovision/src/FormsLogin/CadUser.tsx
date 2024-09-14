import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forms.css';

const CadUser: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const handleSignUp = () => {
    setIsSignUp(true);
  };

  const handleSignIn = () => {
    setIsSignUp(false);
  };

  const handleSubmit = (path: string) => {
    navigate(path);
  };

  return (
    <div className="centralizacao">
      <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
        <div className={`form-container sign-up-container ${isSignUp ? 'active' : ''}`}>
          <form className='forms-cad'>
            <h1 className='title-forms'>Seja bem-vindo(a)</h1><br />
            <input type="text" className='input-cad' placeholder="Usuário" />
            <input type="email" className='input-cad' placeholder="Email" />
            <input type="password" className='input-cad' placeholder="Senha" />
            <button
              className="btn-primary"
              type="button"
              onClick={() => handleSubmit('/cad-auto')}
            >
              Cadastrar-se
            </button>
          </form>
        </div>
        <div className={`form-container sign-in-container ${!isSignUp ? 'active' : ''}`}>
          <form className='forms-cad'>
            <h1 className='title-forms'>Bem-vindo(a) de volta!</h1><br />
            <input type="text" className='input-cad' placeholder="Usuário" />
            <input type="password" className='input-cad' placeholder="Senha" />
            <a id="link-title" href="#">Esqueci minha senha</a>
            <button className="btn-primary" type="button">Login</button>
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
