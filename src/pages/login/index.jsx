import { useEffect, useState, useRef } from 'react'
import './style.css'
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useNavigate } from 'react-router-dom';

function Login() {

  const inputEmail = useRef()
  const inputPassword = useRef()

  async function login(){
    console.log('função de login')
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
          <input name='email' type='email' placeholder='Email' ref={inputEmail}/>
          <input name='password' type='password' placeholder='Senha' ref={inputPassword}/>
          <button type='button' onClick={login}>Entrar</button>
        </form>
     </div>
     <br />
     < Footer />
    </div>
  )
}

export default Login
