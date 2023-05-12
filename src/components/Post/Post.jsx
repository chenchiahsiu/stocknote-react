import styles from '../Post/Post.module.scss'
import { ReactComponent as Avatar } from 'assets/avatar.svg'
import { ReactComponent as Dot } from 'assets/dot.svg'
import { ReactComponent as Badge } from 'assets/badge_silver.svg'
import { ReactComponent as Thumb } from 'assets/thumb.svg'
import { ReactComponent as Coin } from 'assets/coin.svg'
import { ReactComponent as Like } from 'assets/like.svg'
import { ReactComponent as Reply } from 'assets/reply.svg'
import { ReactComponent as Share } from 'assets/share.svg'
import { ReactComponent as Award } from 'assets/award.svg'
import { ReactComponent as Camera } from 'assets/camera.svg'
import Stock from 'assets/images/stock.png'
import { ReactComponent as Ha } from 'assets/ha.svg'
import { ReactComponent as Wow } from 'assets/wow.svg'
import { ReactComponent as Money } from 'assets/money.svg'
import { ReactComponent as Cry } from 'assets/cry.svg'
import { ReactComponent as Relly } from 'assets/relly.svg'
import { ReactComponent as Angry } from 'assets/angry.svg'

import { useContext } from 'react'
import { LoginStateContext } from 'components/contexts/LoginStateContext'

const Post = ({ post }) => {
  // 管理尚未登入的顯示 model
  const [loginState, setLoginState] = useContext(LoginStateContext)

  // 跳出尚未登入的顯示 model
  function handleToast() {
    setLoginState('Toast')
  }

  return (
    <div className={styles.PostContainer}>
      <div className={styles.TopSection}>
        <div className={styles.AvatarContainer}>
          <Avatar className={styles.Avatar} />
          <span className={styles.Level}>Lv.1</span>
        </div>
        <div className={styles.TopRightPart}>
          <div className={styles.NameContainer}>
            <span className={styles.Name}>Jasmine</span>
            <div className={styles.BadgeContainer}>
              <Badge className={styles.Badge} />
              <span className={styles.Title}>湊熱鬧達人 · </span>
              <span className={styles.Time}>2 小時前</span>
            </div>
          </div>
          <div className={styles.DotContainer}>
            <div className={styles.Background}></div>
            <Dot className={styles.Dot} />
          </div>
        </div>
      </div>
      <div className={styles.StockContainer}>
        <div className={styles.Background}></div>
        <img src={Stock} alt="stock" className={styles.Stock} />
        <span>開發金</span>
      </div>
      <div className={styles.Content}>
        <div className={styles.Text}>{post.content}</div>
        <div className={styles.Number}>
          <div className={styles.LeftPart}>
            <div className={styles.ThumbContainer}>
              <Thumb className={styles.Thumb} />
              <span>221</span>
            </div>
            <div className={styles.CoinContainer}>
              <Coin className={styles.Coin} />
              <span>11P</span>
            </div>
          </div>
          <div className={styles.Message}>
            <span>38則留言</span>
          </div>
        </div>
      </div>
      <div className={styles.IconContainer}>
        <div
          className={`${styles.Icon} ${styles.Good}`}
          onClick={() => handleToast()}
        >
          <Like className={styles.Like} />
          <span>讚</span>
        </div>
        <div className={styles.Emoticon}>
          <Thumb className={styles.Emot} />
          <Ha className={styles.Emot} />
          <Money className={styles.Emot} />
          <Wow className={styles.Emot} />
          <Cry className={styles.Emot} />
          <Relly className={styles.Emot} />
          <Angry className={styles.Emot} />
        </div>
        <div className={styles.Icon} onClick={() => handleToast()}>
          <Reply className={styles.Reply} />
          <span>留言</span>
        </div>
        <div className={styles.Icon}>
          <Share className={styles.Share} />
          <span>分享</span>
        </div>
        <div className={styles.Icon} onClick={() => handleToast()}>
          <Award className={styles.Award} />
          <span className={styles.AwardText}>打賞</span>
        </div>
      </div>

      <div className={styles.BottomSection}>
        <div className={styles.UserReplyContainer}>
          <Avatar className={styles.Avatar} />
          <div className={styles.Input}>
            <div className={styles.Text} onClick={() => handleToast()}>
              有什麼不同看法 . . .
            </div>
            <Camera className={styles.Camera} />
          </div>
        </div>
        <span className={styles.CheckMessage}>查看 38 則留言...</span>
      </div>
    </div>
  )
}

export default Post
