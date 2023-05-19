import styles from 'components/Sidebar/Sidebar.module.scss'
import { ReactComponent as Avatar } from 'assets/avatar.svg'
import { ReactComponent as Plus } from 'assets/plus.svg'
import { ReactComponent as Bell } from 'assets/bell.svg'
import { ReactComponent as MessageHover } from 'assets/message_hover.svg'
import { ReactComponent as Message } from 'assets/message.svg'
import { ReactComponent as Flag } from 'assets/flag.svg'
import { ReactComponent as Index } from 'assets/stock_index.svg'
import { ReactComponent as Wall } from 'assets/wall.svg'
import { ReactComponent as Club } from 'assets/club.svg'
import { ReactComponent as Favorite } from 'assets/favorite.svg'
import { ReactComponent as FavoriteHover } from 'assets/favorite_hover.svg'
import { ReactComponent as Arrow } from 'assets/arrow.svg'
import { ReactComponent as Badge } from 'assets/badge.svg'
import { ReactComponent as Leaderboard } from 'assets/leaderboard.svg'
import { ReactComponent as Help } from 'assets/help.svg'
import { ReactComponent as Handshake } from 'assets/handshake.svg'

import { useContext } from 'react'
import { LoginStateContext } from 'components/contexts/LoginStateContext'

const Sidebar = ({ sidebarOption, setSidebarOption }) => {
  // 管理尚未登入的顯示 model
  const [loginState, setLoginState] = useContext(LoginStateContext)

  // 跳出尚未登入的顯示 model
  function handleToast() {
    setLoginState('Toast')
  }

  return (
    <div className={styles.SidebarContainer}>
      <div className={styles.TopPart}>
        <Avatar className={styles.Avatar} />
        <div className={styles.Status}>
          <span className={styles.Name} onClick={() => handleToast()}>
            訪客
          </span>
          <div className={styles.Level}>
            <span className={styles.LV}>LV.</span>
            <span className={styles.Number}>0</span>
            <div className={styles.Score}>
              <span>我的積分：</span>
              <span className={styles.Zero}>0</span>
              <span>升級還需：</span>
              <span className={styles.Zero}>0</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.BottomPart}>
        <div>
          <span className={`${styles.Number} ${styles.Zero}`}>0</span>
          <span className={styles.Text}>好讚</span>
        </div>
        <div>
          <span className={styles.Number} onClick={() => handleToast()}>
            0
          </span>
          <span className={styles.Text}>粉絲</span>
        </div>
        <div className={styles.BorderNone}>
          <span className={styles.Number} onClick={() => handleToast()}>
            0
          </span>
          <span className={styles.Text}>追蹤</span>
        </div>
      </div>
      <div className={styles.OptionContainer}>
        <div className={styles.TopOption}>
          <div onClick={() => handleToast()}>
            <Plus />
            <span>我的自選股</span>
          </div>
          <div onClick={() => handleToast()}>
            <Bell />
            <span>我的通知</span>
          </div>
          <div
            className={sidebarOption === 'break' ? styles.Active : ''}
            onClick={() => setSidebarOption('break')}
          >
            {sidebarOption === 'break' ? <MessageHover /> : <Message />}
            <span>熱門爆料</span>
            <span className={styles.HOT}>HOT</span>
          </div>
          <div onClick={() => handleToast()}>
            <Flag />
            <span>精選推薦</span>
            <span className={styles.New}>NEW</span>
          </div>
          <div onClick={() => handleToast()}>
            <Index />
            <span>大盤指數</span>
          </div>
        </div>
        <div className={styles.BottomOption}>
          <div onClick={() => handleToast()}>
            <Wall />
            <span>動態牆</span>
          </div>
          <div onClick={() => handleToast()}>
            <Club />
            <span>我的社團</span>
            <Arrow className={styles.Arrow} />
          </div>
          <div
            className={sidebarOption === 'favorite' ? styles.Active : ''}
            onClick={() => setSidebarOption('favorite')}
          >
            {sidebarOption === 'favorite' ? <FavoriteHover /> : <Favorite />}
            <span>我的收藏</span>
          </div>
        </div>
        <div className={styles.BottomOption}>
          <div onClick={() => handleToast()}>
            <Badge />
            <span>熱門同學</span>
          </div>
          <div onClick={() => handleToast()}>
            <Leaderboard />
            <span>熱門股票</span>
          </div>
          <div onClick={() => handleToast()}>
            <Help />
            <span>熱門問答</span>
          </div>
        </div>
        <div className={`${styles.BottomOption} ${styles.LastOption}`}>
          <div>
            <Handshake />
            <span>與我們合作</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
