import React from 'react';

const Form: React.FC<{ isSignUp: boolean, onSignUp: () => void, onSignIn: () => void }> = ({isSignUp}) => {
    return (
        <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
            <div className="form-container sign-up-container">
                <form>
                    <h1 className='title-forms'>Seja bem vindo(a)</h1><br></br>
                    <input type="text" placeholder="Usuário" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <button className="btn-primary"  type="button">Cadastrar-se</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form>
                    <h1 className='title-forms'>Bem vindo(a) de volta!</h1><br></br>
                    <input type="text" placeholder="Usuário" />
                    <input type="password" placeholder="Senha" />
                    <a id="link-title" href="#">Esqueci minha senha</a>
                    <button className="btn-primary" type="button">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Form;
