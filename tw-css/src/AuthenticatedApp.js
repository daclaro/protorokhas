import logo from './logo.svg'
import './App.css'
import { Content } from './components/Content.js'
import { Nav } from './components/Nav.js'
import { AuthenticatedTutorial } from './components/AuthenticatedTutorial.js'
import { AuthenticatedLogin } from './components/AuthenticatedLogin.js'
import { AuthenticatedNav } from './components/AuthenticatedNav.js'
import AuthenticatedIndicateurs from './components/AuthenticatedIndicateurs.js'
import { Login } from './components/Login.js'
import { Register } from './components/Register.js'
import React, { useState, useEffect } from 'react'
import { Tutorial } from './components/Tutorial.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function AuthenticatedApp({ user, logout }) {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <AuthenticatedNav logout={logout} /> <AuthenticatedTutorial />
            </>
          }
        />
        <Route
          path='/login'
          element={
            <>
              <AuthenticatedNav logout={logout} /> <AuthenticatedLogin />
            </>
          }
        />
        <Route
          path='/register'
          element={
            <>
              <AuthenticatedNav logout={logout} /> <Register />
            </>
          }
        />
        <Route
          path='/notes'
          element={
            <>
              <AuthenticatedNav logout={logout} /> <AuthenticatedIndicateurs user={user} logout={logout} />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default AuthenticatedApp
