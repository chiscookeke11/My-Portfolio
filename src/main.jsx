
import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

function Main() {
  const [mode, setMode] = useState(false);

  const toggleMode = () => {
    setMode((prevMode) => !prevMode);
  };

  return <App darkMode={mode} toggleMode={toggleMode} />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
