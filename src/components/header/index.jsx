import React, { useState, useEffect } from 'react'

import './style.css'
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';



const Header = () => {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu

    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controle de login
    const [userEmail, setUserEmail] = useState(''); // Estado para guardar o e-mail do usuário

    // Função para alternar a visibilidade do menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    };

    useEffect(() => {
        const token = localStorage.getItem('donations-token');
        if (token) {
            // Decodifica o token
            const decoded = jwtDecode(token)
            setIsLoggedIn(true); // Usuário está logado
            setUserEmail(decoded.email); // Armazena o e-mail do usuário no estado
        }
    }, []);


    return (
        <header id='header'>
            <div id='div-header'>
                <div id='div-h1'>
                    <h1 id='titlePlatform' onClick={() => navigate('/')}>Plataforma de Doações</h1>
                </div>
                <div></div>{console.log()}
                {isLoggedIn && window.location.pathname == '/' ? (
                    <div id='div-necessidades' onClick={() => navigate('/donation')}>Lista de Necessidades</div>
                ) : (                  
                     <p></p>
                     )}
                < nav className="menu">
                <button
                    className="menu-toggle"
                    onClick={toggleMenu}
                    aria-label={menuOpen ? "Fechar Menu" : "Abrir Menu"}
                >
                    ☰
                </button>

                {!isLoggedIn ? (
                    <ul className={`menu-list${menuOpen ? ' active' : ''}`}>
                        <li><a onClick={() => navigate('/cadastro')}>Criar conta</a></li>
                        <li><a onClick={() => navigate('/login')}>Entrar</a></li>
                    </ul>
                ) : (
                    <ul className={`menu-list${menuOpen ? ' active' : ''}`}>
                        <li><a onClick={() => navigate('/donation')}>Necessidades</a></li>
                        <li><a onClick={() => {
                            localStorage.removeItem('donations-token'); // Remove o token no logout
                            setIsLoggedIn(false); // Atualiza o estado para deslogado
                            setUserEmail(''); // Limpa o e-mail do usuário
                            navigate('/login')
                        }}>Sair</a></li>
                    </ul>
                )}
            </nav>
            {!isLoggedIn ? (
                // Mostra os botões de login se o usuário não estiver logado
                <div className="div-buttons">
                    <button onClick={() => navigate('/cadastro')}>Criar conta</button>
                    <button onClick={() => navigate('/login')}>Entrar</button>
                </div>
            ) : (
                // Mostra o e-mail do usuário logado
                <div id="container-header-user">
                    <p>{userEmail}</p>
                    <button onClick={() => {
                        localStorage.removeItem('donations-token'); // Remove o token no logout
                        setIsLoggedIn(false); // Atualiza o estado para deslogado
                        setUserEmail(''); // Limpa o e-mail do usuário
                        navigate('/login')
                    }}>
                        Sair
                    </button>
                </div>
            )}
        </div>
        </header >
    )
}

export default Header