import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import SignIn from './pages/signIn'
import ProfilePage from './pages/profile'
import Header from './components/header'
import Footer from './components/footer'
import PrivateRoute from './components/privateRoute'
import Error from './pages/error'

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default AppRouter

