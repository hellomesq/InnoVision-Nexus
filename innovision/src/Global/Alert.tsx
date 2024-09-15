// components/Alert.tsx
import React, { useEffect } from 'react';
import './global.css';

interface AlertProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number; // Adiciona a opção de duração
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose, duration = 2000 }) => {
  useEffect(() => {
    // Remove o alerta após o tempo especificado
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    // Limpa o timeout se o componente for desmontado antes do tempo
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className={`alert ${type}`}>
      <p>{message}</p>
      <button onClick={onClose} className="alert-close-btn">X</button>
    </div>
  );
};

export default Alert;
