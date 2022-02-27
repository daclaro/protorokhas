import axios from 'axios'
const baseUrl = '/api/users/me'

const me = async (header) => {
  const headers = {
    Authorization: `Bearer ${header}`,
  }
  const response = await axios.get(baseUrl, {
    headers: headers,
  })
  console.log('TAKER ME DOWEN', response.data)
  return response.data
}

export default me
