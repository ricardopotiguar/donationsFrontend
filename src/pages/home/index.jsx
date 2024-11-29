import { useEffect, useState, useRef } from 'react'
import './style.css'
import Header from '../../components/header'
import BannerHome from '../../assets/banner_ajuda.jpg'
import IconeCadastro from '../../assets/icone-cadastro.png'
import IconeDoacao from '../../assets/localizando-necessidades.png'
import IconeTrocaDeContatos from '../../assets/aperto-de-maos.png'


function Home() {


  useEffect(() => {

  }, []);

  return (
    <div>
      < Header />
      <div className="banner">
        <img src={BannerHome} alt="" style={{ width: '100%', height: 'auto' }} />
        <div className="banner-content">
          <h1>Faça parte da rede de contribuições através da Plataforma de Doações</h1>
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className='secao1'>Como funciona ?</h1>
        <div className='box-left' >
          <div className='box-left-image'>
            <img src={IconeCadastro} alt="" style={{ width: 'auto', height: '80%' }} />
          </div>
          <div>
            <h2>Passo 1 - Cadastro das Necessidades</h2>
            <p>As pessoas que possuem algum tipo de necessidade (produtos ou serviços) cadastram suas necessidades através de uma instituição parceira confiável.</p>
          </div>
        </div>
        <div className='box-right' >
          <div>
            <h2>Passo 2 - Doação</h2>
            <p>As pessoas que desejam contribuir com algum tipo de produto ou serviço, realizam uma busca nas necessidades cadastradas e verificam se podem contribuir com algo que está sendo pedido. Ao encontrar uma necessidade em que a pessoa doadora entenda que tenha condições de atender, ela marca na plataforma que irá realizar a doação daquele produto ou serviço solicitado.</p>
          </div>
          <div className='box-right-image'>
            <img src={IconeDoacao} alt="" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
        <div className='box-left' >
          <div className='box-left-image'>
            <img src={IconeTrocaDeContatos} alt="" style={{ width: '300px', height: '80%' }} />
          </div>
          <div>
            <h2>Passo 3 - Troca de contatos</h2>
            <p>A plataforma irá compartilhar os dados de contato das pessoas envolvidas, ou seja, tanto da pessoa doadora, quanto da pessoa que possui a necessidade (em alguns casos da instituição parceira que está auxiliando a pessoa que possui a necessidade) para que possam marcar a melhor forma de realizar a entrega da doação e combinarem a melhor data e horário.</p>
          </div>
        </div>
        <br />
      </div>
    </div>
  )
}

export default Home

