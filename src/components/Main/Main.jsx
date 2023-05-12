import styles from '../Main/Main.module.scss'
import MainTopSection from 'components/MainTopSection/MainTopSection'
import Post from 'components/Post/Post'
import Advertisement from 'components/Advertisement/Advertisement'
import Sidebar from 'components/Sidebar/Sidebar'
import Board from 'components/Board/Board'
import PostCollection from 'components/PostCollection/PostCollection'

import { useState } from 'react'
import {
  LoginStateContext,
  initialState,
} from 'components/contexts/LoginStateContext'
import Toast from 'components/Toast/Toast'
import Posting from 'components/Posting/Posting'
import { dummyPosts } from 'Data/dummyPosts'

const Main = () => {
  // 管理尚未登入的顯示 model
  const [loginState, setLoginState] = useState(initialState)

  // 管理發文 modal
  const [post, setPost] = useState('')

  return (
    <div className={styles.MainContainer}>
      <LoginStateContext.Provider value={[loginState, setLoginState]}>
        <div className={styles.ContentContainer}>
          <div className={styles.SidebarContainer}>
            <Sidebar />
          </div>
          <div className={styles.CenterContainer}>
            <Advertisement />
            <MainTopSection post={post} setPost={setPost} />
            <PostCollection posts={dummyPosts} />
          </div>
          <div className={styles.BoardContainer}>
            <Board />
          </div>
        </div>
        {loginState === 'Toast' && <Toast />}
        {post === 'posting' && <Posting post={post} setPost={setPost} />}
      </LoginStateContext.Provider>
    </div>
  )
}

export default Main
