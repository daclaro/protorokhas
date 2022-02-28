import React, { useState, useEffect } from 'react'
import me from './services/me.js'
import * as auth from './auth-provider'
import { useAsync } from './utils/hooks.js'
import AuthenticatedApp from './AuthenticatedApp.js'
import * as colors from './styles/colors'

import UnauthenticatedApp from './UnauthenticatedApp.js'
import { FullPageSpinner } from './components/Lib.js'
async function getUser() {
  let user = null

  const token = await auth.getToken()

  if (token) {
    const data = await me(token)
    console.log('Fsdsd', data)
    user = data.user
  }

  return user
}

function App() {
  const { data: user, error, isLoading, isIdle, isError, isSuccess, run, setData } = useAsync()

  React.useEffect(() => {
    run(getUser())
  }, [run])
  const login = (form) => auth.login(form).then((user) => setData(user))
  const register = (form) => auth.register(form).then((user) => setData(user))
  const logout = () => {
    auth.logout()
    setData(null)
  }
  if (isLoading || isIdle) {
    return <FullPageSpinner />
  }
  if (isError) {
    return (
      <div
        css={{
          color: colors.danger,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p>Uh oh... There's a problem. Try refreshing the app.</p>
        <pre>{error.message}</pre>
      </div>
    )
  }
  if (isSuccess) {
    return user ? <AuthenticatedApp user={user} logout={logout} /> : <UnauthenticatedApp login={login} register={register} />
  }
}

export default App
