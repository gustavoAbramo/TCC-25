import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

//aqui vai conter as rotas de cada pagina do nosso sistema e dps nos so importamos elas no main.jsx
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Adicione outras rotas aqui, se necessário */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;