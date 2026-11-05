import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";

function Main() {
  const [mode, setMode] = useState(true);

  const toggleMode = () => {
    setMode((prevMode) => !prevMode);
  };

  return <App darkMode={mode} toggleMode={toggleMode} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <Main />
      <ToastContainer />
    </HelmetProvider>
  </StrictMode>,
);
