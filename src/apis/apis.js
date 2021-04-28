import axios from 'axios'
export const getImages = async (page) => {
  const response = await axios.get(
    `${process.env.VUE_APP_API_ENDPOINT}/images?page=${page}`,
  )
  return response.data
}
