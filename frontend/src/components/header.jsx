import { Link } from 'react-router-dom'
import logo from '../assets/img/argentBankLogo.png'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../utils/authSlice'
import { fetchProfile } from '../utils/profileThunk'

function Header() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.user?.token) 
  
  const profile = useSelector(state => state.user)

  useEffect(() => {
    if (token) {
      dispatch(fetchProfile())
    }
  }, [token, dispatch])

  const handleSignOut = () => {
    dispatch(signOut())
  }

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      
      {token ? (
        <div>
          <Link className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle"></i>
            {profile.firstName}
          </Link>
          <Link className="main-nav-item" to="/" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/signIn" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Header
