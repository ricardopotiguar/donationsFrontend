import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import CadastroUsuario from './pages/cadastroUsuario';
import Success from './pages/cadastroUsuario/success';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/sucesso" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;