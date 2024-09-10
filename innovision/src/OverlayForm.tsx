import React from 'react';

const OverlayForm: React.FC<{ isSignUp: boolean, onSignUp: () => void, onSignIn: () => void }> = ({onSignUp, onSignIn }) => {
    return (
            <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1 className='title-forms'>Já possui conta?</h1>
                    <p className='descricao-forms'>Faça login e desfrute dos nossos serviços!</p>
                    <button className="second-btn" onClick={onSignIn}>Login</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1 className='title-forms'>Novo(a) aqui?</h1>
                    <p className='descricao-forms'>Cadastre-se e desfrute dos nossos serviços</p>
                    <button className="second-btn" onClick={onSignUp}>Cadastrar-se</button>
                </div>
            </div>
        </div>
    );
}

export default OverlayForm;
