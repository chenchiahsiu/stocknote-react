import styles from 'App.module.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from 'pages/MainPage/MainPage'
import LoginPage from 'pages/LoginPage/LoginPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="main" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
