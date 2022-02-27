// pretend this is firebase, netlify, or auth0's code.
// you shouldn't have to implement something like this in your own app
import signin from './services/login.js'
import registerthat from './services/register.js'
const localStorageKey = 'token'
async function getToken() {
  return window.localStorage.getItem(localStorageKey)
}

function handleUserResponse(user) {
  console.log('????????', user)
  window.localStorage.setItem(localStorageKey, user.token)
  //need to fix this and append token to the user object directly maybe later
  return user.user
}

async function login(creds) {
  console.log('creds', creds)
  const response = await signin(creds)
  console.log('res', response)
  return handleUserResponse(response)
}

async function register({ email, password }) {
  const response = await registerthat({ email, password })
  return handleUserResponse(response)
}

async function logout() {
  window.localStorage.removeItem(localStorageKey)
}

export { getToken, login, register, logout, localStorageKey }
