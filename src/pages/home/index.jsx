import { useEffect } from 'react'
import './style.css'
import Trash from '../../assets/trash.png'
import api from '../../services/api.js'



function Home() {

  let users = []

  async function getUsers(){
    users = await api.get('/api/v1/usuarios')
    console.log(users)
  }


  useEffect(() => {
    
  }, []);

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type='text' placeholder='Nome' />
        <input name='idade' type='number' placeholder='Idade' />
        <input name='email' type='email' placeholder='Email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (

        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{ user.name}</span></p>
            <p>Idade: <span>{ user.age}</span></p>
            <p>Email: <span>{ user.email}</span></p>
          </div>
          <button>
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