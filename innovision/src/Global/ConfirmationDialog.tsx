import React from 'react';
import './global.css';

interface ConfirmationDialogProps {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="confirmation-dialog">
            <p>{message}</p>
            <div className="confirmation-dialog-buttons">
            <button onClick={onConfirm} className="confirm-btn">Sim</button>
            <button onClick={onCancel} className="cancel-btn">Não</button>
            </div> 
        </div>
    );
};

export default ConfirmationDialog;
