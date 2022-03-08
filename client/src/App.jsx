import './app.scss'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Watch from './pages/watch/Watch'
import Login from './pages/login/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './authContext/AuthContext'

const App = () => {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='auth/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        {user && (
          <>
            <Route path='/movies'>
              <Home type='movie' />
            </Route>
            <Route path='/series'>
              <Home type='series' />
            </Route>
            <Route path='/watch'>
              <Watch />
            </Route>
          </>
        )}
      </Routes>
    </Router>
  )
}

export default App
