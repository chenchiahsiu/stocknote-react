import axios from 'axios'

const baseUrl = 'http://localhost:3002'

// 取得所有貼文
export const getPosts = async () => {
  try {
    const res = await axios.get(`${baseUrl}/posts`)

    return res.data
  } catch (error) {
    console.log('[Get Posts failed]: ', error)
  }
}

// 新增貼文
export const createPost = async (payload) => {
  try {
    const { content } = payload
    const res = await axios.post(`${baseUrl}/posts`, {
      content,
    })

    return res.data
  } catch (error) {
    console.log('[Create Posts failed]: ', error)
  }
}
