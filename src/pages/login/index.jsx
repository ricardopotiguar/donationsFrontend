import { useEffect, useState, useRef } from 'react'
import './style.css'
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api.js'

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const inputEmail = useRef()
  const inputPassword = useRef()

  async function login() {
    try {
      console.log('função de login')
      const response = await api.post('/api/v1/login', {
        "email": inputEmail.current.value,
        "password": inputPassword.current.value
      })
      console.log(response)

      if (response.status !== 200) {
        const { message } = response
        throw new Error(message || 'Falha na autenticação');
      }

      localStorage.setItem('donations-token', response.data.token); // Salvar token no localStorage
      navigate('/donation'); // Redirecionar para a área logada

    } catch (error) {
      console.log(error.message)
    }
  }




  useEffect(() => {
  }, []);

  const navigate = useNavigate()

  return (
    <div id='container-login-page'>
      < Header />
      <div id='container-login-body'>
        <form id='form-login'>
          <h1>Login</h1>
          <input name='email' type='email' placeholder='Email' ref={inputEmail} />
          <input name='password' type='password' placeholder='Senha' ref={inputPassword} />
          <button type='button' onClick={login}>Entrar</button>
        </form>
      </div>
      <br />
      < Footer />
    </div>
  )
}

export default Login
