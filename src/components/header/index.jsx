import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate()

    return (
        <header>
            <h1 id='titlePlatform' onClick={() => navigate('/')}>Plataforma de Doações</h1>
            <div className="buttons">
                <button onClick={() => navigate('/cadastro')}>Criar conta</button>
                <button>Entrar</button>
            </div>
        </header>
    )
}

export default Header