import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/argentBankLogo.png';

function Header() {
  // Supposons que `isLoggedIn` détermine si l'utilisateur est connecté ou non.
  // Vous remplaceriez cela par votre propre logique d'authentification.
  const [isLoggedIn, setIsLoggedIn] = useState(false); // initialement false
  const [userName, setUserName] = useState(); // Remplacer par le nom d'utilisateur connecté

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      
      {isLoggedIn ? (
        <div>
          <Link className="main-nav-item" to="/user/:id">
            <i className="fa fa-user-circle"></i>
            {userName}
          </Link>
          <Link className="main-nav-item" to="/" onClick={() => setIsLoggedIn(false)}>
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
  );
}

export default Header;
