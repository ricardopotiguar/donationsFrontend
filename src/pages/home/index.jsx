import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.png'
import api from '../../services/api.js'

function Home() {
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
    getUsers()
  }

  async function deleteUser(userId){
    await api.delete(`/api/v1/usuarios/${userId}`)
    getUsers()
  }
 

  useEffect(() => {
    getUsers()
  }, []);

  return (
    <div className='container'>
    <div>
      <button>Criar conta</button>
      <button>Entrar</button>
    </div>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type='text' placeholder='Nome' ref={inputName}/>
        <input name='idade' type='number' placeholder='Idade' ref={inputAge}/>
        <input name='email' type='email' placeholder='Email' ref={inputEmail}/>
        <input name='phone' type='tel' placeholder='Celular' ref={inputPhone}/>
        <input name='password' type='password' placeholder='Senha' ref={inputPassword}/>
        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map(user => (

        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{ user.name}</span></p>
            <p>Idade: <span>{ user.age}</span></p>
            <p>Email: <span>{ user.email}</span></p>
          </div>
          <button onClick={() => deleteUser(user.id)}>
            <img src={Trash} alt="trash" style={{ width: '30px', height: 'auto' }} />
          </button>
        </div>

      ))}

    </div>
  )
}

export default Home


/* [{
  id: "1",
  name: 'Ricardo Potigar',
  age: 37,
  email: 'ricardopotiguar@gmail.com'
},
{
  id: "2",
  name: 'Ricardo Potigar 2',
  age: 37,
  email: 'ricardopotiguar2@gmail.com'
},
{
  id: "3",
  name: 'Ricardo Potigar 3',
  age: 37,
  email: 'ricardopotiguar3@gmail.com'
}
] */