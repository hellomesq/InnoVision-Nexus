import React, { useState, useEffect } from 'react';
import ContentSection from './ContentSection';
import './styles.css'; // Adapte o caminho conforme necessário

const Container: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  useEffect(() => {
    // Adicionar ou remover classes do body com base no estado
    if (isSignIn) {
      document.body.classList.add('sign-in-js');
      document.body.classList.remove('sign-up-js');
    } else {
      document.body.classList.add('sign-up-js');
      document.body.classList.remove('sign-in-js');
    }

    // Limpeza ao desmontar o componente
    return () => {
      document.body.classList.remove('sign-in-js', 'sign-up-js');
    };
  }, [isSignIn]);

  return (
    <div className="container">
      <div className={`content ${isSignIn ? 'sign-in' : 'sign-up'}`}>
        <ContentSection
          primaryTitle={isSignIn ? "Já possui conta?" : "Novo(a) aqui?"}
          primaryDescription={isSignIn ? "Faça login e desfrute dos nossos serviços!" : "Cadastre-se e desfrute dos nossos serviços"}
          primaryButtonText={isSignIn ? "Login" : "Cadastrar-se"}
          secondaryTitle={isSignIn ? "Seja bem-vindo(a)!" : "Bem-vindo(a) de volta!"}
          formFields={isSignIn ? [
            { type: 'text', placeholder: 'Usuário', icon: 'far fa-user' },
            { type: 'email', placeholder: 'Email', icon: 'far fa-envelope' },
            { type: 'password', placeholder: 'Senha', icon: 'fas fa-lock' }
          ] : [
            { type: 'email', placeholder: 'Usuário', icon: 'far fa-user' },
            { type: 'password', placeholder: 'Senha', icon: 'fas fa-lock' }
          ]}
          formButtonText={isSignIn ? "Cadastrar-se" : "Login"}
          passwordLinkText={isSignIn ? undefined : "Esqueci minha senha"}
          onButtonClick={() => setIsSignIn(!isSignIn)} // Alterna entre sign-in e sign-up
        />
      </div>
    </div>
  );
};

export default Container;
