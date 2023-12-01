// Component: Header component for the Argent Bank application, including navigation links, logo, user profile, and sign-out functionality.

import { NavLink } from 'react-router-dom'
import logo from '../assets/img/argentBankLogo.webp'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../utils/authSlice'
import { fetchProfile } from '../utils/profileThunk'

function Header() {
  const dispatch = useDispatch()
  // Fetch token from the Redux store
  const authState = useSelector((state) => state.auth)
  const token = authState.user?.token || sessionStorage.getItem('token')

  // Select user profile data from Redux store
  const profile = useSelector(state => state.user)
  // Fetch user profile data if a token is present
  useEffect(() => {
    if (token) {
      dispatch(fetchProfile())
    }
  }, [token, dispatch])

  // Handle user sign-out
  const handleSignOut = () => {
    dispatch(signOut())
  }

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      
      {token ? (
        <div className="main-nav-container">
          <NavLink to="/profile" className={({ isActive }) => isActive ? "main-nav-item router-link-exact-active" : "main-nav-item"}>
            <i className="fa fa-user-circle"></i>
            {profile.userName}
          </NavLink>
          <NavLink to="/" className={({ isActive }) => isActive ? "main-nav-item router-link-exact-active" : "main-nav-item"} onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
        </div>
      ) : (
        <div className="main-nav-container">
          <NavLink to="/signIn" className={({ isActive }) => isActive ? "main-nav-item router-link-exact-active" : "main-nav-item"}>
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default Header