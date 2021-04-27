import axios from 'axios'
export const getImages = async () => {
  const response = await axios.get(`${process.env.VUE_APP_API_ENDPOINT}/images`)
  return response.data
}
