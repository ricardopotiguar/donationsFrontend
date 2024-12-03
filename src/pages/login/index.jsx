import { useEffect, useState, useRef } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';

function Login() {


  useEffect(() => {
  }, []);

  const navigate = useNavigate()

  return (
    <div>
      < Header />
      <div id='container-login'>
       LOGIN
     </div>
     <br />
     < Footer />
    </div>
  )
}

export default Login
