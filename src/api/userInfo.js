import axios from 'axios'

const BASE_URL = 'https://user-list.alphacamp.io'
const INDEX_URL = BASE_URL + '/api/v1/users'

// 串接使用者資訊
export const getUserInfo = async () => {
  try {
    const res = await axios.get(INDEX_URL)
    return res.data
  } catch (error) {
    console.log('[Get Data failed]: ', error)
  }
}
