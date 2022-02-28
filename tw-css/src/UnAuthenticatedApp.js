import logo from './logo.svg'
import './App.css'
import { Content } from './components/Content.js'
import { Nav } from './components/Nav.js'
import { Login } from './components/Login.js'
import { Register } from './components/Register.js'
import React, { useState, useEffect } from 'react'
import { Tutorial } from './components/Tutorial.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import UnauthenticatedIndicateurs from './components/UnauthenticatedIndicateurs.js'

function UnauthenticatedApp({ login, register }) {
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
              <Nav /> <Login login={login} register={register} />
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
        <Route
          path='/notes'
          element={
            <>
              <Nav /> <UnauthenticatedIndicateurs />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default UnauthenticatedApp
