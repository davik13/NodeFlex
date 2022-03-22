import axios from 'axios'
import { useRef } from 'react'
import { useState } from 'react'
import { Navigate, useNavigate, Link } from 'react-router-dom'
import './register.scss'

export default function Register () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const history = useNavigate()

  const emailRef = useRef()
  const passwordRef = useRef()
  const usernameRef = useRef()

  // const loginButton = () => {
  //   function handleClick () {
  //     Navigate('/login')
  //   }

  //   return (
  //     <button type='button' onClick={handleClick}>
  //       Connexion
  //     </button>
  //   )
  // }
  const Nav = () => {
    console.log('ok');
    Navigate('/login')
  };
  const handleStart = () => {
    setEmail(emailRef.current.value)
  }
  const handleFinish = async e => {
    e.preventDefault()
    setPassword(passwordRef.current.value)
    setUsername(usernameRef.current.value)
    try {
      await axios.post('/register', { email, username, password })
      history('/login')
    } catch (e) {
      console.log(e.response.data)
    }
  }
  return (
    <div className='register'>
      <div className='top'>
        <div className='wrapper'>
          <img
            className='logo'
            src='https://fontmeme.com/permalink/220311/98498e42918e9c088acd21ba9c527fbf.png'
            alt=''
          />
          <button onClick={Nav}>Connexion</button>
          
        </div>
      </div>
      <div className='container'>
        <h1>Films et séries en illimité</h1>
        <h2>Regarder partout, annuler n'importe quand</h2>
        <p>Prêt ? Entrez votre email et entrez dans l'univers NodeFlex</p>
        {!email ? (
          <div className='input'>
            <input type='email' placeholder='Adresse e-mail' ref={emailRef} />
            <button className='registerButton' onClick={handleStart}>
              Démarrer
            </button>
          </div>
        ) : (
          <form className='input'>
            <input
              type='username'
              placeholder="Nom d'utilisateur"
              ref={usernameRef}
            />
            <input
              type='password'
              placeholder='Mot de passe'
              ref={passwordRef}
            />
            <button className='registerButton' onClick={handleFinish}>
              Inscription
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
