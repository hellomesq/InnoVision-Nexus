import React, { useState } from 'react';
import Form from './Form';
import OverlayForm from './OverlayForm';
import './forms.css';

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="centralizacao">
        <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
            <Form isSignUp={isSignUp} />
            <OverlayForm isSignUp={isSignUp} onSignUp={() => setIsSignUp(true)} onSignIn={() => setIsSignUp(false)} />
        </div>
    </div>
    
  );
}

export default AuthPage;
