import styles from '../Main/Main.module.scss'
import MainTopSection from 'components/MainTopSection/MainTopSection'
import Advertisement from 'components/Advertisement/Advertisement'
import Sidebar from 'components/Sidebar/Sidebar'
import Board from 'components/Board/Board'
import PostCollection from 'components/PostCollection/PostCollection'

import { useState, useContext } from 'react'
import { LoginStateContext } from 'components/contexts/LoginStateContext'
import Toast from 'components/Modal/Toast/Toast'
import Posting from 'components/Modal/Posting/Posting'

const Main = () => {
  // 管理尚未登入的顯示 model
  const [loginState, setLoginState] = useContext(LoginStateContext)

  // 管理發文 modal 出現
  const [postModal, setPostModal] = useState('')

  // 管理使用者輸入的發文內容
  const [inputValue, setInputValue] = useState('')

  // 新發文陣列
  const newPosts = JSON.parse(localStorage.getItem('newPosts')) || []

  // 儲存所有發文
  const [allPosts, setAllPosts] = useState(newPosts)

  // 處理使用者輸入的發文內容
  const handleChange = (value) => {
    setInputValue(value)
  }

  // 加入新貼文到儲存貼文的陣列中
  const handelAddPost = () => {
    if (inputValue.length === 0) {
      return
    }

    const newPost = {
      content: inputValue,
      id: Math.floor(Math.random() * 200),
    }

    newPosts.unshift(newPost)
    localStorage.setItem('newPosts', JSON.stringify(newPosts))

    setAllPosts(newPosts)
    setInputValue('')
    setPostModal('')
  }

  // 加入新貼文到儲存貼文的陣列中(使用 Enter 鍵)
  const handleKeyDown = () => {
    if (inputValue.length === 0) {
      return
    }

    const newPost = {
      content: inputValue,
      id: Math.floor(Math.random() * 200),
    }

    newPosts.unshift(newPost)
    localStorage.setItem('newPosts', JSON.stringify(newPosts))

    setAllPosts(newPosts)
    setInputValue('')
    setPostModal('')
  }

  // 刪除貼文
  const handleDelete = (id) => {
    // allPosts 發文是空的就結束
    if (!allPosts || !allPosts.length) return

    // 回傳點擊要刪除的貼文被儲存於 localStorage 陣列中所在的 index
    const postIndex = allPosts.findIndex((post) => post.id === id)

    // 傳入的 id 不存在就結束
    if (postIndex === -1) return

    // 從點擊刪除的 index 的位置開始刪除，刪除 1 個元素
    allPosts.splice(postIndex, 1)

    // 更新後的陣列重新儲存回去 localStorage
    localStorage.setItem('newPosts', JSON.stringify(allPosts))

    // 更新陣列渲染畫面
    setAllPosts(allPosts.filter((post) => post.id !== id))
  }

  return (
    <div className={styles.MainContainer}>
      <div className={styles.ContentContainer}>
        <div className={styles.SidebarContainer}>
          <Sidebar />
        </div>
        <div className={styles.CenterContainer}>
          <Advertisement />
          <MainTopSection postModal={postModal} setPostModal={setPostModal} />
          <PostCollection posts={allPosts} onDelete={handleDelete} />
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
    </div>
  )
}

export default Main
