import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../Global/Alert';
import ConfirmationDialog from '../Global/ConfirmationDialog';
import './services.css';

const AlterarPerfil: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [user, setUser] = useState<{ id: number; nome: string; email: string; senha: string } | null>(null);
    const [car, setCar] = useState<{ model: string; chassis: string; plate: string; color: string } | null>(null);

    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [showConfirmation, setShowConfirmation] = useState<{ action: 'deleteAccount' | 'removeCar' | null }>({ action: null });
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            navigate('/');
        } else {
            const userData = JSON.parse(localStorage.getItem('user') || '{}');
            setUser(userData);

            // Chamada para pegar os dados do usuário
            fetch(`http://localhost:5000/api/user/${userData.id}`)
                .then(response => response.json())
                .then(data => {
                    if (data.nome && data.email) {
                        setNewUsername(data.nome);
                        setNewEmail(data.email);
                    }
                })
                .catch(error => console.error('Error fetching user data:', error));

            const carData = JSON.parse(localStorage.getItem('car') || '{}');
            setCar(carData);
        }
    }, [navigate]);

    const handleUpdateProfile = () => {
        if (user) {
            const updatedUser = {
                nome: newUsername,
                email: newEmail,
                senha: newPassword || user.senha // Apenas atualizar a senha se fornecida
            };

            fetch(`http://localhost:5000/api/user/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    setAlert({ message: data.message, type: 'success' });
                    const newUserData = { ...user, nome: newUsername, email: newEmail, senha: newPassword || user.senha };
                    localStorage.setItem('user', JSON.stringify(newUserData));
                    setUser(newUserData);
                }
            })
            .catch(error => {
                console.error('Error updating user:', error);
                setAlert({ message: 'Erro ao atualizar perfil', type: 'error' });
            });
        }
    };

    const handleDeleteAccount = () => {
        setShowConfirmation({ action: 'deleteAccount' });
    };

    const handleAddCar = () => {
        navigate('/cad-auto');
    };

    const handleRemoveCar = () => {
        setShowConfirmation({ action: 'removeCar' });
    };

    const handleConfirmDeleteAccount = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('car');
        localStorage.removeItem('isLoggedIn');
        setShowConfirmation({ action: null });
        navigate('/');
    };

    const handleConfirmRemoveCar = () => {
        localStorage.removeItem('car');
        setCar(null);
        setAlert({ message: 'Cadastro do automóvel removido com sucesso!', type: 'success' });
        setShowConfirmation({ action: null });
    };

    const handleCloseConfirmation = () => {
        setShowConfirmation({ action: null });
    };

    const handleCloseAlert = () => {
        setAlert(null);
    };

    return (
        <div className="dashboard">
            <button className="sidebar-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <i className="fas fa-bars"></i>
            </button>
            <nav className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
                <div className="sidebar-header">
                    <h2>Olá</h2>
                    <p>@{user?.nome || 'Usuário'}</p>
                </div>
                <ul className="sidebar-menu">
                    <li><Link to="/perfil">Perfil</Link></li>
                    <li className="perfil"><Link to="/alterarperfil">Alterar Perfil</Link></li>
                    <li><Link to="/chat">Chat</Link></li>
                    <li><Link to="/">Sair</Link></li>
                </ul>
            </nav>
            <div className="main-container-perfil">
                <div className="content-alterar-perfil">
                    <div className="form-container-alter">
                        <form>
                            <div className="form-group">
                                <h2>Informações do usuário</h2>
                                <label htmlFor="username">Usuário</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={newUsername}
                                    onChange={(e) => setNewUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Senha</label>
                                <div className="password-wrapper">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                    <i
                                        className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`}
                                        onClick={() => setShowPassword(!showPassword)}
                                    ></i>
                                </div>
                            </div>
                            <div className='btn-alter-perfil'>
                                <button type="button" onClick={handleUpdateProfile} className='alter-btn'>Atualizar perfil</button>
                                <button type="button" onClick={handleDeleteAccount} className="delete-btn">Excluir conta</button>
                            </div>
                        </form>
                        <div className="car-info">
                            <h2>Informações do Automóvel</h2>
                            <p><strong>Modelo:</strong> {car?.model || 'Não cadastrado'}</p>
                            <p><strong>Chassi:</strong> {car?.chassis || 'Não cadastrado'}</p>
                            <p><strong>Placa:</strong> {car?.plate || 'Não cadastrado'}</p>
                            <p><strong>Coloração:</strong> {car?.color || 'Não cadastrado'}</p>
                            <div className='btn-alter-perfil'>
                                <button type="button" onClick={handleAddCar} className="alter-btn">Adicionar novo automóvel</button>
                                <button type="button" onClick={handleRemoveCar} className="delete-btn">Remover automóvel</button>
                            </div>
                        </div>
                    </div>
                </div>
                {alert && <Alert message={alert.message} type={alert.type} onClose={handleCloseAlert} duration={2000} />}
                {showConfirmation.action === 'deleteAccount' && (
                    <ConfirmationDialog
                        message="Você tem certeza que deseja excluir sua conta?"
                        onConfirm={handleConfirmDeleteAccount}
                        onCancel={handleCloseConfirmation}
                    />
                )}
                {showConfirmation.action === 'removeCar' && (
                    <ConfirmationDialog
                        message="Você tem certeza que deseja remover o automóvel?"
                        onConfirm={handleConfirmRemoveCar}
                        onCancel={handleCloseConfirmation}
                    />
                )}
            </div>
        </div>
    );
};

export default AlterarPerfil;
