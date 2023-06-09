import styles from 'components/Modal/Toast/Toast.module.scss'
import { ReactComponent as Cross } from 'assets/cross.svg'

import { useContext } from 'react'
import { LoginStateContext } from 'components/contexts/LoginStateContext'

import { useNavigate } from 'react-router-dom'

const Toast = () => {
  const navigate = useNavigate()

  // 管理尚未登入的顯示 model
  const [loginState, setLoginState] = useContext(LoginStateContext)

  return (
    <div className={styles.ToastBackground}>
      <div className={styles.ToastContainer}>
        <div className={styles.TopSection}>
          <span>您尚未登入</span>
          <Cross className={styles.Cross} onClick={() => setLoginState('')} />
        </div>
        <div className={styles.BottomSection}>
          <span>這個功能需要登入才可使用。</span>
          <div className={styles.Button}>
            <button onClick={() => setLoginState('')}>取消</button>
            <button className={styles.Login} onClick={() => navigate('/login')}>
              登入
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toast
