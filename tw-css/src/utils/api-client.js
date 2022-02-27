const apiURL = '/api'
import axios from 'axios'

async function client(endpoint, { token, headers: customHeaders, ...customConfig } = {}) {
  const config = {
    headers: {
      'x-auth-token': token ? `${token}` : undefined,
      ...customHeaders,
    },
    ...customConfig,
  }

  const response = await axios.post(`${apiURL}/${endpoint}`, config)

  const data = await response.json()
  if (response.ok) {
    return data
  } else {
    return Promise.reject(data)
  }
}

export { client }
