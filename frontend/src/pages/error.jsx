// main error page

import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error-page main bg-dark">
      <p className="error-type">404</p>
      <p className="error-txt">La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error-link">Retourner sur la page d’accueil</Link>
    </div>
  )}

  export default Error