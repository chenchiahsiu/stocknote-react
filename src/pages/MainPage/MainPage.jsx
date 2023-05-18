import styles from 'App.module.scss'
import Header from 'components/Header/Header'
import Main from 'components/Main/Main'
import ScrollToTop from 'react-scroll-to-top'

import { useState } from 'react'
import {
  LoginStateContext,
  initialState,
} from 'components/contexts/LoginStateContext'
import { ReactComponent as Arrow } from 'assets/main_arrow.svg'

function MainPage() {
  // 管理尚未登入的顯示 model
  const [loginState, setLoginState] = useState(initialState)

  // 管理 hover 狀態
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <div>
      <LoginStateContext.Provider value={[loginState, setLoginState]}>
        <Header />
        <Main />
      </LoginStateContext.Provider>
      <ScrollToTop
        smooth
        component={<Arrow style={{ marginTop: '3px' }} />}
        style={{
          borderRadius: '50%',
          backgroundColor: hover ? '#8f8f8f' : '#b0b0b0',
          opacity: '0.8',
          width: '44px',
          height: '44px',
          bottom: '72px',
          transition: 'all .5s ease-in-out',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  )
}

export default MainPage
