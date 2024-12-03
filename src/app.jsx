import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import CadastroUsuario from './pages/cadastroUsuario';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;