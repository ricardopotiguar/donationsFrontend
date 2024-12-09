import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import CadastroUsuario from './pages/cadastroUsuario';
import Success from './pages/cadastroUsuario/success';
import Login from './pages/login';
import PrivateRoute from './components/privateRoute/privateRoute';
import Donations from './pages/donations';
import DonationsSucess from './pages/donations/success';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/sucesso" element={<Success />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/donation"
          element={
            <PrivateRoute>
              <Donations />
            </PrivateRoute>
          }
        />
        <Route
          path="/donation-success"
          element={
            <PrivateRoute>
              <DonationsSucess />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;