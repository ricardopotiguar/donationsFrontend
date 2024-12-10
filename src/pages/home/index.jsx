import { useEffect, useState, useRef } from 'react'
import './style.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import BannerHome from '../../assets/banner_ajuda.jpg'
import IconeCadastro from '../../assets/icone-cadastro.png'
import IconeDoacao from '../../assets/localizando-necessidades.png'
import IconeTrocaDeContatos from '../../assets/aperto-de-maos.png'

import { useNavigate } from 'react-router-dom';



function Home() {
  const navigate = useNavigate()

  useEffect(() => {

  }, []);


  return (
    <div>
      < Header />
      <div id='container-banner-home'>
        <div id="banner-home">
          <img id="img-banner-home" src={BannerHome} alt="banner-home-pessoa-ajuda" />
        </div>
        <div id="banner-content-home">
          <p>Faça parte da rede de contribuições através da Plataforma de Doações</p>
        </div>
      </div>
      <div id='container-home-body-secao1'>
        <h1>Como funciona ?</h1>
      </div>
      <div id='container-home-body-box-left1' >
        <div id='container-home-body-box-left1-image'>
          <img id='home-body-box-left1-image' src={IconeCadastro} alt="cadastro" />
        </div>
        <div id='container-home-body-box-left1-text'>
          <h2>Passo 1 - Cadastro das Necessidades</h2>
          <p>As pessoas que possuem algum tipo de necessidade (produtos ou serviços) cadastram suas necessidades através de uma instituição parceira confiável.</p>
        </div>
      </div>
      <div id='container-home-body-box-right1' >
        <div id='container-home-body-box-right1-text'>
          <h2>Passo 2 - Doação</h2>
          <p>As pessoas que desejam contribuir com algum tipo de produto ou serviço, realizam uma busca nas necessidades cadastradas e verificam se podem contribuir com algo que está sendo pedido. Ao encontrar uma necessidade em que a pessoa doadora entenda que tenha condições de atender, ela marca na plataforma que irá realizar a doação daquele produto ou serviço solicitado.</p>
        </div>
        <div id='container-home-body-box-right1-image'>
          <img id='home-body-box-right1-image' src={IconeDoacao} alt="cadastro" />
        </div>
      </div>
      <div id='container-home-body-box-right1-mobile' >
        <div id='container-home-body-box-right1-image-mobile'>
          <img id='home-body-box-right1-image-mobile' src={IconeDoacao} alt="cadastro" />
        </div>
        <div id='container-home-body-box-right1-text-mobile'>
          <h2>Passo 2 - Doação</h2>
          <p>As pessoas que desejam contribuir com algum tipo de produto ou serviço, realizam uma busca nas necessidades cadastradas e verificam se podem contribuir com algo que está sendo pedido. Ao encontrar uma necessidade em que a pessoa doadora entenda que tenha condições de atender, ela marca na plataforma que irá realizar a doação daquele produto ou serviço solicitado.</p>
        </div>
      </div>
      <div id='container-home-body-box-left2' >
        <div id='container-home-body-box-left2-image'>
          <img id='home-body-box-left2-image' src={IconeTrocaDeContatos} alt="cadastro" />
        </div>
        <div id='container-home-body-box-left2-text'>
          <h2>Passo 3 - Troca de contatos</h2>
          <p>A plataforma irá compartilhar os dados de contato das pessoas envolvidas, ou seja, tanto da pessoa doadora, quanto da pessoa que possui a necessidade (em alguns casos da instituição parceira que está auxiliando a pessoa que possui a necessidade) para que possam marcar a melhor forma de realizar a entrega da doação e combinarem a melhor data e horário.</p>
        </div>
      </div>
      <br />
      <div id='box-cadastro'>
        <div>
          <h2>Faça seu cadastro e ajude quem mais precisa </h2>
        </div>
        <div><button onClick={() => navigate('/cadastro')}>Clique aqui e faça seu cadastro</button></div>
      </div>
      < Footer />
    </div>
  )
}

export default Home

