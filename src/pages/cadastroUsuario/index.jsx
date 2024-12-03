import { useEffect, useState, useRef } from 'react'
import './style.css'
import api from '../../services/api.js'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { useNavigate } from 'react-router-dom';

function CadastroUsuario() {
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const inputPhone = useRef()
  const inputPassword = useRef()

  async function getUsers(){
    const responseUsuarios = await api.get('/api/v1/usuarios')
    setUsers(responseUsuarios.data)
    console.log(users)
  }

  async function createUsers(){
    await api.post('/api/v1/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
      type: "doador",
      phone: inputPhone.current.value,
      password: inputPassword.current.value
    })

    navigate('/sucesso');
  } 

  useEffect(() => {
  }, []);

  const navigate = useNavigate()

  return (
    <div id='container-cadastrousuario-page'>
      < Header />
      <div id='container-cadastrousuario-body'>
        <form id='form-cadastrousuario'>
          <h2>Faça seu Cadastro</h2>
          <input name='nome' type='text' placeholder='Nome' ref={inputName}/>
          <input name='idade' type='number' placeholder='Idade' ref={inputAge}/>
          <input name='email' type='email' placeholder='Email' ref={inputEmail}/>
          <input name='phone' type='tel' placeholder='Celular' ref={inputPhone}/>
          <input name='password' type='password' placeholder='Senha' ref={inputPassword}/>
          <button type='button' onClick={createUsers}>Cadastrar</button>
        </form>
     </div>
     < Footer />
    </div>
  )
}

export default CadastroUsuario
