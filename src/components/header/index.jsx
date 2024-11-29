import React, {useState} from 'react'

import './style.css'
import { useNavigate } from 'react-router-dom';



const Header = () => {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu

    // Função para alternar a visibilidade do menu
    const toggleMenu = () => {
        console.log('Clique no toggleMenu - antes do set', menuOpen)
        setMenuOpen(!menuOpen)
    };

    return (
        <header id='header'>
            <div id='div-header'>
                <div id='div-h1'>
                    <h1 id='titlePlatform' onClick={() => navigate('/')}>Plataforma de Doações</h1>
                </div>
                <nav className="menu">
                    <button
                        className="menu-toggle"
                        onClick={toggleMenu}
                        aria-label={menuOpen ? "Fechar Menu" : "Abrir Menu"}
                    >
                        ☰
                    </button>
                    <ul className={`menu-list${menuOpen ? ' active' : ''}`}>
                        <li><a onClick={() => navigate('/cadastro')}>Criar conta</a></li>
                        <li><a onClick={() => navigate('/cadastro')}>Entrar</a></li>
                    </ul>
                </nav>
                <div className="div-buttons">
                    <button onClick={() => navigate('/cadastro')}>Criar conta</button>
                    <button>Entrar</button>
                </div>
            </div>
        </header>
    )
}

export default Header