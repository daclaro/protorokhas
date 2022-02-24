import axios from 'axios'
const baseUrl = '/api/notes'

const postService = async (posta, header) => {
  const headers = {
    'x-auth-token': header,
  }

  const response = await axios.post(baseUrl, posta, {
    headers: headers,
  })
  console.log(response.data)
  //{token:"ksdlskds"}
  return response.data
}
const getPostService = async () => {
  const response = await axios.get(baseUrl)
  //{token:"ksdlskds"}
  return response.data
}
const deletePostService = async (id, header) => {
  const headers = {
    'x-auth-token': header,
  }
  const response = await axios.delete(baseUrl + '/' + id, {
    headers: headers,
  })
  console.log(response.data)
  return response.data
}
const exporta = { postService, getPostService, deletePostService }
export default exporta
