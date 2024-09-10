import React, { useState } from 'react'; // Adicionado import do useState
import Header from './Header';
import Form from './Form';
import OverlayForm from './OverlayForm';
import Footer from './Footer';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="App">
      <Header />
      <div className='centralizacao'>
        <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
      <Form isSignUp={isSignUp} onSignUp={() => setIsSignUp(true)} onSignIn={() => setIsSignUp(false)} />
      <OverlayForm isSignUp={isSignUp} onSignUp={() => setIsSignUp(true)} onSignIn={() => setIsSignUp(false)} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
