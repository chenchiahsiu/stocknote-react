import styles from 'components/Navbar/Navbar.module.scss'
import { useContext } from 'react'
import { LoginStateContext } from 'components/contexts/LoginStateContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  // 管理尚未登入的顯示 model
  const [loginState, setLoginState] = useContext(LoginStateContext)

  return (
    <div className={styles.NavbarContainer}>
      <div className={styles.LeftSection}>
        <ul>
          <li className={styles.Title}>
            <a href="#" className={styles.Name}>
              <span>CMoney</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.69421 10.6196V7.46735H7.30289V10.6196C7.30289 10.9663 7.59636 11.25 7.95506 11.25H9.91156C10.2703 11.25 10.5637 10.9663 10.5637 10.6196V6.20647H11.6724C11.9724 6.20647 12.1159 5.84712 11.8876 5.65799L6.4355 0.910763C6.18768 0.696412 5.80942 0.696412 5.5616 0.910763L0.109468 5.65799C-0.11227 5.84712 0.0246858 6.20647 0.324683 6.20647H1.43337V10.6196C1.43337 10.9663 1.72685 11.25 2.08554 11.25H4.04204C4.40074 11.25 4.69421 10.9663 4.69421 10.6196Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </li>

          <div>
            <li>
              <a href="#">
                <span>理財寶商城</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    h=""
                    d="M2 4L6 8L10 4"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </li>
            <div className={styles.Option}>
              <ul>
                <li>
                  <a href="">理財寶</a>
                </li>
                <li>
                  <a href="">課程講座</a>
                </li>
                <li>
                  <a href="">影音直播</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <li>
              <a href="#">
                <span>股市社群</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    h=""
                    d="M2 4L6 8L10 4"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </li>
            <div className={`${styles.Option} ${styles.Length}`}>
              <ul>
                <li>
                  <a href="">股市報報同樂會</a>
                </li>
                <li>
                  <a href="">美股報報同樂會</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <li>
              <a href="#">
                <span>投資理財</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    h=""
                    d="M2 4L6 8L10 4"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </li>
            <div className={`${styles.Option} ${styles.Length}`}>
              <ul>
                <li>
                  <a href="">Money錢</a>
                </li>
                <li>
                  <a href="">投資網誌</a>
                </li>
                <li>
                  <a href="">投資小學堂</a>
                </li>
                <li>
                  <a href="">美股放大鏡</a>
                </li>
                <li>
                  <a href="">口袋證券</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <li>
              <a href="#">
                <span>即時股市</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    h=""
                    d="M2 4L6 8L10 4"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </li>
            <div className={styles.Option}>
              <ul>
                <li>
                  <a href="">台股股市</a>
                </li>
                <li>
                  <a href="">美股股市</a>
                </li>
                <li>
                  <a href="">台股ETF</a>
                </li>
                <li>
                  <a href="">美股ETF</a>
                </li>
                <li>
                  <a href="">債券</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <li>
              <a href="#">
                <span>美股專區</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    h=""
                    d="M2 4L6 8L10 4"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </li>
            <div className={`${styles.Option} ${styles.Length}`}>
              <ul>
                <li>
                  <a href="">美股股市</a>
                </li>
                <li>
                  <a href="">美股ETF</a>
                </li>
                <li>
                  <a href="">美股報報同樂會</a>
                </li>
                <li>
                  <a href="">美股放大鏡</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <li>
              <a href="#">
                <span>模擬投資</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    h=""
                    d="M2 4L6 8L10 4"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </li>
            <div className={styles.Option}>
              <ul>
                <li>
                  <a href="">股市大富翁</a>
                </li>
                <li>
                  <a href="">選股網</a>
                </li>
                <li>
                  <a href="">雲端控股</a>
                </li>
                <li>
                  <a href="">報明牌</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <li>
              <a href="#">
                <span>聯絡我們</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    h=""
                    d="M2 4L6 8L10 4"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </li>
            <div className={`${styles.Option} ${styles.Length}`}>
              <ul>
                <li>
                  <a href="">客服中心</a>
                </li>
                <li>
                  <a href="">加入我們</a>
                </li>
                <li>
                  <a href="">成為CMoney作者</a>
                </li>
                <li>
                  <a href="">場地租借</a>
                </li>
              </ul>
            </div>
          </div>

          <li>
            <a href="#">作者專區</a>
          </li>
        </ul>
      </div>
      <div className={styles.RightSection}>
        <ul>
          <li>
            <a href="#">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 14C5.77614 14 6 13.7761 6 13.5C6 13.2239 5.77614 13 5.5 13C5.22386 13 5 13.2239 5 13.5C5 13.7761 5.22386 14 5.5 14Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12.5 14C12.7761 14 13 13.7761 13 13.5C13 13.2239 12.7761 13 12.5 13C12.2239 13 12 13.2239 12 13.5C12 13.7761 12.2239 14 12.5 14Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M1 2H3.36364L4.94727 10.0338C5.00131 10.31 5.14931 10.5582 5.36537 10.7348C5.58143 10.9114 5.85178 11.0052 6.12909 10.9998H11.8727C12.15 11.0052 12.4204 10.9114 12.6365 10.7348C12.8525 10.5582 13.0005 10.31 13.0545 10.0338L14 4.99993H3.95455"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path d="M14 5H4L5.5 11H12.5L14 5Z" fill="white"></path>
              </svg>
              <span onClick={() => setLoginState('Toast')}>結帳</span>
            </a>
          </li>
          <li>
            <a onClick={() => navigate('/login')}>
              <span>登入/註冊</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
