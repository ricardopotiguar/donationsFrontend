import { useEffect, useState, useRef } from 'react'
import './success-style.css'
import Header from '../../components/header'
import Footer from '../../components/footer'

const Success = () => {

  return (
    <div id='container-sucess-page'>
      <Header />
      <div id='container-sucess-body'>
        <h1>Cadastro Realizado com Sucesso!</h1>
        <p>Obrigado por se cadastrar. Você agora pode acessar a plataforma.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
