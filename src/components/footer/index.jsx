import React from "react";
import "./style.css";

import FacebookIcon from '../../assets/facebook-icon.png'
import InstagramIcon from '../../assets/instagram-icon.png'
import LinkedinIcon from '../../assets/linkedin-icon.png'
import YoutubeIcon from '../../assets/youtube-icon.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Sobre Nós</h4>
          <p>Somos uma plataforma que conecta pessoas em necessidade com aquelas dispostas a ajudar, facilitando o gerenciamento de doações de forma simples e eficiente.</p>
        </div>

        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Central de Atendimento</h4>
          <ul>
            <li><a href="tel:+5511999999999">+55 (41) 99999-9999</a></li>
            <li><a href="mailto:contato@empresa.com">contato@plaformadedoacoes.com.br</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Siga-nos</h4>
          <div className="social-icons">
            <a href="#facebook" className="icon facebook" title="Facebook"><img src={FacebookIcon} /></a>
            <a href="#instagram" className="icon instagram" title="Instagram"><img src={InstagramIcon}/></a>
            <a href="#youtube" className="icon youtube" title="Youtube"><img src={YoutubeIcon}/></a>
            <a href="#linkedin" className="icon linkedin" title="LinkedIn"><img src={LinkedinIcon}/></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Plataforma de Doações. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
