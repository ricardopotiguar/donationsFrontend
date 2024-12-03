import { useEffect, useState, useRef } from 'react'
import './success-style.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { useNavigate } from 'react-router-dom';

const Success = () => {

  const navigate = useNavigate()

  return (
    <div id='container-sucess-page'>
      <Header />
      <div id='container-sucess-body'>
        <h1>Cadastro Realizado com Sucesso!</h1>
        <p>Obrigado por se cadastrar. </p>
        <p>Agora você pode fazer login e explorar a plataforma.</p>

        <button onClick={() => navigate('/login')} style={{ padding: '10px 20px', fontSize: '16px' }}>Ir para Login</button>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
