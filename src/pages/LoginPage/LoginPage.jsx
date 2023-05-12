import styles from 'pages/LoginPage/LoginPage.module.scss'
import Logo from 'assets/images/login_logo.jpg'
import Google from 'assets/images/btn_google.png'
import FB from 'assets/images/btn_fb.png'
import Apple from 'assets/images/btn_apple.png'

function LoginPage() {
  return (
    <div className={styles.LoginPageContainer}>
      <div className={styles.LoginPageOuterContainer}>
        <div className={styles.LoginPageInnerContainer}>
          <img src={Logo} alt="Logo" className={styles.Logo} />
          <div className={styles.TopSection}>
            <input
              type="text"
              placeholder="請輸入 CNomey 帳號（手機號碼或 Email）"
            />
            <input type="password" placeholder="請輸入密碼" />
            <div>
              <label htmlFor="Checked">
                <input
                  id="Checked"
                  type="checkbox"
                  value=""
                  defaultChecked={true}
                ></input>
                保持登入狀態
              </label>
              <a href="">忘記密碼？</a>
            </div>
            <button>登入</button>
          </div>
          <div className={styles.BottomSection}>
            <div className={styles.Regist}>
              <span className={styles.Member}>還不是會員嗎? </span>
              <a>立即註冊 CNomey 帳號</a>
            </div>
            <div className={styles.LoginContainer}>
              <span className={styles.LeftLine}></span>
              <span className={styles.Login}>快速登入</span>
              <span className={styles.RightLine}></span>
            </div>
            <div className={styles.Button}>
              <button className={styles.Google}>
                <img src={Google} alt="Google logo" />
                <span>以 Google 帳號登入</span>
              </button>
              <button className={styles.FB}>
                <img src={FB} alt="FB logo" />
                <span>以 Facebook 帳號登入</span>
              </button>
              <button className={styles.Apple}>
                <img src={Apple} alt="Apple logo" />
                <span>使用 Apple 登入</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Footer}>
        <div className={styles.FooterContainer}>
          <div className={styles.Announcement}>
            <div>版權所有 CNomey 財經資訊股份有限公司</div>
            <div>Copyright © 2023 CNomey Corporation. All rights reserved.</div>
          </div>
          <ul>
            <li>
              <a href="">服務條款</a>
            </li>
            <li>
              <a href="">隱私權政策</a>
            </li>
            <li>
              <a href="">著作權政策</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
