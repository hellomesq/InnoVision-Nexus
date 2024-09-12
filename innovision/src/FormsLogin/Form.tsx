// Form.tsx
import React from 'react';
import './forms.css';

const Form: React.FC<{ isSignUp: boolean }> = ({ isSignUp }) => {
  return (
    <>
      <div className={`form-container sign-up-container ${isSignUp ? 'active' : ''}`}>
        <form>
          <h1 className='title-forms'>Seja bem-vindo(a)</h1><br />
          <input type="text" placeholder="Usuário" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button className="btn-primary" type="button">Cadastrar-se</button>
        </form>
      </div>
      <div className={`form-container sign-in-container ${!isSignUp ? 'active' : ''}`}>
        <form>
          <h1 className='title-forms'>Bem-vindo(a) de volta!</h1><br />
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <a id="link-title" href="#">Esqueci minha senha</a>
          <button className="btn-primary" type="button">Login</button>
        </form>
      </div>
    </>
  );
}

export default Form;
