import styles from 'App.module.scss'
import Header from 'components/Header/Header'
import Main from 'components/Main/Main'
import ScrollToTop from 'react-scroll-to-top'

import { useState } from 'react'
import {
  LoginStateContext,
  initialState,
} from 'components/contexts/LoginStateContext'

function MainPage() {
  // 管理尚未登入的顯示 model
  const [loginState, setLoginState] = useState(initialState)

  return (
    <div>
      <LoginStateContext.Provider value={[loginState, setLoginState]}>
        <Header />
        <Main />
      </LoginStateContext.Provider>
      <ScrollToTop
        smooth
        color="#fff"
        width="24"
        height="24"
        style={{
          borderRadius: '50%',
          backgroundColor: '#b0b0b0',
          opacity: '.8',
        }}
      />
    </div>
  )
}

export default MainPage
