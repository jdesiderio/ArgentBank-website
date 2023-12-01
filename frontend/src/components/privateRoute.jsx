// Component: custom route guard that checks if a user is authenticated. If the user is authenticated, it allows access to the specified children components. If not, it redirects the user to the sign-in page.

import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PrivateRoute({ children }) {
  const { user } = useSelector((state) => state.auth)
  return user ? children : <Navigate to="/signIn" />
}

export default PrivateRoute
