import styles from '../MainTopSection/MainTopSection.module.scss'
import { ReactComponent as Avatar } from 'assets/avatar.svg'
import { useContext, useState } from 'react'
import { LoginStateContext } from 'components/contexts/LoginStateContext'

const MainTopSection = ({ postModal, setPostModal }) => {
  // 管理尚未登入的顯示 model
  const [loginState, setLoginState] = useContext(LoginStateContext)

  // 管理 '人氣'、'專欄'、'達人'...
  const [choice, setChoice] = useState('popular')

  // 管理 '最熱'、'最新'
  const [postOrder, setPostOrder] = useState('new')

  // 切換 '人氣'、'專欄'、'達人'...
  function handleChoose(changePage) {
    if (changePage === 'article') {
      setChoice('article')
    } else if (changePage === 'expert') {
      setChoice('expert')
    } else if (changePage === 'report') {
      setChoice('report')
    } else if (changePage === 'question') {
      setChoice('question')
    } else if (changePage === 'news') {
      setChoice('news')
    } else {
      setChoice('popular')
    }
  }

  // 切換 '最熱'、'最新'
  function handlePostOrder(postOrder) {
    if (postOrder === 'new') {
      setPostOrder('new')
    } else {
      setPostOrder('popular')
    }
  }

  return (
    <div className={styles.MainTopSectionContainer}>
      <div className={styles.Title}>
        <span className={styles.Active}>首頁</span>
        <span className={styles.Icon}>{`>`}</span>
        <span>熱門股市爆料</span>
      </div>
      <div className={styles.HeadingContainer}>
        <span className={styles.Heading}>熱門股市爆料</span>
      </div>
      <div className={styles.ClickPost}>
        <Avatar className={styles.Avatar} />
        <div className={styles.Text} onClick={() => setPostModal('posting')}>
          想和大家分享什麼呢？
        </div>
      </div>
      <div className={styles.ColumnContainer}>
        <div className={styles.Column}>
          <span
            className={choice === 'popular' ? styles.Active : ''}
            onClick={() => {
              handleChoose('popular')
            }}
          >
            人氣
          </span>
          <span
            className={choice === 'article' ? styles.Active : ''}
            onClick={() => {
              handleChoose('article')
            }}
          >
            專欄
          </span>
          <span
            className={choice === 'expert' ? styles.Active : ''}
            onClick={() => {
              handleChoose('expert')
            }}
          >
            達人
          </span>
          <span onClick={() => setLoginState('Toast')}>自選</span>
          <span onClick={() => setLoginState('Toast')}>追蹤</span>
          <span
            className={choice === 'report' ? styles.Active : ''}
            onClick={() => {
              handleChoose('report')
            }}
          >
            報告
          </span>
          <span
            className={choice === 'question' ? styles.Active : ''}
            onClick={() => {
              handleChoose('question')
            }}
          >
            問答
          </span>
          <span
            className={choice === 'news' ? styles.Active : ''}
            onClick={() => {
              handleChoose('news')
            }}
          >
            新聞
          </span>
        </div>
      </div>
      <div className={styles.Option}>
        <button
          className={postOrder === 'popular' ? styles.Active : ''}
          onClick={() => {
            handlePostOrder('popular')
          }}
        >
          最熱
        </button>
        <button
          className={postOrder === 'new' ? styles.Active : ''}
          onClick={() => {
            handlePostOrder('new')
          }}
        >
          最新
        </button>
      </div>
    </div>
  )
}

export default MainTopSection
