import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../utils/authThunk.js'
import Button from './button.jsx'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { error } = useSelector((state) => state.auth)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(loginUser({ username, password }))
    .unwrap()
      .then(() => navigate('/user'))
      .catch((error) => console.error('Erreur de connexion:', error))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="email" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <Button
          className="button sign-in-button"
          text="Sign In"
        />
      </form>
      {error && <p className="error-message">{error}</p>}
    </>
  )
}

export default Login
