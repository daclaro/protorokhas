import axios from 'axios'
const baseUrl = '/api/auth'

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  console.log(response.data)
  //{token:"ksdlskds"}
  return response.data
}

export default login
