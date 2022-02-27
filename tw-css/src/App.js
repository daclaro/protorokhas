import React, { useState, useEffect } from 'react'
import me from './services/me.js'
import * as auth from './auth-provider'
import AuthenticatedApp from './AuthenticatedApp.js'
import UnauthenticatedApp from './UnauthenticatedApp.js'

async function getUser() {
  let user = null

  const token = await auth.getToken()

  if (token) {
    const data = await me(token)
    console.log('Fsdsd', data)
    user = data.user
    console.log('dsfds YOU dsfcdsxzc', data.user)
  }

  return user
}

function App() {
  const [user, setUser] = React.useState(null)
  React.useEffect(() => {
    getUser().then((u) => setUser(u))
  }, [])
  const login = (form) => auth.login(form).then((u) => setUser(u))
  const register = (form) => auth.register(form).then((u) => setUser(u))
  const logout = () => {
    auth.logout()
    setUser(null)
  }

  return user ? <AuthenticatedApp user={user} logout={logout} /> : <UnauthenticatedApp login={login} register={register} />
}

export default App
