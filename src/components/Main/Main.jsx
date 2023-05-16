import styles from '../Main/Main.module.scss'
import MainTopSection from 'components/MainTopSection/MainTopSection'
import Advertisement from 'components/Advertisement/Advertisement'
import Sidebar from 'components/Sidebar/Sidebar'
import Board from 'components/Board/Board'
import PostCollection from 'components/PostCollection/PostCollection'

import { useState } from 'react'
import {
  LoginStateContext,
  initialState,
} from 'components/contexts/LoginStateContext'
import Toast from 'components/Modal/Toast/Toast'
import Posting from 'components/Modal/Posting/Posting'
import { dummyPosts } from 'data/dummyPosts'

const Main = () => {
  // 管理尚未登入的顯示 model
  const [loginState, setLoginState] = useState(initialState)

  // 管理發文 modal 出現
  const [postModal, setPostModal] = useState('')

  // 管理使用者輸入的發文內容
  const [inputValue, setInputValue] = useState('')

  // 儲存所有發文陣列
  const [posts, setPosts] = useState(dummyPosts)

  // 處理使用者輸入的發文內容
  const handleChange = (value) => {
    setInputValue(value)
  }

  // 加入新貼文到儲存貼文的陣列中
  const handelAddPost = () => {
    if (inputValue.length === 0) {
      return
    }
    setPosts((prevPosts) => {
      return [
        {
          content: inputValue,
          id: Math.random() * 100,
        },
        ...prevPosts,
      ]
    })
    setInputValue('')
    setPostModal('')
  }

  // 加入新貼文到儲存貼文的陣列中(使用 Enter 鍵)
  const handleKeyDown = () => {
    if (inputValue.length === 0) {
      return
    }
    setPosts((prevPosts) => {
      return [
        {
          content: inputValue,
          id: Math.random() * 100,
        },
        ...prevPosts,
      ]
    })
    setInputValue('')
    setPostModal('')
  }

  // 刪除貼文
  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

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
            <PostCollection posts={posts} onDelete={handleDelete} />
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
