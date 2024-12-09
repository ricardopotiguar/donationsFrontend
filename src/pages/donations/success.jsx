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
        <h1>Programação da Doação Realizada com Sucesso!</h1>
        <h2>Parabéns por realizar esse gesto de solidariedade e obrigado por fazer parte desta rede de contrubuições.</h2>
        <br />
        <p>Você receberá um e-mail com as informações de contato da pessoa que possui esta necessidade. Da mesma forma, ela também receberá suas informações de contato, permitindo que vocês combinem a melhor forma de realizar a entrega do produto ou a prestação do serviço doado.</p>

        <button onClick={() => navigate('/donation')} style={{ padding: '10px 20px', fontSize: '16px' }}>Voltar</button>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
