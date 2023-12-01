// Component: Login form 

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../utils/authThunk.js'
import { useNavigate } from 'react-router-dom'
import Button from './button.jsx'

function Login() {
  // State for email and password inputs
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { error } = useSelector((state) => state.auth)

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => navigate('/profile'))
      .catch((error) => console.error('Login error:', error)) 
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Username</label> 
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> 
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
