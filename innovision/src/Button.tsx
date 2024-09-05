import React from 'react';

interface ButtonProps {
  id?: string;
  className: string;
  onClick?: () => void; // Função de clique do botão
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ id, className, onClick, children }) => {
  return (
    <button id={id} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
