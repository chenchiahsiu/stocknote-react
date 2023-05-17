import styles from 'App.module.scss'
import Header from 'components/Header/Header'
import Main from 'components/Main/Main'

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
    </div>
  )
}

export default MainPage
