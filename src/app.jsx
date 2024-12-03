import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import CadastroUsuario from './pages/cadastroUsuario';
import Success from './pages/cadastroUsuario/success';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/sucesso" element={<Success />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;