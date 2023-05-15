import styles from '../Main/Main.module.scss'
import MainTopSection from 'components/MainTopSection/MainTopSection'
import Advertisement from 'components/Advertisement/Advertisement'
import Sidebar from 'components/Sidebar/Sidebar'
import Board from 'components/Board/Board'
import PostCollection from 'components/PostCollection/PostCollection'

import { useEffect, useState } from 'react'
import {
  LoginStateContext,
  initialState,
} from 'components/contexts/LoginStateContext'
import Toast from 'components/Modal/Toast/Toast'
import Posting from 'components/Modal/Posting/Posting'
import { getPosts, createPost } from 'api/posts'

const Main = () => {
  // 管理尚未登入的顯示 model
  const [loginState, setLoginState] = useState(initialState)

  // 管理發文 modal 出現
  const [postModal, setPostModal] = useState('')

  // 管理使用者輸入的發文內容
  const [inputValue, setInputValue] = useState('')

  // 儲存所有發文陣列
  const [posts, setPosts] = useState([])

  // 處理使用者輸入的發文內容
  const handleChange = (value) => {
    setInputValue(value)
  }

  // 加入新貼文到儲存貼文的陣列中
  const handelAddPost = async () => {
    if (inputValue.length === 0) {
      return
    }

    try {
      const data = await createPost({
        content: inputValue,
      })

      setPosts((prevPosts) => {
        return [
          {
            content: data.content,
            id: data.id,
          },
          ...prevPosts,
        ]
      })
      setInputValue('')
      setPostModal('')
    } catch (error) {
      console.error(error)
    }
  }

  // 加入新貼文到儲存貼文的陣列中(使用 Enter 鍵)
  const handleKeyDown = async () => {
    if (inputValue.length === 0) {
      return
    }

    try {
      const data = await createPost({
        content: inputValue,
      })

      setPosts((prevPosts) => {
        return [
          {
            content: data.content,
            id: data.id,
          },
          ...prevPosts,
        ]
      })
      setInputValue('')
      setPostModal('')
    } catch (error) {
      console.error(error)
    }
  }

  // 串接出現所有貼文
  useEffect(() => {
    const getPostsAsync = async () => {
      try {
        const posts = await getPosts()
        const postsReverse = posts
          .map((post) => ({
            ...post,
          }))
          .reverse()
        setPosts(postsReverse)
      } catch (error) {
        console.error(error)
      }
    }
    console.log(posts.reverse())
    getPostsAsync()
  }, [])

  return (
    <div className={styles.MainContainer}>
      <LoginStateContext.Provider value={[loginState, setLoginState]}>
        <div className={styles.ContentContainer}>
          <div className={styles.SidebarContainer}>
            <Sidebar />
          </div>
          <div className={styles.CenterContainer}>
            <Advertisement />
            <MainTopSection postModal={postModal} setPostModal={setPostModal} />
            <PostCollection posts={posts} />
          </div>
          <div className={styles.BoardContainer}>
            <Board />
          </div>
        </div>
        {loginState === 'Toast' && <Toast />}
        {postModal === 'posting' && (
          <Posting
            postModal={postModal}
            setPostModal={setPostModal}
            inputValue={inputValue}
            setInputValue={setInputValue}
            onChange={handleChange}
            onAddPost={handelAddPost}
            onKeyDown={handleKeyDown}
          />
        )}
      </LoginStateContext.Provider>
    </div>
  )
}

export default Main
