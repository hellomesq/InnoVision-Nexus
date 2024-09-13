import React from 'react';
import './chat.css';

const Chat: React.FC = () => {
    return (
        <>
            <nav className='content-chat'>
                <div className='nav-chat'>
                    <div className="user-details">
                        <h2 className="user-name">Charles</h2>
                        <p className="user-role">Auto atendimento</p>
                    </div>
                    <a href="../servicos/servicos.html">
                        <button className="logout-button">Sair</button>
                    </a>
                </div>
            </nav>
            <main className="container-chat">
                <section className="message-section">
                    <img src="../imagens/iconcharles.jpg" alt="Avatar Charles" className="avatar" />
                    <p className="message">Olá, como posso te ajudar?</p>
                </section>
                <div className="options-chat">
                    <button className="option-chat">Auto Diagnóstico</button>
                    <button className="option-chat">Histórico de manutenção</button>
                    <button className="option-chat">Estimativa de custo</button>
                </div>
            </main>
            <footer className="footer-chat">
                <form className="content-wrapper">
                    <label htmlFor="textInput" className="visually-hidden">Digite aqui</label>
                    <input
                        id="textInput"
                        className="chat-window-message"
                        placeholder="Digite aqui"
                        aria-label="Digite aqui"
                        name="chat-window-message"
                        type="text"
                        autoComplete="off"
                        autoFocus
                    />
                    <button className="submit-chat" type="submit">
                        <i className="fab fa-telegram-plane"></i>
                    </button>
                </form>
            </footer>
        </>
    );
};

export default Chat;
