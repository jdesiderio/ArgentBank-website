import { Link } from 'react-router-dom'
import logo from '../assets/img/argentBankLogo.png'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../utils/authSlice'

function Header() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  const firstName = useSelector((state) => state.profile.firstName)


  const handleSignOut = () => {
    dispatch(signOut())
  }

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      
      {user ? (
        <div>
          <Link className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle"></i>
            {firstName}
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
