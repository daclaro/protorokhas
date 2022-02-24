import logo from './logo.svg'
import './App.css'
import { Content } from './components/Content.js'
import { Nav } from './components/Nav.js'
import { Login } from './components/Login.js'
import { Register } from './components/Register.js'
import React, { useState, useEffect } from 'react'
import { Tutorial } from './components/Tutorial.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function App() {
  const [token, setToken] = useState('')
  const [logged, setLogged] = useState(false)
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Nav /> <Tutorial />
            </>
          }
        />
        <Route
          path='/login'
          element={
            <>
              <Nav /> <Login setToken={setToken} logged={logged} setLogged={setLogged} />
            </>
          }
        />
        <Route
          path='/register'
          element={
            <>
              <Nav /> <Register />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
